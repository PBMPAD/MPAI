/* MPAI home: "Your business". Two columns: on your desk, off your desk. No AI behind it.
   Each business type has a ready-made list of jobs, already judged "Can do" or "Let's talk".
   Jobs the visitor types in are sorted by simple word rules. Anything unclear is "Let's talk".
   High-liability work is never suggested and always stays with the owner (see SOLUTIONS.md).
   The finished ticket is emailed to Matthew through the same form service as the contact page. */
(function(){
var FORM_ACTION = "https://formspree.io/f/xpppejjl";
if(!document.getElementById('mb-left')) return;

var TALK={
 software:"Possible, but it depends on the software you use. Worth a quick chat so I can look.",
 bespoke:"A bigger or more bespoke job. I'd want to talk it through first.",
 judgement:"This needs your professional judgement, so it stays with you. I can help with the admin around it."
};

/* Ready-made jobs per type: [job, why, verdict ("can" or a TALK reason), what changes for them] */
var LIB={
 "Café or restaurant":[
  ["Catering enquiries answered","Office and party orders arrive by email","can","Every catering enquiry gets a first reply drafted straight away, with your menu and two times you're free."],
  ["Weekly specials menu","The board changes, the menu has to follow","can","Your notes become this week's specials, laid out in your own menu template."],
  ["Supplier invoices chased","Credit notes and wrong deliveries get lost","can","Supplier queries and missing credit notes get a polite chaser, and you see what's still open."],
  ["Table and party bookings confirmed","Bookings come in by email and get missed","can","Email bookings get a confirmation straight back and a reminder the day before."],
  ["Your day, briefed","Deliveries, bookings and emails all at once","can","Each morning, one short note: today's bookings, deliveries and the emails that need you."],
  ["Monthly takings summary","Figures sit in the till export","can","Your till export becomes a one-page monthly summary of what sold and what didn't."],
  ["Staff rota each week","Usually lives in a rota app","software"],
  ["Replying to online reviews","Depends on the review sites you use","software"]],
 "Hair or beauty salon":[
  ["Booking enquiries answered","Messages come in while you're with a client","can","New booking enquiries by email get a friendly reply drafted, with times you're actually free."],
  ["Appointment confirmations by email","Missed appointments cost you","can","Email bookings get a confirmation, and a reminder goes the day before."],
  ["Price list and treatment menu","Prices change, the leaflet doesn't","can","Your notes become an up-to-date price list or treatment menu in your own style."],
  ["Supplier orders and invoices","Product orders and bills pile up","can","Supplier invoices are sorted and chased, and you see what's still to pay."],
  ["Your day, briefed","Who's in today and what needs you","can","Each morning, one short note: today's clients, what needs a reply and what's coming up."],
  ["Your business, on file","New staff keep asking the same things","can","Your services, prices and how you like things written, kept in one place so nothing needs explaining twice."],
  ["Bookings in your booking app","Depends on the booking software","software"],
  ["Social media posts","Depends on the accounts and apps you use","software"]],
 "Builder or tradesperson":[
  ["Quotes from site-visit notes","Evenings lost writing quotes","can","Your site notes and photos become a quote in your template, using your own prices, ready to check."],
  ["Invoices sent and chased","Late payers on finished jobs","can","Invoices go out, polite reminders follow when they're overdue, and a thank-you when you're paid."],
  ["New enquiries answered fast","Leads go cold while you're on site","can","New enquiries get a first reply drafted straight away, offering two times you can visit."],
  ["Clients kept updated","Customers keep asking where you're up to","can","Once a week, each live job's client gets an update drafted from your notes."],
  ["Site visits and calls written up","What was agreed on site gets forgotten","can","Record the chat on site; the summary and follow-up email are written for you to send."],
  ["Job sheets as tidy PDFs","Rough lists and photos at the end of a job","can","Your rough list and photos become a tidy, branded job sheet or snagging list as a PDF."],
  ["Receipts and mileage","Receipts in the van, mileage in your head","can","Your diary and receipts folder become your mileage and expenses in the format you use."],
  ["Ordering materials from merchants","Depends on each merchant's system","software"]],
 "Accountant or bookkeeper":[
  ["Chasing clients for their paperwork","Year-end held up waiting on documents","can","Clients who haven't sent their records get a polite reminder, with a firmer one if they still haven't."],
  ["Your inbox, handled","Client emails mixed with HMRC and software alerts","can","Your email is sorted into what needs a reply, what's for information and what to ignore, with replies drafted."],
  ["Engagement letters from your template","Same letter, new details, every time","can","Each new client's engagement letter is drafted from your template with their details, ready to check."],
  ["Client meetings written up","Notes and actions after every meeting","can","The summary, follow-up email and actions from each client meeting are written for you."],
  ["Your fees chased","Your own invoices go unpaid","can","Your invoices get polite reminders when overdue, and a thank-you when they're paid."],
  ["Deadline reminders to clients","Clients forget what's due","can","Clients get a friendly email reminder of what you need from them and by when."],
  ["Attachments filed by client","Bank statements and receipts arrive by email","can","Email attachments are saved into each client's folder with a sensible name."],
  ["Working inside your accounts software","Depends on the software you use","software"]],
 "Estate or letting agent":[
  ["Viewing requests answered","Applicants want a time today","can","Viewing requests get a reply drafted straight away, offering times that are actually free."],
  ["Viewings confirmed by email","No-shows waste an afternoon","can","Each viewing gets an email confirmation and a reminder the day before."],
  ["Vendors and landlords kept updated","Clients want feedback every week","can","Each week, every vendor or landlord gets an update drafted from your notes and viewing feedback."],
  ["Viewing feedback written up","Notes in your head after each viewing","can","Record your thoughts after a viewing; the feedback email is written for you to check."],
  ["Particulars from your notes","Writing up every new listing","can","Your notes and room measurements become draft particulars in your template, ready for you to check."],
  ["Your day, briefed","Viewings, valuations and calls back","can","Each morning, one short note: today's viewings, valuations and who's waiting on you."],
  ["Portal listings and CRM updates","Depends on your property software","software"],
  ["Tenancy deposits and rent collection","Involves money and your client account","bespoke"]],
 "Dentist or clinic":[
  ["Patient emails answered","Questions about prices, parking, opening times","can","Everyday patient emails get a reply drafted in your practice's style, ready to check."],
  ["New patient enquiries","Enquiries arrive while you're with patients","can","New patient enquiries get a first reply drafted straight away, with how to book."],
  ["Supplier invoices chased","Lab and supply invoices pile up","can","Supplier invoices and queries are sorted and chased, and you see what's still open."],
  ["Practice meetings written up","Team meetings and actions get lost","can","The summary and actions from each practice meeting are written up and shared."],
  ["Price list and patient leaflets","Fees and leaflets go out of date","can","Your notes become an up-to-date price list or leaflet in your practice style."],
  ["Your day, briefed","Emails, staff and suppliers before the first patient","can","Each morning, one short note on what needs you, what can wait and what's coming up."],
  ["Appointment reminders","Usually run from the practice software","software"],
  ["Online reviews","Depends on the review sites you use","software"]],
 "Shop or retailer":[
  ["Customer emails answered","Stock questions and returns by email","can","Customer emails get a reply drafted in your style, ready for you to check and send."],
  ["Supplier invoices and orders","Bills and order confirmations pile up","can","Supplier invoices are sorted and chased, and you see what's due and what's still open."],
  ["Price lists and window cards","Prices change every season","can","Your notes become price lists, offers and window cards in your own style."],
  ["Monthly sales summary","Figures sit in the till export","can","Your till export becomes a one-page monthly summary of what's selling."],
  ["Your day, briefed","Deliveries, staff and emails","can","Each morning, one short note: deliveries due, emails that need you and what's coming up."],
  ["Special orders confirmed","Customers waiting on orders","can","Customers who've placed special orders get an email confirmation and an update when it arrives."],
  ["Stock levels and reordering","Depends on your till or stock system","software"],
  ["Online shop updates","Depends on your website platform","software"]],
 "Consultant or adviser":[
  ["Proposals from your notes","Every proposal starts from scratch","can","Your notes from the first call become a proposal in your template, ready to check."],
  ["Client meetings written up","Actions slip between meetings","can","The summary, follow-up email and actions from each client meeting are written for you."],
  ["Invoices sent and chased","Chasing your own fees is awkward","can","Invoices go out, polite reminders follow when overdue, and a thank-you when you're paid."],
  ["Clients kept updated","Clients want to know where things are","can","On a set day, each client gets a progress update drafted from your notes."],
  ["Your inbox, handled","Client email and noise mixed together","can","Your email is sorted into what needs a reply, what's for information and what to ignore."],
  ["Your day, briefed","Back-to-back meetings","can","Each morning, one short note: today's meetings, what to prepare and who's waiting on you."],
  ["Your business, on file","Explaining your services the same way each time","can","Your services, clients and how you write, kept in one place so nothing needs explaining twice."],
  ["Reports full of analysis and advice","Needs your professional judgement","judgement"]],
 "Other":[
  ["Your day, briefed","Knowing what needs you first thing","can","Every morning, one short note from your inbox and diary: what needs you, what can wait and what's coming up."],
  ["Your business, on file","Explaining the same things again and again","can","Your team, clients and suppliers, and how you like things written, kept in one place so nothing needs explaining twice."],
  ["Paperwork ready to go","Quotes and letters written from scratch","can","Your letters, quotes and terms in one place, so the right version is drafted for each job."],
  ["Invoices sent and chased","Late payers and awkward reminders","can","Invoices go out, polite reminders follow when overdue, and a thank-you when you're paid."],
  ["Meetings and calls turned into actions","What was agreed gets forgotten","can","Record a meeting or call; the summary, follow-up email and actions are written for you."],
  ["New enquiries answered fast","Leads go cold while you're busy","can","New enquiries get a first reply drafted straight away, with the right next step."],
  ["Your inbox, handled","Too much email","can","Your email is sorted into what needs a reply, what's for information and what to ignore."],
  ["Clients kept updated","Customers asking where things are","can","On a set day, each client gets an update drafted from your notes."]]
};
var TYPES=Object.keys(LIB);

/* Jobs typed in by the visitor: high-liability first, then software-dependent, then the jobs Matthew builds. */
var RISKY=/cctv|sewer|drain(age)? (survey )?report|survey (report|finding|footage)|underground|utilit(y|ies) (locat|survey|report|plan|drawing)|service locat|cable locat|structural|asbestos|site investigation|risk assessment|gas safe|electrical (cert|test|report)|eicr|fire (safety|risk|cert)|health (and|&) safety|allergen|food (safety|hygiene)|haccp|clinical|diagnos|treatment plan|patient (notes|records)|medical|x-?ray|legal|contract|compliance|tax|self.?assessment|vat|payroll|accounts|financial advice|mortgage|insurance claim/i;
var SOFT=/rota|shift|social media|instagram|facebook|tiktok|linkedin|post(s|ing)? (on|to)|online review|google review|reviews|website|seo|\bapp\b|crm|stock|inventory|epos|\btill\b|uber|deliveroo|just eat|text message|\bsms\b|\btexts?\b|whatsapp|answer(ing)? (the )?(phone|calls)|booking (system|software|app)|xero|quickbooks|\bsage\b|portal|rightmove|zoopla/i;
var MONEY=/take (card )?payments?|card payments?|bank|transfer|refund|rent collection|deposit/i;
var CAN=[
 [/invoice|chase|chasing|overdue|late pay|reminder to pay|debtor|paid/i,"Invoices go out, polite reminders follow when they're overdue, and a thank-you when you're paid."],
 [/quote|estimate|proposal|letter|menu|price list|leaflet|terms|template|particulars|write.?up|paperwork|document/i,"Your notes become a ready-to-check document in your own template, using your own prices and wording."],
 [/meeting|minutes|call notes|site visit|follow.?up|actions/i,"Record it; the summary, follow-up email and list of actions are written for you."],
 [/enquir|lead|new customer|contact form|quote request|respond to customers|reply to customers/i,"New enquiries get a first reply drafted straight away, with the right next step."],
 [/update|progress|keep (my |our )?(clients|customers)/i,"On a set day, each client gets an update drafted from your notes, ready to check."],
 [/booking|appointment|confirm|reminder/i,"Bookings agreed by email get a confirmation back and a reminder the day before."],
 [/email|inbox|replies|reply/i,"Your email is sorted into what needs a reply, what's for information and what to ignore, with replies drafted."],
 [/brief|my day|diary|calendar|schedule|to.?do|what needs/i,"Each morning, one short note on what needs you, what can wait and what's coming up."],
 [/checklist|snag|job sheet|pdf|photo schedule/i,"Your rough list becomes a tidy, branded PDF."],
 [/fil(e|ing)\b|attachment|folder|organis|organiz/i,"Email attachments are saved into the right folder with a sensible name."],
 [/expense|mileage|timesheet|receipt/i,"Your diary and receipts become your mileage, expenses or timesheet in the format you use."],
 [/figures|numbers|monthly report|summary of|spreadsheet|kpi/i,"Your spreadsheet becomes a short monthly summary with a few lines on what it means."]
];
function sortOwn(text){
 var t=clip(text,60);
 if(RISKY.test(text)) return {job:t,id:"talk",reason:"judgement"};
 if(MONEY.test(text)) return {job:t,id:"talk",reason:"bespoke"};
 if(SOFT.test(text)) return {job:t,id:"talk",reason:"software"};
 for(var i=0;i<CAN.length;i++) if(CAN[i][0].test(text)) return {job:t,id:"can",fit:CAN[i][1]};
 return {job:t,id:"talk",reason:"bespoke"};
}

var biz={pick:"",other:""}, desk=[], off=[], ownCount=0;
/* On phones the two columns stack, so jobs are ticked in place instead of moving across */
var order=[], narrow=window.matchMedia("(max-width:900px)");
function $(id){return document.getElementById(id);}
function esc(s){return String(s==null?"":s).replace(/[<>&"]/g,function(c){return {"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"}[c];});}
function clip(s,n){return String(s==null?"":s).trim().slice(0,n);}
function lineFor(r){return r.id==="talk"?(TALK[r.reason]||TALK.bespoke):r.fit;}
function msg(text,kind){var m=$("mb-msg"); if(m){m.textContent=text; m.className="mb-msg"+(kind?" "+kind:"");}}
var NAMES={"Café or restaurant":"For a café or restaurant","Hair or beauty salon":"For a salon","Builder or tradesperson":"For a builder or tradesperson","Accountant or bookkeeper":"For an accountant or bookkeeper","Estate or letting agent":"For an estate or letting agent","Dentist or clinic":"For a practice or clinic","Shop or retailer":"For a shop","Consultant or adviser":"For a consultant or adviser"};
function fromLib(key){return LIB[key].map(function(r,i){return r[2]==="can"?{key:key+i,job:r[0],why:r[1],id:"can",fit:r[3]}:{key:key+i,job:r[0],why:r[1],id:"talk",reason:r[2]};});}

/* Business type bar */
var bar=$("mb-bar");
bar.hidden=false;
$("mb-types").innerHTML=TYPES.map(function(t){return '<label class="mb-type"><input type="radio" name="mb-btype" value="'+t+'"><span>'+t+'</span></label>';}).join("");
$("mb-types").addEventListener("change",function(e){
 var isO=e.target.value==="Other"; $("mb-other").hidden=!isO; if(isO) $("mb-other").focus();
 biz.pick=e.target.value; load();
});
$("mb-other").addEventListener("input",function(){biz.other=clip(this.value,80); $("mb-lefttag").textContent=biz.other?"For "+biz.other:"Jobs most businesses carry";});
$("mb-addown").hidden=false;

function load(){
 desk=fromLib(biz.pick||"Other"); off=[]; ownCount=0; order=desk.slice();
 $("mb-lefttag").textContent=biz.pick&&biz.pick!=="Other"?NAMES[biz.pick]:(biz.other?"For "+biz.other:"Jobs most businesses carry");
 draw();
}
function draw(fresh){
 var full=off.length>=5;
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
 var left=5-off.length;
 $("mb-count").textContent=off.length+" of 5";
 var e=$("mb-empty");
 e.hidden=off.length>=5;
 e.textContent=off.length===0?(narrow.matches?"Tick five jobs, and see which ones I can take.":"Move five jobs across, and see which ones I can take."):(left===1?"One more to go":["","","Two","Three","Four"][left]+" more to go");
 var ob=$("mb-open"); ob.hidden=off.length===0;
 var tb=$("mb-tickbar"); if(tb){ tb.hidden=!narrow.matches||off.length===0; $("mb-tickcount").textContent=off.length+" of 5 ticked"; $("mb-tickopen").textContent=off.length>=5?"Send me my five":"Send me "+(off.length===1?"this one":"these "+["","","two","three","four"][off.length]); }
 ob.textContent=off.length>=5?"Send me my five":"Send me "+(off.length===1?"this one":"these "+["","","two","three","four"][off.length]);
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
  else{ if(off.length>=5) return; desk.splice(desk.indexOf(j),1); off.push(j); }
  draw(j.key);
  var again=$("mb-left").querySelector('.mb-tick[data-key="'+j.key+'"]'); if(again) again.focus();
  if(at<0&&off.length===5) openSend();
  return;
 }
 var b=e.target.closest(".mb-move"); if(!b||off.length>=5) return;
 var j=desk.splice(+b.dataset.i,1)[0]; off.push(j); draw(j.key);
 if(off.length===5){openSend(); return;}
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
 if(off.length<5){off.push(s); draw(s.key); if(off.length===5){openSend(); return;}} else {desk.unshift(s); draw();}
}
$("mb-addbtn").addEventListener("click",addOwn);
if($("mb-tickopen")) $("mb-tickopen").addEventListener("click",function(){openSend();});
if(narrow.addEventListener) narrow.addEventListener("change",function(){draw();});
$("mb-own").addEventListener("keydown",function(e){if(e.key==="Enter"){e.preventDefault(); addOwn();}});

/* The pop-up: the list, then the details */
var dlg=$("mb-dialog"), sent=false;
function openSend(){
 $("mb-dtitle").textContent=off.length>=5?"Send me my five":"Send me your list";
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
 fd.append("website",clip($("mb-site").value,200)); fd.append("jobs",list); fd.append("source",/contact/.test(location.pathname)?"Contact page":"Home page");
 fetch(FORM_ACTION,{method:"POST",body:fd,headers:{"Accept":"application/json"}}).then(function(r){
  if(!r.ok) throw 0; sent=true; msg("Sent. I'll email you your five and how we'd start.","ok"); b.textContent="Sent";
 }).catch(function(){b.disabled=false; b.textContent="Email me my five"; msg("That didn't send. Please email matthew@mpai.site instead.","err");});
});

load();
})();
