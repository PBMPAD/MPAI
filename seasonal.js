/* Seasonal logo badges for mpai.site.
   Each occasion switches itself on and off by date, every year.
   Preview any badge with ?season=<key> (e.g. ?season=christmas)
   or any date with ?seasondate=YYYY-MM-DD.
   Dates for Diwali, Eid and Lunar New Year move each year:
   add the next year's dates to MOVING below. */
(function(){
  var C={navy:'#0F1B2D',teal:'#19A39A',gold:'#E0A100',red:'#C8102E',green:'#1E7B3A',orange:'#F07C16'};
  var ICONS={
    smallbiz:['Small Business Saturday','<path d="M4 9h12v7H4z" fill="'+C.navy+'"/><path d="M3 5h14l-1.2 4H4.2z" fill="'+C.teal+'"/><path d="M6.5 5l-.6 4M10 5v4M13.5 5l.6 4" stroke="#fff" stroke-width=".9"/><rect x="8.5" y="11.5" width="3" height="4.5" fill="#fff"/>'],
    christmas:['Happy Christmas','<path d="M10 10C8 6 4 6.5 3.5 9.5c1.6-.6 2.2.4 2 1.6 1.4-.8 2.6-.2 4.5-1.1z" fill="'+C.green+'"/><path d="M10 10c2-4 6-3.5 6.5-.5-1.6-.6-2.2.4-2 1.6-1.4-.8-2.6-.2-4.5-1.1z" fill="'+C.green+'"/><circle cx="8.7" cy="12.3" r="1.9" fill="'+C.red+'"/><circle cx="11.5" cy="12.6" r="1.9" fill="'+C.red+'"/><circle cx="10.1" cy="14.6" r="1.9" fill="'+C.red+'"/>'],
    newyear:['Happy New Year','<path d="M10 2.5l1.5 6 6 1.5-6 1.5-1.5 6-1.5-6-6-1.5 6-1.5z" fill="'+C.gold+'"/><circle cx="15.5" cy="4.5" r="1.1" fill="'+C.teal+'"/><circle cx="4.5" cy="15.5" r="1.1" fill="'+C.teal+'"/>'],
    taxreturn:['Self Assessment deadline: 31 January','<rect x="4" y="5" width="12" height="11" rx="1.5" fill="#fff" stroke="'+C.navy+'" stroke-width="1.5"/><rect x="4" y="5" width="12" height="3.2" fill="'+C.navy+'"/><path d="M7 3.5v3M13 3.5v3" stroke="'+C.navy+'" stroke-width="1.5" stroke-linecap="round"/><path d="M7.2 12l2 2 3.8-3.8" fill="none" stroke="'+C.teal+'" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>'],
    valentine:["Happy Valentine's Day",'<path d="M10 16.5S3.5 12.6 3.5 8.4A3.3 3.3 0 0 1 10 7a3.3 3.3 0 0 1 6.5 1.4c0 4.2-6.5 8.1-6.5 8.1z" fill="#D7263D"/>'],
    stdavid:["Happy St David's Day",'<g fill="#F6C800"><circle cx="10" cy="5.2" r="2.6"/><circle cx="14.2" cy="7.6" r="2.6"/><circle cx="14.2" cy="12.4" r="2.6"/><circle cx="10" cy="14.8" r="2.6"/><circle cx="5.8" cy="12.4" r="2.6"/><circle cx="5.8" cy="7.6" r="2.6"/></g><circle cx="10" cy="10" r="2.7" fill="'+C.orange+'"/>'],
    stpatrick:["Happy St Patrick's Day",'<path d="M10 11q.5 4 3 6" stroke="#169B62" stroke-width="1.5" fill="none" stroke-linecap="round"/><g fill="#169B62"><circle cx="10" cy="6.3" r="3"/><circle cx="6.6" cy="10.3" r="3"/><circle cx="13.4" cy="10.3" r="3"/></g>'],
    easter:['Happy Easter','<ellipse cx="10" cy="10.6" rx="5" ry="6.4" fill="#F7C6DA"/><path d="M5.2 9.6q1.6-1.6 3.2 0t3.2 0 3.2 0" stroke="'+C.teal+'" stroke-width="1.4" fill="none"/><circle cx="8" cy="13.4" r=".9" fill="'+C.gold+'"/><circle cx="12" cy="13.4" r=".9" fill="'+C.gold+'"/><circle cx="10" cy="6.6" r=".9" fill="'+C.gold+'"/>'],
    stgeorge:["Happy St George's Day",'<path d="M10 12.5v5" stroke="'+C.green+'" stroke-width="1.5"/><path d="M10 15.2c-1.8-1.3-3.6-1-4.3.1 1.6 1 3.2.8 4.3-.1z" fill="'+C.green+'"/><circle cx="10" cy="8.2" r="4.6" fill="'+C.red+'"/><path d="M8.1 8.3a1.9 1.9 0 1 1 2.9 1.6M7 6.6a3 3 0 0 1 5.3.6" stroke="#8B0A1F" stroke-width="1" fill="none" stroke-linecap="round"/>'],
    summer:['Enjoy the summer','<rect x="2.3" y="8" width="6.8" height="5" rx="2.2" fill="'+C.navy+'"/><rect x="10.9" y="8" width="6.8" height="5" rx="2.2" fill="'+C.navy+'"/><path d="M9.1 9.4h1.8" stroke="'+C.navy+'" stroke-width="1.4"/><path d="M3.6 9.6l2.2-1M12.2 9.6l2.2-1" stroke="#fff" stroke-width=".9" stroke-linecap="round"/>'],
    halloween:['Happy Halloween','<ellipse cx="10" cy="11.6" rx="6.6" ry="5.1" fill="'+C.orange+'"/><path d="M10 6.6v10M6.6 7.4q-1.6 4.2 0 8.4M13.4 7.4q1.6 4.2 0 8.4" stroke="#B85200" stroke-width=".9" fill="none"/><path d="M10 6.8q0-2.6 2.2-3.3" stroke="'+C.green+'" stroke-width="1.6" fill="none" stroke-linecap="round"/>'],
    bonfire:['Bonfire Night','<g stroke-width="1.6" stroke-linecap="round"><path d="M10 2.5v3M10 14.5v3M2.5 10h3M14.5 10h3" stroke="'+C.gold+'"/><path d="M4.7 4.7l2.1 2.1M13.2 13.2l2.1 2.1M15.3 4.7l-2.1 2.1M4.7 15.3l2.1-2.1" stroke="'+C.teal+'"/></g><circle cx="10" cy="10" r="1.7" fill="'+C.red+'"/>'],
    lunarnewyear:['Happy Lunar New Year','<path d="M10 1.8v2.2M10 15.8v2.6" stroke="'+C.gold+'" stroke-width="1.2"/><rect x="7.4" y="3.8" width="5.2" height="1.7" rx=".4" fill="'+C.gold+'"/><ellipse cx="10" cy="10" rx="5.7" ry="4.7" fill="#D7263D"/><path d="M10 5.4v9.2M7.4 5.8q-1.6 4.2 0 8.4M12.6 5.8q1.6 4.2 0 8.4" stroke="#A3101F" stroke-width=".8" fill="none"/><rect x="7.4" y="14.3" width="5.2" height="1.7" rx=".4" fill="'+C.gold+'"/>'],
    eid:['Eid Mubarak','<path d="M12.6 3.6A6.6 6.6 0 1 0 12.6 16.4 5.3 5.3 0 1 1 12.6 3.6z" fill="'+C.gold+'"/><path d="M14.6 7.2l.6 1.5 1.6.1-1.2 1 .4 1.6-1.4-.9-1.4.9.4-1.6-1.2-1 1.6-.1z" fill="'+C.gold+'"/>'],
    diwali:['Happy Diwali','<path d="M3.8 11.6h12.4q-1.2 4.6-6.2 4.6t-6.2-4.6z" fill="#B85200"/><path d="M10 3.4q2.8 3.1 1.4 5.9Q10 11 8.6 9.3 7.2 6.5 10 3.4z" fill="#F6C800"/><path d="M10 6.2q1.1 1.6.5 2.8-.5.7-1 0-.6-1.2.5-2.8z" fill="'+C.orange+'"/>']
  };
  /* Festivals whose dates move. Start and end are inclusive, YYYY-MM-DD. */
  var MOVING=[
    ['diwali','2026-11-08','2026-11-09'],['diwali','2027-10-29','2027-10-30'],['diwali','2028-10-17','2028-10-18'],
    ['lunarnewyear','2027-02-06','2027-02-08'],['lunarnewyear','2028-01-26','2028-01-28'],
    ['eid','2027-03-09','2027-03-11'],['eid','2027-05-16','2027-05-18'],['eid','2028-02-27','2028-02-29']
  ];
  function ymd(d){return d.getFullYear()*10000+(d.getMonth()+1)*100+d.getDate()}
  function key(y,m,d){return y*10000+m*100+d}
  function iso(s){return +s.replace(/-/g,'')}
  function addDays(y,m,d,n){var t=new Date(y,m-1,d+n);return ymd(t)}
  function easter(y){var a=y%19,b=Math.floor(y/100),c=y%100,d=Math.floor(b/4),e=b%4,f=Math.floor((b+8)/25),g=Math.floor((b-f+1)/3),h=(19*a+b-d-g+15)%30,i=Math.floor(c/4),k=c%4,l=(32+2*e+2*i-h-k)%7,m=Math.floor((a+11*h+22*l)/451),mo=Math.floor((h+l-7*m+114)/31),da=((h+l-7*m+114)%31)+1;return [mo,da]}
  function firstSat(y,m){var d=new Date(y,m-1,1);return 1+((6-d.getDay()+7)%7)}
  function secondSun(y,m){var d=new Date(y,m-1,1);return 1+((7-d.getDay())%7)+7}

  /* Remembrance: a line of words, no poppy (the poppy is the Royal British Legion's mark).
     Runs from 6 November to Armistice Day or Remembrance Sunday, whichever is later. */
  function remembrance(t,y){var end=Math.max(key(y,11,11),key(y,11,secondSun(y,11)));return t>=key(y,11,6)&&t<=end}

  function pick(t){
    var y=Math.floor(t/10000),i,r;
    for(i=0;i<MOVING.length;i++){r=MOVING[i];if(t>=iso(r[1])&&t<=iso(r[2]))return r[0]}
    if(remembrance(t,y))return null;
    var sbs=firstSat(y,12);if(t>=addDays(y,12,sbs,-5)&&t<=key(y,12,sbs))return 'smallbiz';
    var e=easter(y);if(t>=addDays(y,e[0],e[1],-2)&&t<=addDays(y,e[0],e[1],1))return 'easter';
    var md=t%10000;
    if(md>=1228||md<=103)return 'newyear';
    if(md>=1201&&md<=1227)return 'christmas';
    if(md>=124&&md<=131)return 'taxreturn';
    if(md>=212&&md<=214)return 'valentine';
    if(md===301)return 'stdavid';
    if(md===317)return 'stpatrick';
    if(md===423)return 'stgeorge';
    if(md>=720&&md<=831)return 'summer';
    if(md>=1024&&md<=1031)return 'halloween';
    if(md>=1101&&md<=1105)return 'bonfire';
    return null;
  }



  /* Extra pieces used only in scenes */
  var PIECES={
    snowflake:'<g stroke="#6FAEDC" stroke-width="1.5" stroke-linecap="round" fill="none"><path d="M10 2v16M3.1 6l13.8 8M3.1 14l13.8-8"/><path d="M8 3.6l2 2 2-2M8 16.4l2-2 2 2"/></g>',
    bauble:'<circle cx="10" cy="11.6" r="5.6" fill="'+C.red+'"/><rect x="8.5" y="4" width="3" height="2.6" rx=".5" fill="'+C.gold+'"/><path d="M4.8 11.4q5.2 2.6 10.4 0" stroke="'+C.gold+'" stroke-width="1" fill="none"/><circle cx="8" cy="9.6" r="1.2" fill="#fff" opacity=".65"/>',
    bauble2:'<circle cx="10" cy="11.6" r="5.6" fill="'+C.teal+'"/><rect x="8.5" y="4" width="3" height="2.6" rx=".5" fill="'+C.gold+'"/><path d="M4.8 11.4q5.2 2.6 10.4 0" stroke="#fff" stroke-width="1" fill="none"/><circle cx="8" cy="9.6" r="1.2" fill="#fff" opacity=".65"/>',
    star:'<path d="M10 2.4l2.3 4.7 5.1.7-3.7 3.6.9 5.1-4.6-2.4-4.6 2.4.9-5.1-3.7-3.6 5.1-.7z" fill="'+C.gold+'"/>',
    confetti:'<rect x="3" y="4" width="3" height="6.5" rx="1" fill="'+C.teal+'" transform="rotate(-25 4.5 7)"/><rect x="11.5" y="2.5" width="3" height="6.5" rx="1" fill="'+C.gold+'" transform="rotate(30 13 6)"/><rect x="7.5" y="11" width="3" height="6.5" rx="1" fill="#D7263D" transform="rotate(15 9 14)"/>',
    firework2:'<g stroke-width="1.6" stroke-linecap="round"><path d="M10 2.5v3M10 14.5v3M2.5 10h3M14.5 10h3" stroke="#E8618C"/><path d="M4.7 4.7l2.1 2.1M13.2 13.2l2.1 2.1M15.3 4.7l-2.1 2.1M4.7 15.3l2.1-2.1" stroke="#6FAEDC"/></g><circle cx="10" cy="10" r="1.7" fill="'+C.gold+'"/>',
    bat:'<path d="M10 7.6c-.9 0-1.4-1.6-1.4-1.6l-.5 1.9C6 6 2.8 6.6 1.8 9c1.6-.4 2.7.3 3 1.6 1-.9 2.4-.7 3.1.3.5-.7 1.2-1.1 2.1-1.1s1.6.4 2.1 1.1c.7-1 2.1-1.2 3.1-.3.3-1.3 1.4-2 3-1.6-1-2.4-4.2-3-6.3-1.1l-.5-1.9s-.5 1.6-1.4 1.6z" fill="#2B2B3A"/>',
    moon:'<path d="M12.6 3.6A6.6 6.6 0 1 0 12.6 16.4 5.3 5.3 0 1 1 12.6 3.6z" fill="#F3E3A0"/>',
    chick:'<circle cx="10" cy="11.2" r="5.6" fill="#F6C800"/><circle cx="12.2" cy="9.6" r=".9" fill="'+C.navy+'"/><path d="M15 10.6l2.3.8-2.3.8z" fill="'+C.orange+'"/><path d="M6.5 11.5q1.5 1.5 3 0" stroke="#D9A800" stroke-width="1" fill="none"/>',
    tulip:'<path d="M10 11v6.5" stroke="'+C.green+'" stroke-width="1.5"/><path d="M6 4.8l2 2 2-3 2 3 2-2v3.6a4 4 0 0 1-8 0z" fill="#E8618C"/>',
    sparkle:'<path d="M10 2.5l1.5 6 6 1.5-6 1.5-1.5 6-1.5-6-6-1.5 6-1.5z" fill="'+C.gold+'"/>',
    bag:'<path d="M5 7.5h10l-1 10H6z" fill="'+C.teal+'"/><path d="M7.5 7.5V6a2.5 2.5 0 0 1 5 0v1.5" stroke="'+C.navy+'" stroke-width="1.4" fill="none"/>',
    heart2:'<path d="M10 16.5S3.5 12.6 3.5 8.4A3.3 3.3 0 0 1 10 7a3.3 3.3 0 0 1 6.5 1.4c0 4.2-6.5 8.1-6.5 8.1z" fill="#F28AB2"/>',
    tick:'<circle cx="10" cy="10" r="7" fill="'+C.teal+'"/><path d="M6.8 10.2l2.2 2.2 4.2-4.4" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
    doc:'<path d="M5 2.5h7l3 3v12H5z" fill="#fff" stroke="'+C.navy+'" stroke-width="1.3" stroke-linejoin="round"/><path d="M7 9h6M7 12h6M7 15h4" stroke="'+C.teal+'" stroke-width="1.2"/>',
    coin:'<circle cx="10" cy="10" r="6.5" fill="'+C.gold+'"/><circle cx="10" cy="10" r="4.5" fill="none" stroke="#B88400" stroke-width="1"/>',
    flag:'<rect x="3" y="5" width="14" height="10" fill="#fff" stroke="#C9D3DE" stroke-width=".8"/><path d="M10 5v10M3 10h14" stroke="'+C.red+'" stroke-width="2.4"/>',
    sun:'<circle cx="10" cy="10" r="4" fill="#F6C800"/><g stroke="#F6C800" stroke-width="1.6" stroke-linecap="round"><path d="M10 2v2.5M10 15.5V18M2 10h2.5M15.5 10H18M4.3 4.3l1.8 1.8M13.9 13.9l1.8 1.8M15.7 4.3l-1.8 1.8M4.3 15.7l1.8-1.8"/></g>',
    icecream:'<path d="M7 9.5l3 8.5 3-8.5z" fill="'+C.gold+'"/><circle cx="10" cy="7.6" r="3.7" fill="#F7C6DA"/><circle cx="8.6" cy="6.3" r="1" fill="#fff" opacity=".7"/>'
  };
  /* Which pieces make up each occasion's scene (first is the main icon) */
  var SCENES={
    christmas:['christmas','bauble','snowflake','star','bauble2','snowflake'],
    newyear:['newyear','confetti','firework2','star','confetti'],
    halloween:['halloween','bat','moon','bat'],
    bonfire:['bonfire','firework2','sparkle','bonfire','star'],
    easter:['easter','chick','tulip','easter','tulip'],
    diwali:['diwali','sparkle','star','diwali','sparkle'],
    smallbiz:['smallbiz','bag','sparkle','heart2','star'],
    taxreturn:['taxreturn','tick','doc','sparkle','tick'],
    lunarnewyear:['lunarnewyear','firework2','coin','lunarnewyear','sparkle'],
    valentine:['valentine','heart2','sparkle','valentine','heart2'],
    stdavid:['stdavid','stdavid','sparkle','stdavid','star'],
    stpatrick:['stpatrick','stpatrick','coin','stpatrick','sparkle'],
    stgeorge:['stgeorge','flag','stgeorge','sparkle','stgeorge'],
    summer:['sun','summer','icecream','sparkle','sun'],
    eid:['eid','star','sparkle','star','sparkle']
  };
  function art(name){return ICONS[name]?ICONS[name][1]:PIECES[name]}

  /* How the icons appear: 'badge' (one icon by the wordmark), 'wreath' (a ring
     around the logo), 'orbit' (the ring slowly turning), 'garland' (an arc over
     the top) or 'burst' (a cluster at the top right). */
  var STYLE='burst';
  function fx(brand,k,style){
    var st=document.createElement('style');
    st.textContent='.season-fx{position:absolute;inset:0;pointer-events:none}.season-fx svg{position:absolute;filter:drop-shadow(0 1px 1.5px rgba(15,27,45,.3))}';
    document.head.appendChild(st);
    var box=document.createElement('span');box.className='season-fx';box.title=ICONS[k][0];box.setAttribute('aria-hidden','true');
    brand.appendChild(box);
    var w=brand.offsetWidth,h=brand.offsetHeight,cx=w/2,cy=h/2,rx=w/2+17,ry=h/2+12,items=[],i,n;
    var scene=SCENES[k]||[k];function add(size,rot){var e=document.createElementNS('http://www.w3.org/2000/svg','svg');e.setAttribute('viewBox','0 0 20 20');e.style.width=e.style.height=size+'px';e.innerHTML=art(scene[items.length%scene.length]);e.style.transform='rotate('+(rot||0)+'deg)';box.appendChild(e);items.push({e:e,s:size});return e}
    /* points along a rounded frame around the logo, t from 0 to 1 */
    var m=13,X0=-m,Y0=-m,X1=w+m,Y1=h+m,PW=X1-X0,PH=Y1-Y0,P=2*(PW+PH);
    function at(t){var d=((t%1)+1)%1*P;if(d<PW)return[X0+d,Y0];d-=PW;if(d<PH)return[X1,Y0+d];d-=PH;if(d<PW)return[X1-d,Y1];d-=PW;return[X0,Y1-d]}
    function put(it,x,y){it.e.style.left=(x-it.s/2)+'px';it.e.style.top=(y-it.s/2)+'px'}
    if(style==='wreath'||style==='orbit'){
      n=12;for(i=0;i<n;i++)add(i%2?17:22,(i*37)%40-20);
      var phase=0,draw=function(){for(var j=0;j<n;j++){var q=at(phase+j/n);put(items[j],q[0],q[1])}};draw();
      if(style==='orbit'&&!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)){
        var last=0,tick=function(ts){if(last)phase+=(ts-last)/40000;last=ts;draw();requestAnimationFrame(tick)};requestAnimationFrame(tick);
      }
    }else if(style==='garland'){
      n=8;for(i=0;i<n;i++){add(i%2?18:24,(i*29)%30-15);put(items[i],X0+PW*i/(n-1),Y0+(i%2?2:-3))}
    }else if(style==='burst'){
      [[28,w-24,-21],[17,w+1,-14],[15,w-44,-17],[12,w+3,5],[11,w-58,-11]].forEach(function(c,j){add(c[0],j*15-10);var it=items[j];it.e.style.left=c[1]+'px';it.e.style.top=c[2]+'px'});
    }
  }
  function run(){
    var q=location.search,m,t=ymd(new Date()),force=null;
    if((m=q.match(/[?&]seasondate=(\d{4})-(\d{2})-(\d{2})/)))t=key(+m[1],+m[2],+m[3]);
    if((m=q.match(/[?&]season=([a-z]+)/)))force=m[1];
    var y=Math.floor(t/10000),brand=document.querySelector('header.site .brand');
    if(!brand)return;
    var css='.brand{position:relative}.season-badge{position:absolute;right:-22px;top:-10px;width:24px;height:24px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--paper,#F4F7FA),0 2px 5px rgba(15,27,45,.28);display:grid;place-items:center;pointer-events:auto}.season-badge svg{width:18px;height:18px}'+
      '.season-line{margin:0;padding:7px 16px;text-align:center;font-family:var(--label,system-ui);font-size:.86rem;letter-spacing:.06em;color:var(--soft,#4F5D6E)}';
    var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
    if(force==='remembrance'||(!force&&remembrance(t,y))){
      var p=document.createElement('p');p.className='season-line';p.textContent='We will remember them';
      var h=document.querySelector('header.site');h.parentNode.insertBefore(p,h);
    }
    var k=force&&ICONS[force]?force:(force?null:pick(t));
    if(!k)return;
    var sm=q.match(/[?&]seasonstyle=([a-z]+)/),style=sm?sm[1]:STYLE;
    if(style!=='badge'){fx(brand,k,style);return}
    var b=document.createElement('span');b.className='season-badge';b.title=ICONS[k][0];
    b.innerHTML='<svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">'+ICONS[k][1]+'</svg>';
    brand.appendChild(b);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();
