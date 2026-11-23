/* MPAI: the ready-made job lists, and the rules for jobs a visitor types in. No AI behind it.
   Shared by the home page (home-ticket.js) and the contact page (mybusiness.js), so there is one list to keep.
   Each business type has a list of jobs, already judged "Can do" or "Let's talk".
   Jobs the visitor types in are sorted by simple word rules. Anything unclear is "Let's talk".
   High-liability work is never suggested and always stays with the owner (see SOLUTIONS.md). */
window.MPAI=(function(){
var FORM_ACTION = "https://formspree.io/f/xpppejjl";

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

/* The software each kind of business most often runs on, and how I'd work with it (see CRM.md for the research).
   connect: there is a ready-made link to it. setup: it can be linked, with extra work. beside: no way in for outsiders,
   so I work from the emails and reports it sends. private: it holds patient records, so I stay outside it. check: not confirmed yet.
   Visitors only ever see the plain lines in SOFT_LINE: never a price, and nothing about how the link is made. */
var SOFT_ASK={
 "Café or restaurant":"Your till or booking system",
 "Hair or beauty salon":"Your booking system",
 "Builder or tradesperson":"Your job or quoting software",
 "Estate or letting agent":"Your property software",
 "Dentist or clinic":"Your practice software",
 "Shop or retailer":"Your till or online shop",
 "Other":"Software you use for customers"
};
var SYSTEMS={
 "Café or restaurant":[["Square","connect"],["SumUp","setup"],["Zettle","setup"],["Epos Now","setup"],["Lightspeed","setup"],["ResDiary","beside"],["OpenTable","beside"],["SevenRooms","beside"]],
 "Hair or beauty salon":[["Fresha","beside"],["Phorest","check"],["Booksy","beside"],["Treatwell","beside"],["Timely","setup"],["Square Appointments","connect"]],
 "Builder or tradesperson":[["Tradify","beside"],["ServiceM8","setup"],["Jobber","connect"],["Commusoft","check"],["Powered Now","check"],["Fergus","setup"],["Simpro","check"]],
 "Estate or letting agent":[["Alto","beside"],["Reapit","setup"],["Street","setup"],["Jupix","beside"],["Dezrez","check"],["Expert Agent","check"],["Loop","check"]],
 "Dentist or clinic":[["Dentally","private"],["EXACT (Software of Excellence)","private"],["R4 or Sensei","private"],["Cliniko","private"],["Pabau","private"],["Semble","private"]],
 "Shop or retailer":[["Shopify","connect"],["Square","connect"],["Lightspeed","setup"],["Epos Now","setup"],["Zettle","setup"],["SumUp","setup"],["WooCommerce","check"],["Wix","connect"]],
 "Other":[["HubSpot","connect"],["Pipedrive","connect"],["Zoho","connect"],["Salesforce","connect"],["Capsule","setup"],["Airtable","connect"]]
};
var SOFT_LINE={
 connect:"I can usually link straight to this one, so your jobs work from what's already in it. I'll confirm when I reply.",
 setup:"This one can often be linked up, with some extra set-up. I'll check and tell you when I reply.",
 beside:"I work alongside this one, using the emails and reports it already sends you. Nothing changes in the software itself.",
 "private":"Patient records stay inside your practice software. I work on the admin around it.",
 check:"I'll check this one and tell you what's possible when I reply.",
 other:"Tell me which, and I'll check it before I reply.",
 none:"That's fine. Everything runs from your email, diary and files."
};
/* What Matthew sees in the email, next to the name of the software */
var SOFT_NOTE={connect:"ready-made link",setup:"extra set-up",beside:"works alongside",check:"to check","private":"patient records, stays outside"};
/* The heading over each trade's own systems in the drop-down. To-do and project tools are offered to everyone. */
var SOFT_GROUP={
 "Café or restaurant":"Tills and booking systems",
 "Hair or beauty salon":"Booking systems",
 "Builder or tradesperson":"Job and quoting software",
 "Estate or letting agent":"Property software",
 "Dentist or clinic":"Practice software",
 "Shop or retailer":"Tills and online shops",
 "Other":"Customer systems"
};
var PROJECT_TOOLS=[["Asana","connect"],["monday.com","connect"],["Trello","connect"],["ClickUp","connect"],["Notion","connect"],["Microsoft Planner","check"]];

/* The "what software do you use?" question, shared by both pages. It builds itself inside the box it is given.
   It is optional and nothing is chosen to begin with. Once one system is named, a second can be added,
   because many businesses run a customer system and a to-do or project tool side by side.
   box: the empty element to build in. id: a name to start the field ids with. cls: the page's own class names for a field and for "(optional)". */
function softPicker(box,id,cls){
 cls=cls||{};
 var key="Other";
 function el(tag,c,text){var n=document.createElement(tag);if(c)n.className=c;if(text!=null)n.textContent=text;return n;}
 function opt(to,value,text){var o=el("option","",text);o.value=value;to.appendChild(o);}
 function make(n,askText){
  var p={list:[]}, lab=el("label");
  p.wrap=el("div","sw-pick"+(cls.field?" "+cls.field:"")); p.ask=el("span","",askText); p.sel=el("select"); p.other=el("input","sw-other"); p.line=el("p","sw-line");
  p.sel.id=id+n; lab.htmlFor=p.sel.id;
  lab.appendChild(p.ask); lab.appendChild(document.createTextNode(" ")); lab.appendChild(el("span",cls.opt||"","(optional)"));
  p.other.type="text"; p.other.autocomplete="off"; p.other.placeholder="e.g. the name of your booking system"; p.other.setAttribute("aria-label","Which software do you use?");
  p.line.setAttribute("aria-live","polite"); p.other.hidden=true; p.line.hidden=true;
  p.wrap.appendChild(lab); p.wrap.appendChild(p.sel);
  p.sel.addEventListener("change",function(){show(p); if(p.sel.value==="other") p.other.focus(); sync();});
  return p;
 }
 function show(p){
  var v=p.sel.value, t=v===""?"":v==="other"?SOFT_LINE.other:v==="none"?SOFT_LINE.none:SOFT_LINE[p.list[+v][1]];
  p.other.hidden=p.wrap.hidden||v!=="other"; p.line.textContent=t; p.line.hidden=p.wrap.hidden||!t;
 }
 function options(p,first){
  var own=SYSTEMS[key], g1=el("optgroup"), g2=el("optgroup");
  p.list=own.concat(PROJECT_TOOLS); p.sel.textContent=""; p.other.value="";
  opt(p.sel,"","Choose one, or leave this blank");
  g1.label=SOFT_GROUP[key]; g2.label="To-do and project tools";
  p.list.forEach(function(s,i){opt(i<own.length?g1:g2,String(i),s[0]);});
  p.sel.appendChild(g1); p.sel.appendChild(g2);
  opt(p.sel,"other","Something else"); if(first) opt(p.sel,"none","Nothing, just email and spreadsheets");
 }
 /* The "add another" link only shows once a first system has been named */
 function sync(){var v=a.sel.value; more.hidden=!b.wrap.hidden||v===""||v==="none";}
 function one(p){
  var v=p.sel.value;
  if(p.wrap.hidden||v==="") return "";
  if(v==="none") return "Nothing: email and spreadsheets";
  if(v==="other") return "Something else: "+(clip(p.other.value,80)||"not named");
  return p.list[+v][0]+" ("+SOFT_NOTE[p.list[+v][1]]+")";
 }
 var a=make(1,""), b=make(2,"Anything else you use"), more=el("button","sw-more","Use something else as well?");
 more.type="button";
 more.addEventListener("click",function(){b.wrap.hidden=false; show(b); sync(); b.sel.focus();});
 [a.wrap,a.other,a.line,more,b.wrap,b.other,b.line].forEach(function(n){box.appendChild(n);});
 function fill(type){
  key=SYSTEMS[type]?type:"Other"; a.ask.textContent=SOFT_ASK[key];
  options(a,true); options(b,false); b.wrap.hidden=true; show(a); show(b); sync();
 }
 fill("Other");
 return {fill:fill,value:function(){var out=[one(a),one(b)].filter(function(x){return x;}); return out.length?out.join("; "):"Not given";}};
}

/* Five jobs come with the set-up, and five is the most a list can hold (Matthew's decision, 23/11/26:
   no sixth or seventh job for now). Jobs a visitor types in are quoted separately.
   A visitor can instead try any one job for four weeks for PILOT_PRICE. Change the figures here and both pages follow. */
var BASE_JOBS=5, MAX_JOBS=5, PILOT_PRICE=250;
var COUNT_WORD=["","one","two","three","four","five"];
var SEPARATE="Jobs of your own are quoted once I\u2019ve seen them.";
var EXTRA_PROMPT="That\u2019s your five. Take one off to swap another in.";
/* The line shown beside the list once five are chosen. list: the chosen jobs. */
function extraLine(list){
 var own=list.filter(function(j){return j.own||j.id==="talk";}).length;
 if(list.length<BASE_JOBS) return "";
 return EXTRA_PROMPT+(own?" "+SEPARATE:"");
}
/* The same thing for the email to Matthew */
function extraNote(list){
 var other=list.filter(function(j){return j.own||j.id==="talk";}).length;
 return other?other+" to price separately (Let's talk or their own)":"None";
}

function clip(s,n){return String(s==null?"":s).trim().slice(0,n);}
function lineFor(r){return r.id==="talk"?(TALK[r.reason]||TALK.bespoke):r.fit;}
var NAMES={"Café or restaurant":"For a café or restaurant","Hair or beauty salon":"For a salon","Builder or tradesperson":"For a builder or tradesperson","Estate or letting agent":"For an estate or letting agent","Dentist or clinic":"For a practice or clinic","Shop or retailer":"For a shop"};
function fromLib(key){return LIB[key].map(function(r,i){return r[2]==="can"?{key:key+i,job:r[0],why:r[1],id:"can",fit:r[3]}:{key:key+i,job:r[0],why:r[1],id:"talk",reason:r[2]};});}
return {FORM_ACTION:FORM_ACTION,TALK:TALK,LIB:LIB,NAMES:NAMES,sortOwn:sortOwn,lineFor:lineFor,fromLib:fromLib,clip:clip,SYSTEMS:SYSTEMS,softPicker:softPicker,BASE_JOBS:BASE_JOBS,MAX_JOBS:MAX_JOBS,PILOT_PRICE:PILOT_PRICE,COUNT_WORD:COUNT_WORD,EXTRA_PROMPT:EXTRA_PROMPT,extraLine:extraLine,extraNote:extraNote};
})();
