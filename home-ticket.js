/* MPAI home: the list of five. No AI behind it.
   Picking a business type fills the list with the first five jobs I can do for that kind of business,
   so it can be sent as it stands. Visitors can take jobs off, swap others in and add up to two of their own.
   The job lists and the rules for typed-in jobs come from solutions.js. The list is emailed to Matthew
   through the same form service as the rest of the site. */
(function(){
var M=window.MPAI, form=document.getElementById("hb-form");
if(!M||!form) return;
var MAX=5, OWN_MAX=2;
/* Home shows every business type in solutions.js. "Other" is shown as "Something else". */
var SHOW=Object.keys(M.LIB);
var $=function(id){return document.getElementById(id)};
var el=function(tag,cls,text){var n=document.createElement(tag);if(cls)n.className=cls;if(text!=null)n.textContent=text;return n};
var type="Other", picked=false, other="", jobs=[], chosen=[], own=[], sent=false;
var HINT="I’ll email you this list and how we’d start. No obligation.";

function label(t){return t==="Other"?"Something else":t}
function tag(){
  if(!picked) return "Most small businesses";
  if(type==="Other") return other?"For "+other:"Something else";
  return M.NAMES[type]||type;
}
/* Start from a list that is already full */
function fill(){jobs=M.fromLib(type);chosen=jobs.filter(function(j){return j.id==="can"}).slice(0,MAX)}
function stamp(j){var t=j.id==="talk";return el("span","hb-stamp "+(t?"talk":"can"),t?"Let’s talk":"Can do")}
function say(text,kind){var m=$("hb-msg");m.textContent=text;m.className="hb-msg hb-wide"+(kind?" "+kind:"")}

function render(animate){
  var list=$("hb-chosen");list.textContent="";
  chosen.forEach(function(j,i){
    var li=el("li",(j.id==="talk"?"hb-talk":"")+(animate?" hb-in":""));
    if(animate)li.style.animationDelay=(i*70)+"ms";
    var t=el("span","hb-tick");t.setAttribute("aria-hidden","true");li.appendChild(t);
    var mid=el("div");mid.appendChild(el("span","hb-name",j.job));mid.appendChild(el("span","hb-why",j.why));
    mid.appendChild(el("p","hb-what",M.lineFor(j)));li.appendChild(mid);
    var side=el("div","hb-side");side.appendChild(stamp(j));
    var rm=el("button","hb-link","Take off");rm.type="button";rm.setAttribute("aria-label","Take "+j.job+" off the list");
    rm.addEventListener("click",function(){chosen.splice(chosen.indexOf(j),1);render(false);var a=$("hb-more-list").querySelector("button");if(a)a.focus()});
    side.appendChild(rm);li.appendChild(side);list.appendChild(li);
  });
  if(!chosen.length)list.appendChild(el("li","hb-none","Nothing on the list yet. Add a job from the box alongside."));

  var more=$("hb-more-list");more.textContent="";var full=chosen.length>=MAX;
  jobs.filter(function(j){return chosen.indexOf(j)<0}).forEach(function(j){
    var li=el("li"),mid=el("div");
    mid.appendChild(el("span","hb-name",j.job));mid.appendChild(el("span","hb-why",j.why));
    if(j.id==="talk")mid.appendChild(stamp(j));
    li.appendChild(mid);
    var b=el("button","hb-add","Add");b.type="button";b.disabled=full;b.setAttribute("aria-label","Add "+j.job+" to the list");
    b.addEventListener("click",function(){if(chosen.length<MAX){chosen.push(j);render(false)}});
    li.appendChild(b);more.appendChild(li);
  });
  $("hb-more-hint").textContent=full?"Take one off, then add one of these.":"Add one of these, or a job of your own.";
  $("hb-num").textContent=String(chosen.length);
  $("hb-tag").textContent=tag();

  var ol=$("hb-own-list");ol.textContent="";
  own.forEach(function(j,i){
    var li=el("li"),top=el("div","hb-own-top");
    top.appendChild(el("span","hb-name",j.job));top.appendChild(stamp(j));li.appendChild(top);
    li.appendChild(el("p","",M.lineFor(j)));
    var rm=el("button","hb-link","Remove");rm.type="button";rm.setAttribute("aria-label","Remove "+j.job);
    rm.addEventListener("click",function(){own.splice(i,1);render(false);$("hb-own").focus()});
    li.appendChild(rm);ol.appendChild(li);
  });
  var fullOwn=own.length>=OWN_MAX;
  $("hb-own-add").disabled=fullOwn;$("hb-own").disabled=fullOwn;
  $("hb-own").placeholder=fullOwn?"That’s two of your own":"e.g. writing our weekly newsletter";
  if(!sent){var b=$("hb-submit");b.textContent=chosen.length>=MAX?"Email me my five":"Email me my list"}
}

/* What do you run? */
var box=$("hb-types");
SHOW.forEach(function(t,i){
  var lab=el("label","hb-chip"),inp=el("input"),sp=el("span","",label(t));
  inp.type="radio";inp.name="hb-type";inp.value=t;inp.id="hb-type-"+i;
  inp.addEventListener("change",function(){
    type=t;picked=true;fill();render(true);
    var o=$("hb-other");o.hidden=t!=="Other";if(t==="Other")o.focus();
    if(!sent)say(HINT);
  });
  lab.appendChild(inp);lab.appendChild(sp);box.appendChild(lab);
});
$("hb-other").addEventListener("input",function(){other=M.clip(this.value,80);$("hb-tag").textContent=tag()});
$("hb-ask-set").hidden=false;

function addOwn(){
  var t=M.clip($("hb-own").value,80);if(!t||own.length>=OWN_MAX)return;
  own.push(M.sortOwn(t));$("hb-own").value="";render(false);
}
$("hb-own-add").addEventListener("click",addOwn);
$("hb-own").addEventListener("keydown",function(e){if(e.key==="Enter"){e.preventDefault();addOwn()}});

/* Send the list to Matthew */
form.addEventListener("submit",function(e){
  e.preventDefault();
  if(sent)return;
  var n=M.clip($("hb-cname").value,80),em=M.clip($("hb-cemail").value,200),b=$("hb-submit");
  if(!chosen.length&&!own.length){say("Add at least one job to the list first.","err");return}
  if(!n){say("Add your name.","err");$("hb-cname").focus();return}
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){say("That email address doesn’t look right. Check it and try again.","err");$("hb-cemail").focus();return}
  var kind=type==="Other"?(other||(picked?"Other":"Not chosen")):type, bname=M.clip($("hb-bname").value,80);
  var line=function(r){return (r.id==="talk"?"Let's talk":"Can do")+": "+r.job+"\n"+M.lineFor(r)};
  var list=(bname||kind)+" ("+kind+"): off the desk\n\n"+chosen.map(line).join("\n\n");
  if(own.length)list+="\n\nJobs of their own\n\n"+own.map(line).join("\n\n");
  /* A filled-in hidden box means a robot, so nothing is sent */
  if($("hb-hp").value){sent=true;b.disabled=true;b.textContent="Sent";say("Sent. I’ll email you your list and how we’d start.");return}
  b.disabled=true;b.textContent="Sending…";
  var fd=new FormData();
  fd.append("_subject","Your business: "+(bname||kind));fd.append("name",n);fd.append("email",em);fd.append("business",bname);fd.append("type",kind);
  fd.append("website",M.clip($("hb-site").value,200));fd.append("jobs",list);fd.append("source","Home page");
  fetch(M.FORM_ACTION,{method:"POST",body:fd,headers:{"Accept":"application/json"}}).then(function(r){
    if(!r.ok)throw 0;sent=true;b.textContent="Sent";say("Sent. I’ll email you your list and how we’d start.");
  }).catch(function(){b.disabled=false;render(false);say("That didn’t send. Please email matthew@mpai.site instead.","err")});
});

fill();render(false);
})();
