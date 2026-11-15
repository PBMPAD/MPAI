/* MPAI contact page: "Your business". Two columns: on your desk, off your desk. No AI behind it.
   The job lists and the rules for typed-in jobs live in solutions.js, shared with the home page.
   The finished ticket is emailed to Matthew through the same form service as the rest of the site. */
(function(){
if(!document.getElementById('mb-left')) return;
function start(){
var M=window.MPAI, FORM_ACTION=M.FORM_ACTION, TALK=M.TALK, LIB=M.LIB, NAMES=M.NAMES, sortOwn=M.sortOwn, lineFor=M.lineFor, fromLib=M.fromLib, clip=M.clip;
var TYPES=Object.keys(LIB);
/* Five jobs come with the set-up; a sixth and seventh can be added (the rules and wording are in solutions.js) */
var BASE=M.BASE_JOBS||5, MAX=M.MAX_JOBS||5, WORD=M.COUNT_WORD||[], extraLine=M.extraLine||function(){return ""}, extraNote=M.extraNote||function(){return "None"};
function sendWord(){var n=off.length; return n>=BASE&&WORD[n]?"Send me my "+WORD[n]:"Send me "+(n===1?"this one":"these "+WORD[n]);}

var biz={pick:"",other:""}, desk=[], off=[], ownCount=0;
/* On phones the two columns stack, so jobs are ticked in place instead of moving across */
var order=[], narrow=window.matchMedia("(max-width:900px)");
function $(id){return document.getElementById(id);}
function esc(s){return String(s==null?"":s).replace(/[<>&"]/g,function(c){return {"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"}[c];});}
function msg(text,kind){var m=$("mb-msg"); if(m){m.textContent=text; m.className="mb-msg"+(kind?" "+kind:"");}}

/* Business type bar */
var bar=$("mb-bar");
bar.hidden=false;
$("mb-types").innerHTML=TYPES.map(function(t){return '<label class="mb-type"><input type="radio" name="mb-btype" value="'+t+'"><span>'+t+'</span></label>';}).join("");
$("mb-types").addEventListener("change",function(e){
 var isO=e.target.value==="Other"; $("mb-other").hidden=!isO; if(isO) $("mb-other").focus();
 biz.pick=e.target.value; load(); soft.fill(biz.pick);
});
$("mb-other").addEventListener("input",function(){biz.other=clip(this.value,80); $("mb-lefttag").textContent=biz.other?"For "+biz.other:"Jobs most businesses carry";});
$("mb-addown").hidden=false;
/* What software do you use? The choices follow the business type */
/* A visitor with an older copy of solutions.js saved simply doesn't see the question */
var soft=M.softPicker?M.softPicker($("mb-soft"),"mb-soft",{field:"mb-field",opt:"mb-opt"}):{fill:function(){},value:function(){return "Not given"}};

function load(){
 desk=fromLib(biz.pick||"Other"); off=[]; ownCount=0; order=desk.slice();
 $("mb-lefttag").textContent=biz.pick&&biz.pick!=="Other"?NAMES[biz.pick]:(biz.other?"For "+biz.other:"Jobs most businesses carry");
 draw();
}
function draw(fresh){
 var full=off.length>=MAX;
 if(narrow.matches){
  $("mb-left").innerHTML=order.map(function(j){
   var on=off.indexOf(j)>-1, talk=j.id==="talk";
   return '<li class="mb-slip mb-tickrow'+(on?" on":"")+(on&&fresh===j.key?" new":"")+'"><button type="button" class="mb-tick" data-key="'+esc(j.key)+'" aria-pressed="'+on+'"'+(!on&&full?" disabled":"")+'><span class="mb-box" aria-hidden="true"></span><span class="mb-ticktext"><b>'+esc(j.job)+'</b><small>'+esc(on?lineFor(j):j.why)+'</small></span></button>'+(on?'<span class="mb-verdict'+(talk?" talk":"")+'">'+(talk?"Let&rsquo;s talk":"Can do")+'</span>':'')+'</li>';
  }).join("");
 } else
 $("mb-left").innerHTML=desk.length?desk.map(function(j,i){
  return '<li class="mb-slip"><span><b>'+esc(j.job)+'</b><small>'+esc(j.why)+'</small></span><button type="button" class="mb-move" data-i="'+i+'"'+(full?" disabled":"")+' aria-label="Move '+esc(j.job)+' off your desk">Move across &rarr;</button></li>';
 }).join(""):'<li class="mb-empty">Everything&rsquo;s off your desk.</li>';
 $("mb-right").innerHTML=off.map(function(j,i){
  var talk=j.id==="talk";
  return '<li class="mb-slip'+(fresh===j.key?" new":"")+'"><span><b>'+esc(j.job)+'</b></span><span class="mb-slipend"><span class="mb-verdict'+(talk?" talk":"")+'">'+(talk?"Let&rsquo;s talk":"Can do")+'</span><button type="button" class="mb-back" data-i="'+i+'" aria-label="Put '+esc(j.job)+' back on your desk">Undo</button></span><p>'+esc(lineFor(j))+'</p></li>';
 }).join("");
 var left=BASE-off.length;
 $("mb-count").textContent=left<0?BASE+" + "+(-left)+" extra":off.length+" of "+BASE;
 var e=$("mb-empty");
 e.hidden=false;
 e.textContent=left<=0?extraLine(off.length):off.length===0?(narrow.matches?"Tick five jobs, and see which ones I can take.":"Move five jobs across, and see which ones I can take."):(left===1?"One more to go":["","","Two","Three","Four"][left]+" more to go");
 var ob=$("mb-open"); ob.hidden=off.length===0;
 var te=$("mb-tickextra"); if(te){ var tx=extraLine(off.length); te.textContent=tx; te.hidden=!narrow.matches||!tx; }
 var tb=$("mb-tickbar"); if(tb){ tb.hidden=!narrow.matches||off.length===0; $("mb-tickcount").textContent=(left<0?BASE+" + "+(-left)+" extra":off.length+" of "+BASE)+" ticked"; $("mb-tickopen").textContent=sendWord(); }
 ob.textContent=sendWord();
 $("mb-addbtn").disabled=ownCount>=2;
 $("mb-own").disabled=ownCount>=2;
 $("mb-own").placeholder=ownCount>=2?"That's two of your own":"e.g. writing our weekly newsletter";
}
$("mb-left").addEventListener("click",function(e){
 var t=e.target.closest(".mb-tick");
 if(t){
  var j=order.filter(function(x){return x.key===t.dataset.key;})[0]; if(!j) return;
  var at=off.indexOf(j);
  if(at>-1){off.splice(at,1); desk.push(j);}
  else{ if(off.length>=MAX) return; desk.splice(desk.indexOf(j),1); off.push(j); }
  draw(j.key);
  var again=$("mb-left").querySelector('.mb-tick[data-key="'+j.key+'"]'); if(again) again.focus();
  if(at<0&&off.length===BASE) openSend();
  return;
 }
 var b=e.target.closest(".mb-move"); if(!b||off.length>=MAX) return;
 var j=desk.splice(+b.dataset.i,1)[0]; off.push(j); draw(j.key);
 if(off.length===BASE){openSend(); return;}
 var nb=$("mb-left").querySelector(".mb-move"); if(nb&&!nb.disabled) nb.focus(); else $("mb-right").querySelector("li:last-child .mb-back").focus();
});
$("mb-right").addEventListener("click",function(e){
 var b=e.target.closest(".mb-back"); if(!b) return;
 var j=off.splice(+b.dataset.i,1)[0]; desk.unshift(j); draw();
});
function addOwn(){
 var t=clip($("mb-own").value,80); if(!t||ownCount>=2) return;
 var s=sortOwn(t); s.key="own"+Date.now(); s.why="Your own job";
 ownCount++; $("mb-own").value=""; order.push(s);
 if(off.length<MAX){off.push(s); draw(s.key); if(off.length===BASE){openSend(); return;}} else {desk.unshift(s); draw();}
}
$("mb-addbtn").addEventListener("click",addOwn);
if($("mb-tickopen")) $("mb-tickopen").addEventListener("click",function(){openSend();});
if(narrow.addEventListener) narrow.addEventListener("change",function(){draw();});
$("mb-own").addEventListener("keydown",function(e){if(e.key==="Enter"){e.preventDefault(); addOwn();}});

/* The pop-up: the list, then the details */
var dlg=$("mb-dialog"), sent=false;
function openSend(){
 $("mb-dtitle").textContent=off.length>=BASE&&WORD[off.length]?"Send me my "+WORD[off.length]:"Send me your list";
 var ex=$("mb-extra"); if(ex){ex.textContent=off.length>BASE?extraLine(off.length):""; ex.hidden=off.length<=BASE;}
 if(!sent) $("mb-send").textContent=off.length>=BASE&&WORD[off.length]?"Email me my "+WORD[off.length]:"Email me my list";
 $("mb-summary").innerHTML=off.map(function(r){var t=r.id==="talk";return '<li><span>'+esc(r.job)+'</span><span class="mb-verdict'+(t?" talk":"")+'">'+(t?"Let&rsquo;s talk":"Can do")+'</span></li>';}).join("");
 if(!sent){msg("");}
 if(dlg.showModal){ if(!dlg.open) dlg.showModal(); } else dlg.setAttribute("open","");
 setTimeout(function(){ (sent?$("mb-close"):$("mb-cname")).focus(); },60);
}
function closeSend(){ if(dlg.close) dlg.close(); else dlg.removeAttribute("open"); var o=$("mb-open"); if(o&&!o.hidden) o.focus(); }
$("mb-open").addEventListener("click",openSend);
$("mb-close").addEventListener("click",closeSend);
dlg.addEventListener("click",function(e){ if(e.target===dlg) closeSend(); });

/* Send the five to Matthew */
$("mb-send").addEventListener("click",function(){
 var n=clip($("mb-cname").value,80), em=clip($("mb-cemail").value,200), b=$("mb-send");
 if(!n){msg("Add your name.","err"); $("mb-cname").focus(); return;}
 if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){msg("That email address doesn't look right. Check it and try again.","err"); $("mb-cemail").focus(); return;}
 var type=biz.pick==="Other"?(biz.other||"Other"):(biz.pick||"Not chosen"), bname=clip($("mb-bname").value,80);
 var list=(bname||type)+" ("+type+"): off the desk\n\n"+off.map(function(r){return (r.id==="talk"?"Let's talk":"Can do")+": "+r.job+"\n"+lineFor(r);}).join("\n\n");
 b.disabled=true; b.textContent="Sending…";
 var fd=new FormData();
 fd.append("_subject","Your business: "+(bname||type)); fd.append("name",n); fd.append("email",em); fd.append("business",bname); fd.append("type",type);
 fd.append("website",clip($("mb-site").value,200)); fd.append("software",soft.value()); fd.append("extra jobs",extraNote(off.length)); fd.append("jobs",list); fd.append("source",/contact/.test(location.pathname)?"Contact page":"Home page");
 fetch(FORM_ACTION,{method:"POST",body:fd,headers:{"Accept":"application/json"}}).then(function(r){
  if(!r.ok) throw 0; sent=true; msg("Sent. I'll email you your list and how we'd start.","ok"); b.textContent="Sent";
 }).catch(function(){b.disabled=false; b.textContent=off.length>=BASE&&WORD[off.length]?"Email me my "+WORD[off.length]:"Email me my list"; msg("That didn't send. Please email matthew@mpai.site instead.","err");});
});

load();
}
/* solutions.js normally loads first. If an older copy of the page is still cached, fetch it here. */
if(window.MPAI) start();
else{var s=document.createElement('script');s.src='solutions.js';s.onload=start;document.head.appendChild(s);}
})();
