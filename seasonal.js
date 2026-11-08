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

  function run(){
    var q=location.search,m,t=ymd(new Date()),force=null;
    if((m=q.match(/[?&]seasondate=(\d{4})-(\d{2})-(\d{2})/)))t=key(+m[1],+m[2],+m[3]);
    if((m=q.match(/[?&]season=([a-z]+)/)))force=m[1];
    var y=Math.floor(t/10000),brand=document.querySelector('header.site .brand');
    if(!brand)return;
    var css='.brand{position:relative}.season-badge{position:absolute;left:21px;top:-9px;width:24px;height:24px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--paper,#F4F7FA),0 2px 5px rgba(15,27,45,.28);display:grid;place-items:center;pointer-events:auto}.season-badge svg{width:18px;height:18px}'+
      '.season-line{margin:0;padding:7px 16px;text-align:center;font-family:var(--label,system-ui);font-size:.86rem;letter-spacing:.06em;color:var(--soft,#4F5D6E)}';
    var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
    if(force==='remembrance'||(!force&&remembrance(t,y))){
      var p=document.createElement('p');p.className='season-line';p.textContent='We will remember them';
      var h=document.querySelector('header.site');h.parentNode.insertBefore(p,h);
    }
    var k=force&&ICONS[force]?force:(force?null:pick(t));
    if(!k)return;
    var b=document.createElement('span');b.className='season-badge';b.title=ICONS[k][0];
    b.innerHTML='<svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">'+ICONS[k][1]+'</svg>';
    brand.appendChild(b);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();
