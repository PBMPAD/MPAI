/* MPAI "The five jobs" page: the tally beside the Monday timeline, and the sky behind the morning brief. */
(function(){
  var root=document.documentElement,play=root.classList.contains('play');

  /* Tally: each job is ticked off as its part of the day is reached.
     With no JS or reduced motion it rests fully ticked. */
  var rows=[].slice.call(document.querySelectorAll('#jd-tally li')),num=document.getElementById('jd-num');
  var items=[].slice.call(document.querySelectorAll('.jd-line [data-job]'));
  if(play&&'IntersectionObserver' in window&&rows.length&&num){
    var done=0;
    rows.forEach(function(r){r.classList.remove('done')});num.textContent='0';
    var io=new IntersectionObserver(function(es){es.forEach(function(e){
      if(!e.isIntersecting)return;
      var i=+e.target.getAttribute('data-job');
      for(var k=0;k<=i;k++){if(rows[k]&&!rows[k].classList.contains('done')){rows[k].classList.add('done');done++}}
      num.textContent=String(done);io.unobserve(e.target);
    })},{rootMargin:'0px 0px -35% 0px'});
    items.forEach(function(el){io.observe(el)});
  }

  /* Sky video. Loads only after the page has finished, never on phones, reduced motion or data saver,
     and only plays while it is on screen. The poster image covers everything else. */
  var vid=document.querySelector('.jd-scene video'),saver=navigator.connection&&navigator.connection.saveData;
  if(vid&&play&&!saver&&window.matchMedia&&matchMedia('(min-width:700px)').matches){
    var start=function(){
      vid.src=vid.getAttribute('data-src');
      vid.addEventListener('playing',function(){vid.classList.add('is-on')},{once:true});
      var go=function(on){if(on){var p=vid.play();if(p&&p.catch)p.catch(function(){})}else{vid.pause()}};
      if('IntersectionObserver' in window){new IntersectionObserver(function(es){go(es[0].isIntersecting)}).observe(vid)}else{go(true)}
    };
    if(document.readyState==='complete')start();else window.addEventListener('load',start,{once:true});
  }
})();
