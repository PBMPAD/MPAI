/* MPAI home: plays out the five jobs on the desk card, and the jobs list. */
(function(){
  var root=document.documentElement;
  var card=document.getElementById('deskcard');

  /* Desk card. Rest state in the HTML is "all done", so no-JS and reduced-motion visitors see the finished card. */
  if(card&&root.classList.contains('play')){
    var rows=[].slice.call(card.querySelectorAll('.dc-jobs li'));
    var segs=[].slice.call(card.querySelectorAll('.dc-bar i'));
    var num=card.querySelector('[data-count]');
    var timers=[];
    var at=function(ms,fn){timers.push(setTimeout(fn,ms))};
    var reset=function(){
      timers.forEach(clearTimeout);timers=[];
      card.classList.add("instant");
      card.classList.remove('ended');
      rows.forEach(function(r){r.classList.remove('done','doing')});
      segs.forEach(function(s){s.classList.remove('on')});
      num.textContent='0';
      void card.offsetWidth;card.classList.remove("instant");
    };
    var run=function(){
      reset();
      var t=500;
      rows.forEach(function(r,i){
        at(t,function(){r.classList.add('doing')});
        at(t+900,function(){r.classList.remove('doing');r.classList.add('done');segs[i]&&segs[i].classList.add('on');num.textContent=String(i+1)});
        t+=1250;
      });
      at(t,function(){card.classList.add('ended')});
    };
    reset();
    var started=false;
    var go=function(){if(!started){started=true;run()}};
    if('IntersectionObserver' in window){
      var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){go();io.disconnect()}})},{threshold:.25});
      io.observe(card.querySelector(".dc-jobs"));
    }else go();
    /* Never leave the card half played if the tab is hidden mid-run */
    document.addEventListener('visibilitychange',function(){if(document.hidden&&started){timers.forEach(clearTimeout);timers=[];rows.forEach(function(r){r.classList.remove('doing');r.classList.add('done')});segs.forEach(function(s){s.classList.add('on')});num.textContent='5';card.classList.add('ended')}});
  }

  /* Jobs list: at most one open at a time, with its example on the right. Tapping the open job closes it. */
  var list=document.getElementById('joblist');
  if(list){
    var items=[].slice.call(list.children);
    var empty=document.getElementById('jm0');
    var open=function(n){
      items.forEach(function(li,i){
        var on=i===n,b=li.querySelector('button');
        li.classList.toggle('is-open',on);b.setAttribute('aria-expanded',on?'true':'false');
        var m=document.getElementById('jm'+(i+1));if(m)m.hidden=!on;
      });
      if(empty)empty.hidden=n>=0;
      place();
    };
    /* On narrow screens the example sits under the open job, not at the end of the list */
    var scene=document.querySelector('.scene-desk'),grid=list.parentNode,narrow=window.matchMedia('(max-width:980px)');
    var place=function(){
      if(!scene)return;
      var li=list.querySelector('li.is-open');
      if(narrow.matches&&li){if(scene.parentNode!==li)li.appendChild(scene)}
      else if(scene.parentNode!==grid)grid.appendChild(scene);
      /* On a phone, with every job closed there is nothing to show */
      scene.hidden=narrow.matches&&!li;
    };
    if(narrow.addEventListener)narrow.addEventListener('change',place);
    place();
    items.forEach(function(li,i){li.querySelector('button').addEventListener('click',function(){open(li.classList.contains('is-open')?-1:i)})});
  }

})();
