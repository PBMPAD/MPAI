document.documentElement.classList.add('js');
(function(){
  var s=document.currentScript;
  var base=s?(s.getAttribute('src')||'').replace(/nav\.js.*$/,''):'';
  document.addEventListener('DOMContentLoaded',function(){
    var ul=document.querySelector('#site-nav ul');
    if(ul&&!ul.querySelector('a[href$="blog/"]')){
      var li=document.createElement('li'),a=document.createElement('a');
      a.href=base+'blog/';a.textContent='Blog';
      li.appendChild(a);
      var links=ul.querySelectorAll('li'),last=links[links.length-1];
      if(last&&/contact/.test(last.innerHTML))ul.insertBefore(li,last);else ul.appendChild(li);
    }
    var cta=document.querySelector('.hero .btn[href$="contact.html"]');
    if(cta&&document.querySelector('.hero .desk')&&!document.querySelector('.home-badge')){
      var c=document.createElement('a');
      c.className='home-badge';c.href=base+'badges/';
      c.style.cssText='display:inline-flex;align-items:center;gap:10px;margin:8px 0 0 14px;vertical-align:middle;border:2px solid var(--teal);border-radius:14px;padding:6px 14px 6px 6px;background:var(--surface);text-decoration:none;color:var(--ink);font-weight:700;font-size:.95rem;line-height:1.25';
      c.innerHTML='<img src="'+base+'images/ai-fluency-small-businesses.webp" alt="AI Fluency for Small Businesses course completion badge" width="480" height="328" style="width:72px;height:auto;border-radius:8px"><span>Claude Academy trained<br><span style="color:var(--teal-ink)">Verify &rarr;</span></span>';
      cta.parentNode.appendChild(c);
    }
    var fw=document.querySelector('footer.site .wrap');
    if(fw&&!fw.querySelector('.foot-badge')){
      var p=document.createElement('p');p.className='foot-badge';
      p.innerHTML='<a href="'+base+'badges/">Claude Academy trained</a>';
      var ps=fw.querySelectorAll('p');
      if(ps.length>1)fw.insertBefore(p,ps[ps.length-1]);else fw.appendChild(p);
    }
  });
})();
document.addEventListener('DOMContentLoaded',function(){
  var b=document.querySelector('.burger'),n=document.getElementById('site-nav');
  if(b&&n){
    var set=function(o){b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Menu');document.documentElement.classList.toggle('nav-open',o)};
    b.addEventListener('click',function(){set(b.getAttribute('aria-expanded')!=='true')});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
    n.addEventListener('click',function(e){if(e.target.tagName==='A')set(false)});
  }
  var mq=window.matchMedia('(min-width:821px)');
  var jobs=function(){document.querySelectorAll('details.job-d').forEach(function(d){d.open=mq.matches})};
  jobs();
  if(mq.addEventListener)mq.addEventListener('change',jobs);
});
