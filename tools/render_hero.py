"""Render MPAI hero background loop: mint sky, drifting clouds, Essex hills with cloud shadows.
Re-render: python3 tools/render_hero.py | ffmpeg -f rawvideo -pix_fmt rgb24 -s 960x540 -r 24 -i - -c:v libx264 -crf 20 -tune animation -pix_fmt yuv420p -g 48 -movflags +faststart -an images/video/hero-sky.mp4
Poster: python3 tools/render_hero.py still 0 images/video/hero-sky-poster.jpg
Writes raw RGB frames to stdout for ffmpeg. Seamless loop: every motion is an integer number of cycles per loop."""
import sys
import numpy as np
from PIL import Image

W, H = 960, 540          # output size
FPS, T = 24, 20.0        # 20 s loop
N = int(FPS * T)
LW, LH = 480, 270        # noise grid (half-res, upscaled; clouds are soft)

rng = np.random.default_rng(7)

def hexrgb(h):
    h = h.lstrip('#')
    return np.array([int(h[i:i+2], 16) for i in (0, 2, 4)], dtype=np.float32) / 255

PAPER = hexrgb('F4F7FA'); MINT = hexrgb('7FD8CF'); TEAL = hexrgb('19A39A')
NAVY = hexrgb('0F1B2D'); SKY_TOP = hexrgb('86CFC6'); SKY_LOW = hexrgb('E2F2EF')
SHADE = hexrgb('A9C7CC')

# --- cloud spectrum (periodic by construction) ---
ky = np.fft.fftfreq(LH) * LH          # integer cycles over the grid height
kx = np.fft.fftfreq(LW) * LW          # integer cycles over the grid width
KX, KY = np.meshgrid(kx, ky)
# stretch clouds horizontally: weight y-frequencies more
K = np.sqrt((KX * 1.7) ** 2 + (KY * 1.0) ** 2)
K[0, 0] = 1
amp = K ** -1.6
amp *= np.exp(-(K / 26.0) ** 2)
amp[0, 0] = 0
spec = amp * np.exp(1j * rng.uniform(0, 2 * np.pi, K.shape))
# morph: each component rotates an integer number of times per loop (0 or +/-1)
morph = rng.choice([-1, 0, 0, 1], size=K.shape)
# drift: whole field moves one grid width per loop (left to right)

def clouds(t):
    ph = 2 * np.pi * (t / T)
    s = spec * np.exp(1j * ph * morph) * np.exp(-1j * ph * KX)
    return np.real(np.fft.ifft2(s))

f0 = clouds(0.0)
MU, SD = f0.mean(), f0.std()

def up(a):
    return np.asarray(Image.fromarray(a.astype(np.float32), mode='F').resize((W, H), Image.BICUBIC))

def smooth(e0, e1, x):
    x = np.clip((x - e0) / (e1 - e0), 0, 1)
    return x * x * (3 - 2 * x)

yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
v = yy / H; u = xx / W

# --- static sky ---
sky = SKY_TOP[None, None] * (1 - smooth(0, 0.75, v))[..., None] + SKY_LOW[None, None] * smooth(0, 0.75, v)[..., None]
glow = np.exp(-(((u - 0.78) / 0.28) ** 2 + ((v - 0.18) / 0.30) ** 2))
sky = sky + (PAPER - sky) * (0.55 * glow)[..., None]

# where clouds may sit: upper sky, thinning towards the horizon
cloud_mask = 1 - smooth(0.42, 0.66, v)

# --- hills: three rolling ridges, back to front ---
def ridge(base, a, seed):
    r = np.random.default_rng(seed)
    y = np.full(W, base, dtype=np.float32)
    x = np.arange(W) / W
    for k, w in ((1, 1.0), (2, .45), (3, .12)):
        y += a * w * np.sin(2 * np.pi * (k * x + r.uniform()))
    return y

ridges = [
    (ridge(0.71, 0.022, 1), hexrgb('8CC9C0'), 0.06),   # far, hazy mint
    (ridge(0.80, 0.020, 2), hexrgb('3E8E8A'), 0.14),   # middle, teal
    (ridge(0.90, 0.018, 3), hexrgb('1F4E5A'), 0.18),   # near, deep teal
]
foot = hexrgb('132A3A')

hedge = np.zeros((H, W), np.float32)
far = ridges[0][0] * H
r2 = np.random.default_rng(11)
trees = np.zeros((H, W), np.float32)
for cx in r2.uniform(0, W, 70):
    if 0.80 * W < cx < 0.86 * W: continue
    rad = r2.uniform(4, 9)
    cy = far[int(cx)] - rad * 0.4
    trees = np.maximum(trees, np.clip(rad - np.sqrt((xx - cx) ** 2 + ((yy - cy) * 1.3) ** 2) + 0.5, 0, 1))
sx = int(0.83 * W); base = far[sx]
spire = ((np.abs(xx - sx) < 4.5) & (yy > base - 16) & (yy <= base + 2)) | \
        ((np.abs(xx - sx) < 1 + 3.5 * np.clip((yy - (base - 34)) / 18, 0, 1)) & (yy > base - 34) & (yy <= base - 16))
trees = np.maximum(trees, spire.astype(np.float32))
TREE = hexrgb('6FB3AB')

# shadow sampling: map field rows onto the sky's cloud rows, foreshortened
src_rows = np.clip((0.08 * H + (np.arange(H) - 0.66 * H) * 1.6).astype(int), 0, H - 1)

def frame(t):
    f = (clouds(t) - MU) / SD
    c = up(f)
    # cloud density + darker undersides from a vertically offset sample
    dens = smooth(0.15, 1.35, c * cloud_mask + 0.35 * cloud_mask - 0.35)
    under = np.roll(c, -10, axis=0)
    shade = smooth(-0.2, 0.9, under - c)
    ccol = PAPER[None, None] * (1 - 0.55 * shade[..., None]) + SHADE[None, None] * (0.55 * shade[..., None])
    img = sky * (1 - dens[..., None] * 0.92) + ccol * (dens[..., None] * 0.92)

    # cloud shadows across the fields: same field, sampled lower and shifted
    sh = smooth(0.2, 1.5, np.roll(c[src_rows], 40, axis=1))
    for r, col, shadow_k in ridges:
        top = r[None, :] * H
        a = np.clip(yy - top + 0.5, 0, 1)                  # 1-px anti-aliased edge
        depth = smooth(0, 0.25 * H, yy - top)               # darker further down each field
        fill = col[None, None] * (1 - 0.18 * depth[..., None])
        fill = fill * (1 - shadow_k * sh[..., None])
        img = img * (1 - a[..., None]) + fill * a[..., None]
        if col is ridges[0][1]:
            img = img * (1 - trees[..., None]) + (TREE * (1 - 0.04 * sh[..., None]))[...] * trees[..., None]
    img = img * (1 - hedge[..., None] * 0.9) + foot[None, None] * (hedge[..., None] * 0.9)
    # fade to navy at the very bottom so the panel edge sits on the page
    fb = smooth(0.93, 1.0, v)[..., None]
    img = img * (1 - fb * 0.6) + NAVY[None, None] * (fb * 0.6)
    return np.clip(img * 255 + 0.5, 0, 255).astype(np.uint8)

if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == 'still':
        Image.fromarray(frame(float(sys.argv[2]))).save(sys.argv[3], quality=78)
    else:
        out = sys.stdout.buffer
        for i in range(N):
            out.write(frame(i / FPS).tobytes())
