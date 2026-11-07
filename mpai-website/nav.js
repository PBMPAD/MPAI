document.documentElement.classList.add('js');
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
