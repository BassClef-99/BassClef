
 // GERMAN VERB DATABASE

const database = {
  A1: ["sein","haben","werden","gehen","kommen","machen","lernen","wohnen","leben","arbeiten","spielen","essen","trinken","sprechen","heißen","fahren","lesen","schreiben","sehen","hören","kaufen","brauchen","finden","nehmen","geben","schlafen","laufen","fragen","antworten","sagen"],
  A2: ["bleiben","bringen","denken","kennen","wissen","helfen","treffen","vergessen","verlieren","beginnen","bekommen","besuchen","bezahlen","erzählen","erklären","gefallen","gehören","gewinnen","kochen","reisen","schicken","suchen","tragen","verkaufen","verstehen","warten","waschen","ziehen","öffnen","schließen"],
  B1: ["anrufen","aufstehen","anfangen","ankommen","aussehen","einladen","empfehlen","entscheiden","entstehen","erreichen","erkennen","erlauben","erwarten","fliegen","fühlen","gewinnen","genießen","geschehen","gelingen","vergleichen","verhalten","verlassen","versuchen","vorbereiten","vorschlagen","teilnehmen","unternehmen","unterschreiben","überlegen","umziehen"],
  B2: ["ablehnen","anerkennen","anbieten","annehmen","beeinflussen","begegnen","beitragen","beschließen","bestehen","betreffen","beweisen","darstellen","durchführen","einsetzen","entwickeln","erfordern","ermöglichen","feststellen","fördern","herstellen","hinweisen","übernehmen","verhindern","vermeiden","voraussetzen","wahrnehmen","zusammenfassen","zunehmen","abnehmen","enthalten"],
  C1: ["abwickeln","anstreben","aufrechterhalten","auslösen","beabsichtigen","beeinträchtigen","bewältigen","einräumen","einschränken","entfallen","entsprechen","hervorheben","nachvollziehen","sicherstellen","überwinden","unterliegen","veranlassen","veranschaulichen","verschaffen","vorausgehen","widersprechen","zurückgreifen","zugrunde liegen","zustimmen","gewährleisten"],
  C2: ["abwegig erscheinen","beherzigen","befürworten","bekräftigen","bemängeln","berücksichtigen","durchdringen","einhergehen","entgegenwirken","entkräften","erschließen","hervorgehen","innewohnen","obliegen","preisgeben","sich erschöpfen","sich zutragen","unterbinden","vergegenwärtigen","verkennen","vermitteln","verschleiern","verzichten","widerlegen","zuwiderlaufen"]
};

// IRREGULAR VERBS

const irregular = {
  sein:{present:["bin","bist","ist","sind","seid","sind"],past:["war","warst","war","waren","wart","waren"],part:"gewesen",aux:"sein"},
  haben:{present:["habe","hast","hat","haben","habt","haben"],past:["hatte","hattest","hatte","hatten","hattet","hatten"],part:"gehabt"},
  werden:{present:["werde","wirst","wird","werden","werdet","werden"],past:["wurde","wurdest","wurde","wurden","wurdet","wurden"],part:"geworden",aux:"sein"},
  gehen:{present:["gehe","gehst","geht","gehen","geht","gehen"],past:["ging","gingst","ging","gingen","gingt","gingen"],part:"gegangen",aux:"sein"},
  kommen:{present:["komme","kommst","kommt","kommen","kommt","kommen"],past:["kam","kamst","kam","kamen","kamt","kamen"],part:"gekommen",aux:"sein"},
  fahren:{present:["fahre","fährst","fährt","fahren","fahrt","fahren"],past:["fuhr","fuhrst","fuhr","fuhren","fuhrt","fuhren"],part:"gefahren",aux:"sein"},
  essen:{present:["esse","isst","isst","essen","esst","essen"],past:["aß","aßest","aß","aßen","aßt","aßen"],part:"gegessen"},
  trinken:{present:["trinke","trinkst","trinkt","trinken","trinkt","trinken"],past:["trank","trankst","trank","tranken","trankt","tranken"],part:"getrunken"},
  sprechen:{present:["spreche","sprichst","spricht","sprechen","sprecht","sprechen"],past:["sprach","sprachst","sprach","sprachen","spracht","sprachen"],part:"gesprochen"},
  lesen:{present:["lese","liest","liest","lesen","lest","lesen"],past:["las","lasest","las","lasen","last","lasen"],part:"gelesen"},
  sehen:{present:["sehe","siehst","sieht","sehen","seht","sehen"],past:["sah","sahst","sah","sahen","saht","sahen"],part:"gesehen"},
  nehmen:{present:["nehme","nimmst","nimmt","nehmen","nehmt","nehmen"],past:["nahm","nahmst","nahm","nahmen","nahmt","nahmen"],part:"genommen"},
  geben:{present:["gebe","gibst","gibt","geben","gebt","geben"],past:["gab","gabst","gab","gaben","gabt","gaben"],part:"gegeben"},
  finden:{past:["fand","fandest","fand","fanden","fandet","fanden"],part:"gefunden"},
  bleiben:{past:["blieb","bliebst","blieb","blieben","bliebt","blieben"],part:"geblieben",aux:"sein"},
  schreiben:{past:["schrieb","schriebst","schrieb","schrieben","schriebt","schrieben"],part:"geschrieben"},
  schlafen:{present:["schlafe","schläfst","schläft","schlafen","schlaft","schlafen"],past:["schlief","schliefst","schlief","schliefen","schlieft","schliefen"],part:"geschlafen"},
  laufen:{present:["laufe","läufst","läuft","laufen","lauft","laufen"],past:["lief","liefst","lief","liefen","lieft","liefen"],part:"gelaufen",aux:"sein"},
  helfen:{present:["helfe","hilfst","hilft","helfen","helft","helfen"],past:["half","halfst","half","halfen","halft","halfen"],part:"geholfen"},
  bringen:{past:["brachte","brachtest","brachte","brachten","brachtet","brachten"],part:"gebracht"},
  denken:{past:["dachte","dachtest","dachte","dachten","dachtet","dachten"],part:"gedacht"},
  wissen:{present:["weiß","weißt","weiß","wissen","wisst","wissen"],past:["wusste","wusstest","wusste","wussten","wusstet","wussten"],part:"gewusst"},
  können:{present:["kann","kannst","kann","können","könnt","können"],past:["konnte","konntest","konnte","konnten","konntet","konnten"],part:"gekonnt"},
  müssen:{present:["muss","musst","muss","müssen","müsst","müssen"],past:["musste","musstest","musste","mussten","musstet","mussten"],part:"gemusst"},
  dürfen:{present:["darf","darfst","darf","dürfen","dürft","dürfen"],past:["durfte","durftest","durfte","durften","durftet","durften"],part:"gedurft"},
  wollen:{present:["will","willst","will","wollen","wollt","wollen"],past:["wollte","wolltest","wollte","wollten","wolltet","wollten"],part:"gewollt"},
  sollen:{present:["soll","sollst","soll","sollen","sollt","sollen"],past:["sollte","solltest","sollte","sollten","solltet","sollten"],part:"gesollt"},
  mögen:{present:["mag","magst","mag","mögen","mögt","mögen"],past:["mochte","mochtest","mochte","mochten","mochtet","mochten"],part:"gemocht"},
  verlieren:{past:["verlor","verlorst","verlor","verloren","verlort","verloren"],part:"verloren"},
  vergessen:{present:["vergesse","vergisst","vergisst","vergessen","vergesst","vergessen"],past:["vergaß","vergaßest","vergaß","vergaßen","vergaßt","vergaßen"],part:"vergessen"},
  treffen:{present:["treffe","triffst","trifft","treffen","trefft","treffen"],past:["traf","trafst","traf","trafen","traft","trafen"],part:"getroffen"},
  beginnen:{past:["begann","begannst","begann","begannen","begannt","begannen"],part:"begonnen"},
  bekommen:{past:["bekam","bekamst","bekam","bekamen","bekamt","bekamen"],part:"bekommen"}
};

const people = ["ich","du","er/sie/es","wir","ihr","sie / Sie"];

const auxiliaries = {
  haben:["habe","hast","hat","haben","habt","haben"],
  sein:["bin","bist","ist","sind","seid","sind"]
};

const tenses = [
  "Präsens","Präteritum","Perfekt","Plusquamperfekt",
  "Futur I","Futur II","Konjunktiv I","Konjunktiv II","Imperativ"
];

let level = "A1";
let selectedVerbs = [];
let selectedTenses = [];
let selectedPeople = [...people];
let customLists = {};
let currentExercises = [];
let practiceVerbs = [];
let currentVerbIndex = 0;
let currentTenseIndex = 0;

let verbListsVisible = {};
let customListsVisible = {};

// DIALOGS

function showDialog(message,type="message",defaultValue="") {
  return new Promise(resolve => {
    const overlay=document.getElementById("siteDialog");
    const title=document.getElementById("siteDialogTitle");
    const text=document.getElementById("siteDialogMessage");
    const input=document.getElementById("siteDialogInput");
    const choiceBox=document.getElementById("siteDialogChoices");
    const buttons=document.getElementById("siteDialogButtons");

    title.textContent=type==="confirm"?"Please confirm":type==="prompt"?"Enter information":"Message";
    text.textContent=message;
    input.value=defaultValue;
    input.classList.toggle("hidden",type!=="prompt");
    choiceBox.classList.add("hidden");
    buttons.innerHTML="";

    const close=value=>{
      overlay.classList.add("hidden");
      resolve(value);
    };

    if(type!=="message"){
      const cancel=document.createElement("button");
      cancel.textContent="Cancel";
      cancel.className="dialog-cancel";
      cancel.onclick=()=>close(type==="prompt"?null:false);
      buttons.appendChild(cancel);
    }

    const ok=document.createElement("button");
    ok.textContent=type==="confirm"?"Yes":"OK";
    ok.className="dialog-ok";
    ok.onclick=()=>close(type==="prompt"?input.value:true);
    buttons.appendChild(ok);

    overlay.classList.remove("hidden");
    if(type==="prompt") input.focus();
    else ok.focus();
  });
}

function showSelectionDialog(message,choices,selected) {
  return new Promise(resolve=>{
    const overlay=document.getElementById("siteDialog");
    const text=document.getElementById("siteDialogMessage");
    const input=document.getElementById("siteDialogInput");
    const choiceBox=document.getElementById("siteDialogChoices");
    const buttons=document.getElementById("siteDialogButtons");

    document.getElementById("siteDialogTitle").textContent="Make your selection";
    text.textContent=message;
    input.classList.add("hidden");
    choiceBox.innerHTML="";
    choiceBox.classList.remove("hidden");
    buttons.innerHTML="";

    const close=value=>{
      overlay.classList.add("hidden");
      choiceBox.classList.add("hidden");
      resolve(value);
    };

    choices.forEach(choice=>{
      const label=document.createElement("label");
      label.className="selection-option";
      const checkbox=document.createElement("input");
      checkbox.type="checkbox";
      checkbox.value=choice;
      checkbox.checked=selected.includes(choice);
      label.append(checkbox,document.createTextNode(choice));
      choiceBox.appendChild(label);
    });

    const cancel=document.createElement("button");
    cancel.textContent="Cancel";
    cancel.className="dialog-cancel";
    cancel.onclick=()=>close(null);

    const save=document.createElement("button");
    save.textContent="Save";
    save.className="dialog-ok";
    save.onclick=()=>{
      close([...choiceBox.querySelectorAll("input:checked")].map(x=>x.value));
    };

    buttons.append(cancel,save);
    overlay.classList.remove("hidden");
  });
}

// PAGE NAVIGATION

let practiceBackDestination=2;
function showPage(number) {
  document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));
  const pageId=number==="custom"?"customPage":"page"+number;
  document.getElementById(pageId).classList.remove("hidden");
  document.getElementById("practiceEditSettings").hidden=(number!==3);
  window.scrollTo(0,0);
}

// LEVEL SELECTION

document.querySelectorAll(".level").forEach(button=>{
  button.onclick=()=>{
    document.querySelectorAll(".level").forEach(b=>b.classList.remove("active"));
    button.classList.add("active");
    level=button.dataset.level;
    selectedVerbs=[];
    renderVerbs();
  };
});

// MAIN VERB LIST

function renderVerbs() {
  const container=document.getElementById("verbList");
  container.innerHTML="";

  if(verbListsVisible[level]===undefined) verbListsVisible[level]=true;

  const controls=document.createElement("div");
  controls.className="list-controls";

  const label=document.createElement("label");
  label.className="verb-item select-all-option";

  const checkbox=document.createElement("input");
  checkbox.type="checkbox";
  checkbox.checked=database[level].every(v=>selectedVerbs.includes(v));
  checkbox.indeterminate=database[level].some(v=>selectedVerbs.includes(v))&&!checkbox.checked;

  label.append(checkbox,document.createTextNode(" Select all"));

  checkbox.onchange=()=>{
    if(checkbox.checked) selectedVerbs=[...new Set([...selectedVerbs,...database[level]])];
    else selectedVerbs=selectedVerbs.filter(v=>!database[level].includes(v));
    renderVerbs();
  };

  controls.appendChild(label);
  container.appendChild(controls);

  const list=document.createElement("div");
  list.className="verb-list";
  if(!verbListsVisible[level]) list.classList.add("collapsed");

  database[level].forEach(verb=>{
    const label=document.createElement("label");
    label.className="verb-item";
    const input=document.createElement("input");
    input.type="checkbox";
    input.checked=selectedVerbs.includes(verb);

    input.onchange=()=>{
      if(input.checked) selectedVerbs.push(verb);
      else selectedVerbs=selectedVerbs.filter(v=>v!==verb);
      renderVerbs();
    };

    label.append(input,document.createTextNode(" "+verb));
    list.appendChild(label);
  });

  container.appendChild(list);

  const toggle=document.createElement("button");
  toggle.className="list-toggle";
  toggle.textContent=verbListsVisible[level]?"▴":"▾";
  toggle.title=verbListsVisible[level]?"Close list":"Open list";
  toggle.onclick=()=>{
    verbListsVisible[level]=!verbListsVisible[level];
    renderVerbs();
  };
  container.insertBefore(toggle,controls);
}

// CUSTOM LIST STORAGE

function saveCustomLists() {
  localStorage.setItem("germanVerbTrainerCustomLists",JSON.stringify(customLists));
}

function loadCustomLists() {
  try {
    customLists=JSON.parse(localStorage.getItem("germanVerbTrainerCustomLists"))||{};
  } catch {
    customLists={};
  }

  Object.keys(customLists).forEach(name=>{
    if(!Array.isArray(customLists[name])) customLists[name]=[];
  });
  // Built-in persistent list. Never remove it, even when empty.
  if(!Array.isArray(customLists.Practice)) customLists.Practice=[];
  customLists.Practice=[...new Set(customLists.Practice.filter(v=>typeof v==='string' && v.trim()))];
  saveCustomLists();
}

document.getElementById("addList").onclick=()=>{
  document.getElementById("customListForm").classList.remove("hidden");
  document.getElementById("customListName").focus();
};

document.getElementById("cancelCreateList").onclick=()=>{
  document.getElementById("customListForm").classList.add("hidden");
  document.getElementById("customListName").value="";
};

document.getElementById("createList").onclick=createCustomList;

document.getElementById("customListName").onkeydown=e=>{
  if(e.key==="Enter") createCustomList();
};

async function createCustomList() {
  const name=document.getElementById("customListName").value.trim();
  if(!name) return showDialog("Enter a list name.");
  if(customLists[name] || name.toLowerCase()==='practice') return showDialog("This list already exists.");

  customLists[name]=[];
  saveCustomLists();

  document.getElementById("customListName").value="";
  document.getElementById("customListForm").classList.add("hidden");
  renderCustomLists();
}

// CUSTOM LIST DISPLAY

function renderCustomLists() {
  const container=document.getElementById("customLists");
  container.innerHTML="";

  // Practice is always first and cannot be deleted.
  Object.keys(customLists).sort((a,b)=>a==='Practice'?-1:b==='Practice'?1:a.localeCompare(b)).forEach(name=>{
    const isPractice=name==='Practice';
    const box=document.createElement("div");
    box.className="custom-box"+(isPractice?" practice-default-box":"");

    const title=document.createElement("h3");
    title.textContent=isPractice?"✦ Practice":name;

    const count=document.createElement("p");
    count.className="custom-count";
    count.textContent=`${customLists[name].length} ${customLists[name].length===1?"verb":"verbs"}`;

    const open=document.createElement("button");
    open.type="button";
    open.textContent=isPractice?"Manage & practise":"Open list";
    open.onclick=()=>openCustomList(name);

    if(isPractice){
      const explanation=document.createElement('p');
      explanation.className='practice-list-description';
      explanation.textContent='Verbs you miss are saved here automatically.';
      box.append(title,explanation,count,open);
    }else{
      const deleteList=document.createElement("button");
      deleteList.className="remove";
      deleteList.textContent="Delete list";
      deleteList.onclick=async()=>{
        if(!await showDialog(`Delete "${name}"?`,"confirm")) return;
        delete customLists[name];
        saveCustomLists();
        renderCustomLists();
      };
      box.append(title,count,open,deleteList);
    }
    container.appendChild(box);
  });
}

let activeCustomList=null;

function openCustomList(name) {
  activeCustomList=name;
  renderCustomListSettings();
  showPage("custom");
}

// CUSTOM LIST SETTINGS WITH SELECT ALL AND COLLAPSE

function renderCustomListSettings() {
  const name=activeCustomList;
  if(!name||!customLists[name]) return;

  document.getElementById("customPageTitle").textContent=`Configure: ${name}`;

  const verbContainer=document.getElementById("customVerbChoices");
  verbContainer.innerHTML="";
  // Practice is a dedicated saved list, managed by its search box and chips.
  // The A1–C2 level picker remains available for user-created lists only.
  const isPracticeList=name==="Practice";
  document.getElementById("customPage").classList.toggle("practice-list-mode",isPracticeList);

  if(!isPracticeList) Object.keys(database).forEach(lvl=>{
    const heading=document.createElement("h3");
    heading.textContent=lvl;
    verbContainer.appendChild(heading);

    const controls=document.createElement("div");
    controls.className="list-controls";

    const selectLabel=document.createElement("label");
    selectLabel.className="verb-item select-all-option";

    const selectAll=document.createElement("input");
    selectAll.type="checkbox";
    selectAll.checked=database[lvl].every(v=>customLists[name].includes(v));
    selectAll.indeterminate=database[lvl].some(v=>customLists[name].includes(v))&&!selectAll.checked;

    selectLabel.append(selectAll,document.createTextNode(" Select all"));

    selectAll.onchange=()=>{
      if(selectAll.checked) {
        customLists[name]=[...new Set([...customLists[name],...database[lvl]])];
      } else {
        customLists[name]=customLists[name].filter(v=>!database[lvl].includes(v));
      }
      saveCustomLists();
      renderCustomListSettings();
    };

    controls.appendChild(selectLabel);
    verbContainer.appendChild(controls);

    const grid=document.createElement("div");
    grid.className="verb-list";

    if(customListsVisible[lvl]===undefined) customListsVisible[lvl]=true;
    if(!customListsVisible[lvl]) grid.classList.add("collapsed");

    database[lvl].forEach(verb=>{
      const label=document.createElement("label");
      label.className="verb-item";

      const checkbox=document.createElement("input");
      checkbox.type="checkbox";
      checkbox.checked=customLists[name].includes(verb);

      checkbox.onchange=()=>{
        if(checkbox.checked) {
          if(!customLists[name].includes(verb)) customLists[name].push(verb);
        } else {
          customLists[name]=customLists[name].filter(v=>v!==verb);
        }
        saveCustomLists();
        renderCustomListSettings();
      };

      label.append(checkbox,document.createTextNode(" "+verb));
      grid.appendChild(label);
    });

    verbContainer.appendChild(grid);

    const toggle=document.createElement("button");
    toggle.className="list-toggle";
    toggle.textContent=customListsVisible[lvl]?"▴":"▾";
    toggle.title=customListsVisible[lvl]?"Close list":"Open list";

    toggle.onclick=()=>{
      customListsVisible[lvl]=!customListsVisible[lvl];
      renderCustomListSettings();
    };

    verbContainer.insertBefore(toggle,controls);
  });

  document.getElementById("customVerbCount").textContent=`${customLists[name].length} ${customLists[name].length===1?"verb":"verbs"} selected`;

  renderCustomChoices("customTenseChoices",tenses,selectedTenses);
  renderCustomChoices("customPronounChoices",people,selectedPeople);
}

// CUSTOM TENSES AND PRONOUNS

function renderCustomChoices(containerId,choices,selected) {
  const container=document.getElementById(containerId);
  container.innerHTML="";

  choices.forEach(choice=>{
    const label=document.createElement("label");
    label.className="tense-item";

    const checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.value=choice;
    checkbox.checked=selected.includes(choice);

    checkbox.onchange=()=>{
      const target=containerId==="customTenseChoices"?selectedTenses:selectedPeople;
      if(checkbox.checked) {
        if(!target.includes(choice)) target.push(choice);
      } else {
        const index=target.indexOf(choice);
        if(index!==-1) target.splice(index,1);
      }
    };

    label.append(checkbox,document.createTextNode(" "+choice));
    container.appendChild(label);
  });
}

document.getElementById("startCustomPractice").onclick=async()=>{
  if(!activeCustomList||!customLists[activeCustomList].length) return showDialog("Choose at least one verb.");
  if(!selectedTenses.length) return showDialog("Choose at least one tense.");
  if(!selectedPeople.length) return showDialog("Choose at least one pronoun.");

  selectedVerbs=[...customLists[activeCustomList]];
  buildExercises();
};

// TENSE SELECTION

function renderTenses() {
  const container=document.getElementById("tenseList");
  container.innerHTML="";

  tenses.forEach(tense=>{
    const label=document.createElement("label");
    label.className="tense-item";

    const checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.value=tense;
    checkbox.checked=selectedTenses.includes(tense);

    checkbox.onchange=()=>{
      if(checkbox.checked) {
        if(!selectedTenses.includes(tense)) selectedTenses.push(tense);
      } else {
        selectedTenses=selectedTenses.filter(t=>t!==tense);
      }
    };

    label.append(checkbox,document.createTextNode(" "+tense));
    container.appendChild(label);
  });
}

document.getElementById("toPage2").onclick=async()=>{
  if(!selectedVerbs.length) return showDialog("Choose at least one verb.");
  renderTenses();
  showPage(2);
};

document.getElementById("toPage3").onclick=async()=>{
  if(!selectedTenses.length) return showDialog("Choose at least one tense.");
  buildExercises();
};

// CONJUGATION ENGINE

function conjugate(verb,tense,person) {
  const selectedPerson=person;
  if(person===6) person=5;

  const irregularVerb=irregular[verb];
  const base=verb.replace(/en$|n$/,"");
  const endings=["e","st","t","en","t","en"];

  let present=irregularVerb?.present||endings.map((e,i)=>{
    let stem=base;
    if(["t","d"].includes(stem.slice(-1))&&[1,2,4].includes(i))
      return stem+(i===1?"est":"et");
    if(stem.endsWith("s")||stem.endsWith("ß")||stem.endsWith("z"))
      return stem+(i===1?"t":e);
    return stem+e;
  });

  let past=irregularVerb?.past||endings.map((e,i)=>{
    const stem=base+"te";
    return stem+(i===1?"st":i===4?"t":i===0?"":e);
  });

  let part=irregularVerb?.part||(base.endsWith("ier")||verb.startsWith("be")||verb.startsWith("ver")||verb.startsWith("ent")||verb.startsWith("er")?base+"t":"ge"+base+"t");
  let aux=irregularVerb?.aux||"haben";

  if(tense==="Präsens") return present[person];
  if(tense==="Präteritum") return past[person];
  if(tense==="Perfekt") return auxiliaries[aux][person]+" "+part;

  if(tense==="Plusquamperfekt") {
    const forms=aux==="sein"?["war","warst","war","waren","wart","waren"]:["hatte","hattest","hatte","hatten","hattet","hatten"];
    return forms[person]+" "+part;
  }

  if(tense==="Futur I")
    return ["werde","wirst","wird","werden","werdet","werden"][person]+" "+verb;

  if(tense==="Futur II")
    return ["werde","wirst","wird","werden","werdet","werden"][person]+" "+part+" "+(aux==="sein"?"sein":"haben");

  if(tense==="Konjunktiv I") {
    if(verb==="sein") return ["sei","seiest","sei","seien","seiet","seien"][person];
    return base+["e","est","e","en","et","en"][person];
  }

  if(tense==="Konjunktiv II") {
    if(verb==="sein") return ["wäre","wärst","wäre","wären","wärt","wären"][person];
    if(verb==="haben") return ["hätte","hättest","hätte","hätten","hättet","hätten"][person];

    const stem=irregularVerb?.past?.[0]||past[0];
    if(irregularVerb) {
      const umlaut=stem.replace(/a/g,"ä").replace(/o/g,"ö").replace(/u/g,"ü");
      return [umlaut+"e",umlaut+"est",umlaut+"e",umlaut+"en",umlaut+"et",umlaut+"en"][person];
    }
    return ["würde","würdest","würde","würden","würdet","würden"][person]+" "+verb;
  }

  if(tense==="Imperativ") {
    if([0,2,5].includes(selectedPerson)) return "—";

    const prefixes=["ab","an","auf","aus","bei","ein","fest","her","hin","los","mit","nach","vor","weg","weiter","zu","zurück","zusammen"];
    const prefix=prefixes.find(p=>verb.startsWith(p)&&verb.length>p.length+2);
    const core=prefix?verb.slice(prefix.length):verb;
    const stem=core.replace(/en$|n$/,"");

    const duForms={
      sein:"sei",haben:"hab",werden:"werde",wissen:"wisse",
      geben:"gib",nehmen:"nimm",sprechen:"sprich",lesen:"lies",
      sehen:"sieh",essen:"iss",fahren:"fahr",schlafen:"schlaf",
      laufen:"lauf",helfen:"hilf",vergessen:"vergiss",treffen:"triff",
      empfehlen:"empfiehl",werfen:"wirf",sterben:"stirb",
      treten:"tritt",halten:"halt"
    };

    const duForm=duForms[core]||stem;

    if(selectedPerson===1) return prefix?`${duForm} ${prefix}`:duForm;
    if(selectedPerson===3) {
      if(verb==="sein") return "Seien wir";
      return prefix?`${core} wir ${prefix}`:`${verb} wir`;
    }
    if(selectedPerson===4) {
      const ihrForm=present[4];
      const ihrStem=prefix?ihrForm.slice(prefix.length):ihrForm;
      return prefix?`${ihrStem} ${prefix}`:ihrForm;
    }
    if(selectedPerson===6) {
      if(verb==="sein") return "Seien Sie";
      return prefix?`${core} Sie ${prefix}`:`${verb} Sie`;
    }
    return "—";
  }

  return "";
}

// ONE VERB AND ONE TENSE AT A TIME

function buildExercises() {
  selectedPeople=[...new Set(selectedPeople.map(p=>p==="sie"||p==="Sie"?"sie / Sie":p))];
  practiceVerbs=[...selectedVerbs];
  currentVerbIndex=0;
  currentTenseIndex=0;
  renderCurrentVerb();
  practiceBackDestination=document.getElementById("customPage").classList.contains("hidden")?2:"custom";
  showPage(3);
  requestAnimationFrame(()=>focusPracticeAnswers());
}

function renderCurrentVerb() {
  const container=document.getElementById("exercise");
  const result=document.getElementById("result");
  const navigation=document.getElementById("verbNavigation");
  const actions=document.getElementById("answerActions");

  container.innerHTML="";
  result.textContent="";
  result.classList.add("hidden");
  navigation.classList.add("hidden");
  actions.classList.remove("hidden");
  currentExercises=[];

  if(!practiceVerbs.length||currentVerbIndex>=practiceVerbs.length) {
    actions.classList.add("hidden");
    showPage(1);
    return;
  }

  const verb=practiceVerbs[currentVerbIndex];
  const tense=selectedTenses[currentTenseIndex];
  const total=practiceVerbs.length*selectedTenses.length;
  const current=currentVerbIndex*selectedTenses.length+currentTenseIndex+1;

  document.getElementById("verbProgress").textContent=`Exercise ${current} of ${total} | Verb ${currentVerbIndex+1} of ${practiceVerbs.length} | Tense ${currentTenseIndex+1} of ${selectedTenses.length}`;
  document.getElementById("nextVerb").textContent=current===total?"Finish practice":"Next →";

  const title=document.createElement("h2");
  title.className="practice-verb-title";
  title.textContent=verb;
  container.appendChild(title);

  const section=document.createElement("div");
  section.className="exercise-tense";

  const heading=document.createElement("h3");
  heading.textContent=tense;
  section.appendChild(heading);

  (tense==="Imperativ" ? selectedPeople.flatMap(p=>p==="sie / Sie"?["sie","Sie"]:[p]) : selectedPeople).forEach(person=>{
    const index=person==="Sie"?6:person==="sie"?5:people.indexOf(person);
    const unavailable=tense==="Imperativ"&&["ich","er/sie/es","sie"].includes(person);

    const row=document.createElement("div");
    row.className="exercise-row";

    const label=document.createElement("strong");
    label.textContent=person;

    const input=document.createElement("input");
    input.placeholder=unavailable?"Not used in Imperativ":"Your answer...";
    input.autocomplete="off";

    const status=document.createElement("span");
    status.className="status";

    if(unavailable) {
      input.disabled=true;
      row.style.opacity="0.38";
      row.style.filter="grayscale(1)";
      status.textContent="—";
    } else {
      currentExercises.push({verb,tense,person,index,input,status});
    }

    row.append(label,input,status);
    section.appendChild(row);
  });

  container.appendChild(section);

  currentExercises.forEach((item,index)=>{
    item.input.addEventListener("keydown",e=>{
      if(e.key!=="Enter") return;
      e.preventDefault();
      const next=currentExercises.slice(index+1).find(x=>!x.input.disabled);
      if(next) {
        next.input.focus();
      } else {
        item.input.blur();
        // The final Enter checks the entire exercise once.
        if(!document.getElementById("answerActions").classList.contains("hidden")) {
          checkCurrentVerb();
        }
      }
    });
  });
}

// CHECK ANSWERS

function checkCurrentVerb() {
  if(!currentExercises.length) return;

  let score=0;

  currentExercises.forEach(item=>{
    const answer=item.input.value.trim().toLowerCase();
    const solution=conjugate(item.verb,item.tense,item.index).toLowerCase();

    if(item.input.dataset.inkAnswer==='true') {
      item.status.textContent='✎ Compare with: '+conjugate(item.verb,item.tense,item.index);
      item.status.className='status';
      item.input.disabled=true;
      return;
    }
    if(answer===solution) {
      score++;
      item.status.textContent="✓";
      item.status.className="status correct";
    } else {
      item.status.textContent="✗ "+solution;
      item.status.className="status wrong";
    }

    item.input.disabled=true;
  });

  document.getElementById("result").textContent=`Result: ${score} / ${currentExercises.length} correct`;
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("answerActions").classList.add("hidden");
  document.getElementById("verbNavigation").classList.remove("hidden");
}

document.getElementById("checkAll").onclick=checkCurrentVerb;

// RESET

document.getElementById("reset").onclick=()=>{
  currentExercises.forEach(item=>{
    item.input.value="";
    item.input.disabled=false;
    item.status.textContent="";
    item.status.className="status";
  });

  document.getElementById("result").textContent="";
  document.getElementById("result").classList.add("hidden");
  document.getElementById("verbNavigation").classList.add("hidden");
  document.getElementById("answerActions").classList.remove("hidden");
};

// REDO

document.getElementById("redoVerb").onclick=()=>{
  renderCurrentVerb();
  requestAnimationFrame(focusPracticeAnswers);
};

// NEXT

document.getElementById("nextVerb").onclick=()=>{
  currentTenseIndex++;

  if(currentTenseIndex>=selectedTenses.length) {
    currentTenseIndex=0;
    currentVerbIndex++;
  }

  if(currentVerbIndex>=practiceVerbs.length){
    showPage(1);
    return;
  }
  renderCurrentVerb();
  requestAnimationFrame(focusPracticeAnswers);
};

// EDIT VERBS

document.getElementById("editVerbs").onclick=async()=>{
  const allVerbs=[...new Set([...Object.values(database).flat(),...Object.values(customLists).flat()])];

  const chosen=await showSelectionDialog("Click to select or deselect the verbs you want:",allVerbs,selectedVerbs);
  if(chosen===null) return;
  if(!chosen.length) return showDialog("Choose at least one verb.");

  selectedVerbs=chosen;
  buildExercises();
};

// EDIT TENSES

document.getElementById("editTenses").onclick=async()=>{
  const chosen=await showSelectionDialog("Click to select or deselect the tenses you want:",tenses,selectedTenses);
  if(chosen===null) return;
  if(!chosen.length) return showDialog("Choose at least one tense.");

  selectedTenses=chosen;
  buildExercises();
};

// EDIT PRONOUNS

document.getElementById("editPronouns").onclick=async()=>{
  const chosen=await showSelectionDialog("Click to select or deselect the pronouns you want:",people,selectedPeople);
  if(chosen===null) return;
  if(!chosen.length) return showDialog("Choose at least one pronoun.");

  selectedPeople=chosen;
  buildExercises();
};

// INITIALIZE

loadCustomLists();
renderVerbs();
renderCustomLists();


// INTERFACE TRANSLATIONS — verb names, tenses and conjugation answers stay German.
const UI_LANGUAGES = {
  "YOUR GERMAN STUDY NOTEBOOK": {
    "ar": "دفتر تعلّم الألمانية",
    "fr": "VOTRE CARNET D’ALLEMAND",
    "de": "DEIN DEUTSCH-LERNHEFT",
    "es": "TU CUADERNO DE ALEMÁN"
  },
  "German Verb Trainer": {
    "ar": "مدرّب الأفعال الألمانية",
    "fr": "Entraîneur de verbes allemands",
    "de": "Deutscher Verbtrainer",
    "es": "Entrenador de verbos alemanes"
  },
  "A little practice every day makes progress.": {
    "ar": "القليل من التدريب كل يوم يصنع فرقًا.",
    "fr": "Un peu de pratique chaque jour fait progresser.",
    "de": "Ein bisschen Übung jeden Tag bringt Fortschritt.",
    "es": "Practicar un poco cada día te ayuda a avanzar."
  },
  "Language": {
    "ar": "اللغة",
    "fr": "Langue",
    "de": "Sprache",
    "es": "Idioma"
  },
  "GET STARTED": {
    "ar": "ابدأ",
    "fr": "COMMENCER",
    "de": "LOS GEHT’S",
    "es": "EMPEZAR"
  },
  "Choose your level": {
    "ar": "اختر مستواك",
    "fr": "Choisissez votre niveau",
    "de": "Wähle dein Niveau",
    "es": "Elige tu nivel"
  },
  "YOUR VOCABULARY": {
    "ar": "مفرداتك",
    "fr": "VOTRE VOCABULAIRE",
    "de": "DEIN WORTSCHATZ",
    "es": "TU VOCABULARIO"
  },
  "Available verbs": {
    "ar": "الأفعال المتاحة",
    "fr": "Verbes disponibles",
    "de": "Verfügbare Verben",
    "es": "Verbos disponibles"
  },
  "Select the verbs you want to practise": {
    "ar": "اختر الأفعال التي تريد التدرّب عليها",
    "fr": "Sélectionnez les verbes à pratiquer",
    "de": "Wähle die Verben zum Üben",
    "es": "Selecciona los verbos que quieres practicar"
  },
  "＋ Create my own list": {
    "ar": "＋ إنشاء قائمتي الخاصة",
    "fr": "＋ Créer ma liste",
    "de": "＋ Eigene Liste erstellen",
    "es": "＋ Crear mi lista"
  },
  "Enter your list name": {
    "ar": "أدخل اسم القائمة",
    "fr": "Nom de votre liste",
    "de": "Name deiner Liste",
    "es": "Nombre de tu lista"
  },
  "Create list": {
    "ar": "إنشاء القائمة",
    "fr": "Créer la liste",
    "de": "Liste erstellen",
    "es": "Crear lista"
  },
  "Cancel": {
    "ar": "إلغاء",
    "fr": "Annuler",
    "de": "Abbrechen",
    "es": "Cancelar"
  },
  "Continue": {
    "ar": "متابعة",
    "fr": "Continuer",
    "de": "Weiter",
    "es": "Continuar"
  },
  "← Back to lists": {
    "ar": "← العودة للقوائم",
    "fr": "← Retour aux listes",
    "de": "← Zurück zu Listen",
    "es": "← Volver a las listas"
  },
  "PERSONALISE": {
    "ar": "تخصيص",
    "fr": "PERSONNALISER",
    "de": "ANPASSEN",
    "es": "PERSONALIZAR"
  },
  "Configure your list": {
    "ar": "إعداد قائمتك",
    "fr": "Configurer votre liste",
    "de": "Liste einrichten",
    "es": "Configura tu lista"
  },
  "Choose verbs from the available levels": {
    "ar": "اختر الأفعال من المستويات المتاحة",
    "fr": "Choisissez des verbes parmi les niveaux",
    "de": "Wähle Verben aus den Niveaus",
    "es": "Elige verbos de los niveles disponibles"
  },
  "Choose tenses": {
    "ar": "اختر الأزمنة",
    "fr": "Choisissez les temps",
    "de": "Zeitformen wählen",
    "es": "Elige los tiempos"
  },
  "Choose pronouns": {
    "ar": "اختر الضمائر",
    "fr": "Choisissez les pronoms",
    "de": "Pronomen wählen",
    "es": "Elige los pronombres"
  },
  "Start practice": {
    "ar": "بدء التدريب",
    "fr": "Commencer l’entraînement",
    "de": "Übung starten",
    "es": "Empezar práctica"
  },
  "← Back": {
    "ar": "← رجوع",
    "fr": "← Retour",
    "de": "← Zurück",
    "es": "← Volver"
  },
  "PRACTICE SETTINGS": {
    "ar": "إعدادات التدريب",
    "fr": "PARAMÈTRES D’ENTRAÎNEMENT",
    "de": "ÜBUNGSEINSTELLUNGEN",
    "es": "CONFIGURACIÓN DE PRÁCTICA"
  },
  "Choose your tenses": {
    "ar": "اختر الأزمنة",
    "fr": "Choisissez vos temps",
    "de": "Wähle deine Zeitformen",
    "es": "Elige tus tiempos"
  },
  "Choose which German tenses you want to work on.": {
    "ar": "اختر الأزمنة الألمانية التي تريد التدرّب عليها.",
    "fr": "Choisissez les temps allemands à travailler.",
    "de": "Wähle die deutschen Zeitformen, die du üben möchtest.",
    "es": "Elige los tiempos alemanes que quieres practicar."
  },
  "Start conjugating": {
    "ar": "ابدأ التصريف",
    "fr": "Commencer à conjuguer",
    "de": "Konjugieren starten",
    "es": "Empezar a conjugar"
  },
  "YOUR SESSION": {
    "ar": "جلستك",
    "fr": "VOTRE SESSION",
    "de": "DEINE SITZUNG",
    "es": "TU SESIÓN"
  },
  "Conjugation practice": {
    "ar": "تدريب التصريف",
    "fr": "Entraînement à la conjugaison",
    "de": "Konjugationsübung",
    "es": "Práctica de conjugación"
  },
  "SESSION SETTINGS": {
    "ar": "إعدادات الجلسة",
    "fr": "PARAMÈTRES DE SESSION",
    "de": "SITZUNGSEINSTELLUNGEN",
    "es": "CONFIGURACIÓN DE SESIÓN"
  },
  "Edit verbs": {
    "ar": "تعديل الأفعال",
    "fr": "Modifier les verbes",
    "de": "Verben bearbeiten",
    "es": "Editar verbos"
  },
  "Edit tenses": {
    "ar": "تعديل الأزمنة",
    "fr": "Modifier les temps",
    "de": "Zeitformen bearbeiten",
    "es": "Editar tiempos"
  },
  "Edit pronouns": {
    "ar": "تعديل الضمائر",
    "fr": "Modifier les pronoms",
    "de": "Pronomen bearbeiten",
    "es": "Editar pronombres"
  },
  "Check answers": {
    "ar": "تحقق من الإجابات",
    "fr": "Vérifier les réponses",
    "de": "Antworten prüfen",
    "es": "Comprobar respuestas"
  },
  "Reset answers": {
    "ar": "مسح الإجابات",
    "fr": "Effacer les réponses",
    "de": "Antworten zurücksetzen",
    "es": "Borrar respuestas"
  },
  "↻ Redo this verb": {
    "ar": "↻ إعادة المحاولة",
    "fr": "↻ Recommencer",
    "de": "↻ Wiederholen",
    "es": "↻ Repetir"
  },
  "Next verb →": {
    "ar": "الفعل التالي ←",
    "fr": "Verbe suivant →",
    "de": "Nächstes Verb →",
    "es": "Siguiente verbo →"
  },
  "Next →": {
    "ar": "التالي ←",
    "fr": "Suivant →",
    "de": "Weiter →",
    "es": "Siguiente →"
  },
  "Finish practice": {
    "ar": "إنهاء التدريب",
    "fr": "Terminer l’entraînement",
    "de": "Übung beenden",
    "es": "Terminar práctica"
  },
  "GERMAN VERB TRAINER": {
    "ar": "مدرّب الأفعال الألمانية",
    "fr": "ENTRAÎNEUR DE VERBES ALLEMANDS",
    "de": "DEUTSCHER VERBTRAINER",
    "es": "ENTRENADOR DE VERBOS ALEMANES"
  },
  "Learn at your own pace": {
    "ar": "تعلّم على راحتك",
    "fr": "Apprenez à votre rythme",
    "de": "Lerne in deinem Tempo",
    "es": "Aprende a tu ritmo"
  },
  "Message": {
    "ar": "رسالة",
    "fr": "Message",
    "de": "Nachricht",
    "es": "Mensaje"
  },
  "Please confirm": {
    "ar": "يرجى التأكيد",
    "fr": "Veuillez confirmer",
    "de": "Bitte bestätigen",
    "es": "Confirma, por favor"
  },
  "Enter information": {
    "ar": "أدخل المعلومات",
    "fr": "Saisissez les informations",
    "de": "Informationen eingeben",
    "es": "Introduce información"
  },
  "Yes": {
    "ar": "نعم",
    "fr": "Oui",
    "de": "Ja",
    "es": "Sí"
  },
  "OK": {
    "ar": "حسنًا",
    "fr": "OK",
    "de": "OK",
    "es": "Aceptar"
  },
  "Save": {
    "ar": "حفظ",
    "fr": "Enregistrer",
    "de": "Speichern",
    "es": "Guardar"
  },
  "Make your selection": {
    "ar": "حدّد اختياراتك",
    "fr": "Faites votre sélection",
    "de": "Triff deine Auswahl",
    "es": "Haz tu selección"
  },
  "Select all": {
    "ar": "تحديد الكل",
    "fr": "Tout sélectionner",
    "de": "Alle auswählen",
    "es": "Seleccionar todo"
  },
  "Open list": {
    "ar": "فتح القائمة",
    "fr": "Ouvrir la liste",
    "de": "Liste öffnen",
    "es": "Abrir lista"
  },
  "Delete list": {
    "ar": "حذف القائمة",
    "fr": "Supprimer la liste",
    "de": "Liste löschen",
    "es": "Eliminar lista"
  },
  "Your answer...": {
    "ar": "إجابتك...",
    "fr": "Votre réponse...",
    "de": "Deine Antwort...",
    "es": "Tu respuesta..."
  },
  "Not used in Imperativ": {
    "ar": "غير مستخدم في الأمر",
    "fr": "Non utilisé à l’impératif",
    "de": "Im Imperativ nicht verwendet",
    "es": "No se usa en imperativo"
  },
  "All verbs completed!": {
    "ar": "أكملت جميع الأفعال!",
    "fr": "Tous les verbes sont terminés !",
    "de": "Alle Verben abgeschlossen!",
    "es": "¡Has completado todos los verbos!"
  },
  "Choose at least one verb.": {
    "ar": "اختر فعلًا واحدًا على الأقل.",
    "fr": "Choisissez au moins un verbe.",
    "de": "Wähle mindestens ein Verb.",
    "es": "Elige al menos un verbo."
  },
  "Choose at least one tense.": {
    "ar": "اختر زمنًا واحدًا على الأقل.",
    "fr": "Choisissez au moins un temps.",
    "de": "Wähle mindestens eine Zeitform.",
    "es": "Elige al menos un tiempo."
  },
  "Choose at least one pronoun.": {
    "ar": "اختر ضميرًا واحدًا على الأقل.",
    "fr": "Choisissez au moins un pronom.",
    "de": "Wähle mindestens ein Pronomen.",
    "es": "Elige al menos un pronombre."
  },
  "Enter a list name.": {
    "ar": "أدخل اسم القائمة.",
    "fr": "Saisissez un nom de liste.",
    "de": "Gib einen Listennamen ein.",
    "es": "Introduce un nombre de lista."
  },
  "This list already exists.": {
    "ar": "هذه القائمة موجودة بالفعل.",
    "fr": "Cette liste existe déjà.",
    "de": "Diese Liste existiert bereits.",
    "es": "Esta lista ya existe."
  },
  "Click to select or deselect the verbs you want:": {
    "ar": "اختر الأفعال أو ألغِ اختيارها:",
    "fr": "Sélectionnez ou désélectionnez les verbes :",
    "de": "Wähle die gewünschten Verben aus oder ab:",
    "es": "Selecciona o deselecciona los verbos:"
  },
  "Click to select or deselect the tenses you want:": {
    "ar": "اختر الأزمنة أو ألغِ اختيارها:",
    "fr": "Sélectionnez ou désélectionnez les temps :",
    "de": "Wähle die gewünschten Zeitformen aus oder ab:",
    "es": "Selecciona o deselecciona los tiempos:"
  },
  "Click to select or deselect the pronouns you want:": {
    "ar": "اختر الضمائر أو ألغِ اختيارها:",
    "fr": "Sélectionnez ou désélectionnez les pronoms :",
    "de": "Wähle die gewünschten Pronomen aus oder ab:",
    "es": "Selecciona o deselecciona los pronombres:"
  }
};

const UI_PATTERNS = [
  [/^(\d+) verbs selected$/, {ar:"تم اختيار $1 فعل",fr:"$1 verbes sélectionnés",de:"$1 Verben ausgewählt",es:"$1 verbos seleccionados"}],
  [/^(\d+) verbs$/, {ar:"$1 فعل",fr:"$1 verbes",de:"$1 Verben",es:"$1 verbos"}],
  [/^Configure: (.+)$/, {ar:"إعداد: $1",fr:"Configurer : $1",de:"Einrichten: $1",es:"Configurar: $1"}],
  [/^Delete "(.+)"\?$/, {ar:'حذف "$1"؟',fr:'Supprimer « $1 » ?',de:'"$1" löschen?',es:'¿Eliminar "$1"?'}],
  [/^Select all (A1|A2|B1|B2|C1|C2)$/, {ar:"تحديد كل $1",fr:"Tout sélectionner $1",de:"Alle $1 auswählen",es:"Seleccionar todo $1"}],
  [/^Exercise (\d+) of (\d+) \| Verb (\d+) of (\d+) \| Tense (\d+) of (\d+)$/, {ar:"التمرين $1 من $2 | الفعل $3 من $4 | الزمن $5 من $6",fr:"Exercice $1 sur $2 | Verbe $3 sur $4 | Temps $5 sur $6",de:"Aufgabe $1 von $2 | Verb $3 von $4 | Zeitform $5 von $6",es:"Ejercicio $1 de $2 | Verbo $3 de $4 | Tiempo $5 de $6"}],
  [/^Result: (\d+) \/ (\d+) correct$/, {ar:"النتيجة: $1 من $2 صحيحة",fr:"Résultat : $1 / $2 correctes",de:"Ergebnis: $1 / $2 richtig",es:"Resultado: $1 / $2 correctas"}],
  [/^Close list$/, {ar:"إغلاق القائمة",fr:"Fermer la liste",de:"Liste schließen",es:"Cerrar lista"}],
  [/^Open list$/, {ar:"فتح القائمة",fr:"Ouvrir la liste",de:"Liste öffnen",es:"Abrir lista"}]
];

let interfaceLocale = localStorage.getItem("germanTrainerInterfaceLanguage") || "en";
const uiTextSources = new WeakMap();
const uiAttrSources = new WeakMap();

function uiTranslate(source) {
  if (interfaceLocale === "en") return source;
  const exact = UI_LANGUAGES[source]?.[interfaceLocale];
  if (exact) return exact;
  for (const [pattern, versions] of UI_PATTERNS) {
    if (pattern.test(source) && versions[interfaceLocale]) return source.replace(pattern, versions[interfaceLocale]);
  }
  return source;
}

function uiTranslateTextNode(node) {
  const raw = node.nodeValue;
  if (!raw.trim()) return;
  const prior = uiTextSources.get(node);
  const source = prior && prior.translated === raw ? prior.source : raw;
  const translated = uiTranslate(source.trim());
  const leading = source.match(/^\s*/)[0];
  const trailing = source.match(/\s*$/)[0];
  const next = leading + translated + trailing;
  uiTextSources.set(node, {source, translated:next});
  if (node.nodeValue !== next) node.nodeValue = next;
}

function uiTranslateAttribute(element, attribute) {
  if (!element.hasAttribute(attribute)) return;
  let memory = uiAttrSources.get(element);
  if (!memory) { memory = {}; uiAttrSources.set(element, memory); }
  const raw = element.getAttribute(attribute);
  const prior = memory[attribute];
  const source = prior && prior.translated === raw ? prior.source : raw;
  const next = uiTranslate(source);
  memory[attribute] = {source, translated:next};
  if (raw !== next) element.setAttribute(attribute, next);
}

function uiTranslateTree(root) {
  if (root.nodeType === Node.TEXT_NODE) { uiTranslateTextNode(root); return; }
  if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;
  if (root.nodeType === Node.ELEMENT_NODE) {
    if (["SCRIPT","STYLE"].includes(root.tagName)) return;
    for (const attribute of ["placeholder","title","aria-label"]) uiTranslateAttribute(root, attribute);
  }
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return node.parentElement && !["SCRIPT","STYLE"].includes(node.parentElement.tagName)
        ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  let node;
  while ((node = walker.nextNode())) uiTranslateTextNode(node);
  if (root.nodeType === Node.ELEMENT_NODE) {
    for (const element of root.querySelectorAll("[placeholder],[title],[aria-label]")) {
      for (const attribute of ["placeholder","title","aria-label"]) uiTranslateAttribute(element, attribute);
    }
  }
}

function setInterfaceLanguage(locale) {
  interfaceLocale = ["en","ar","kab","fr","de","es","it","pt","tr","nl","ru"].includes(locale) ? locale : "en";
  localStorage.setItem("germanTrainerInterfaceLanguage", interfaceLocale);
  document.documentElement.lang = interfaceLocale;
  document.documentElement.dir = interfaceLocale === "ar" ? "rtl" : "ltr";
  document.getElementById("interfaceLanguage").value = interfaceLocale;
  uiTranslateTree(document.body);
  document.title = uiTranslate("German Verb Trainer");
}

const uiObserver = new MutationObserver(mutations => {
  for (const mutation of mutations) {
    if (mutation.type === "characterData") uiTranslateTree(mutation.target);
    else if (mutation.type === "attributes") uiTranslateAttribute(mutation.target, mutation.attributeName);
    else for (const node of mutation.addedNodes) uiTranslateTree(node);
  }
});

const interfaceLanguageSelect = document.getElementById("interfaceLanguage");
interfaceLanguageSelect.addEventListener("change", event => setInterfaceLanguage(event.target.value));
setInterfaceLanguage(interfaceLocale);
uiObserver.observe(document.body, {
  subtree:true, childList:true, characterData:true, attributes:true,
  attributeFilter:["placeholder","title","aria-label"]
});

// -------------------------------------------------------------
// MULTILINGUAL GLOSSARY, GERMAN AUDIO & TABLET WRITING TOOLS
// -------------------------------------------------------------

// Short infinitive meanings, in the same order as the built-in verb lists.
const englishGlossRows = {
 A1: `be|have|become|go|come|do; make|learn|live; reside|live|work|play|eat|drink|speak|be called|drive; ride|read|write|see|hear|buy|need|find|take|give|sleep|run|ask|answer|say`,
 A2: `stay|bring|think|know; be familiar with|know; be aware|help|meet|forget|lose|begin|receive; get|visit|pay|tell; narrate|explain|please; appeal to|belong|win|cook|travel|send|search|carry; wear|sell|understand|wait|wash|pull; move|open|close`,
 B1: `call by phone|stand up; get up|start|arrive|look; appear|invite|recommend|decide|emerge|reach|recognize|allow|expect|fly|feel|win|enjoy|happen|succeed|compare|behave|leave|try|prepare|suggest|take part|undertake|sign|consider|move house`,
 B2: `reject|acknowledge|offer|accept|influence|encounter|contribute|decide; resolve|exist; pass|concern; affect|prove|represent|carry out|deploy; insert|develop|require|enable|determine; establish|promote|manufacture|point out|take over|prevent|avoid|presuppose|perceive|summarize|increase|decrease|contain`,
 C1: `process; handle|aspire to|maintain|trigger|intend|impair|overcome; cope with|concede|restrict|be omitted|correspond to|emphasize|understand; trace|ensure|overcome|be subject to|arrange; cause|illustrate|obtain; procure|precede|contradict|fall back on|underlie|agree|guarantee`,
 C2: `seem absurd|take to heart|support; advocate|reaffirm|criticize|take into account|penetrate; understand deeply|go hand in hand|counteract|refute|discover; access|emerge from|inhabit inherently|be incumbent on|reveal; give away|be exhausted|occur; happen|prevent; stop|visualize mentally|fail to recognize|convey; mediate|conceal|do without|disprove|run counter to`
};
const VERB_MEANINGS_EN = {};
Object.entries(database).forEach(([lvl, verbs]) => {
  const glosses = englishGlossRows[lvl].split('|');
  if (verbs.length !== glosses.length) console.warn('Meaning count mismatch:', lvl, verbs.length, glosses.length);
  verbs.forEach((verb, i) => { VERB_MEANINGS_EN[verb] = glosses[i] || verb; });
});

// Reviewed common-verb glosses; uncommon meanings are translated on demand.
// Kabyle currently has a smaller human-written set; fallback is clearly marked.
const builtinGlosses = {
 ar: {
  sein:'يكون',haben:'يملك',werden:'يصبح',gehen:'يذهب',kommen:'يأتي',machen:'يفعل؛ يصنع',lernen:'يتعلم',wohnen:'يسكن',leben:'يعيش',arbeiten:'يعمل',spielen:'يلعب',essen:'يأكل',trinken:'يشرب',sprechen:'يتكلم',heißen:'يُسمّى',fahren:'يقود؛ يسافر',lesen:'يقرأ',schreiben:'يكتب',sehen:'يرى',hören:'يسمع',kaufen:'يشتري',brauchen:'يحتاج',finden:'يجد',nehmen:'يأخذ',geben:'يعطي',schlafen:'ينام',laufen:'يركض',fragen:'يسأل',antworten:'يجيب',sagen:'يقول',bleiben:'يبقى',bringen:'يجلب',denken:'يفكر',kennen:'يعرف',wissen:'يعلم',helfen:'يساعد',treffen:'يلتقي',vergessen:'ينسى',verlieren:'يفقد',beginnen:'يبدأ',bekommen:'يحصل على',besuchen:'يزور',bezahlen:'يدفع',erzählen:'يروي',erklären:'يشرح',gefallen:'يعجب',gehören:'ينتمي',gewinnen:'يفوز',kochen:'يطبخ',reisen:'يسافر',schicken:'يرسل',suchen:'يبحث',tragen:'يحمل؛ يرتدي',verkaufen:'يبيع',verstehen:'يفهم',warten:'ينتظر',waschen:'يغسل',ziehen:'يسحب؛ ينتقل',öffnen:'يفتح',schließen:'يغلق'
 },
 fr: {
  sein:'être',haben:'avoir',werden:'devenir',gehen:'aller',kommen:'venir',machen:'faire',lernen:'apprendre',wohnen:'habiter',leben:'vivre',arbeiten:'travailler',spielen:'jouer',essen:'manger',trinken:'boire',sprechen:'parler',heißen:"s’appeler",fahren:'conduire; aller',lesen:'lire',schreiben:'écrire',sehen:'voir',hören:'entendre',kaufen:'acheter',brauchen:'avoir besoin de',finden:'trouver',nehmen:'prendre',geben:'donner',schlafen:'dormir',laufen:'courir',fragen:'demander',antworten:'répondre',sagen:'dire',bleiben:'rester',bringen:'apporter',denken:'penser',kennen:'connaître',wissen:'savoir',helfen:'aider',treffen:'rencontrer',vergessen:'oublier',verlieren:'perdre',beginnen:'commencer',bekommen:'recevoir',besuchen:'rendre visite',bezahlen:'payer',erzählen:'raconter',erklären:'expliquer',gefallen:'plaire',gehören:'appartenir',gewinnen:'gagner',kochen:'cuisiner',reisen:'voyager',schicken:'envoyer',suchen:'chercher',tragen:'porter',verkaufen:'vendre',verstehen:'comprendre',warten:'attendre',waschen:'laver',ziehen:'tirer; déménager',öffnen:'ouvrir',schließen:'fermer'
 },
 es: {
  sein:'ser; estar',haben:'tener',werden:'convertirse en',gehen:'ir',kommen:'venir',machen:'hacer',lernen:'aprender',wohnen:'vivir; residir',leben:'vivir',arbeiten:'trabajar',spielen:'jugar',essen:'comer',trinken:'beber',sprechen:'hablar',heißen:'llamarse',fahren:'conducir; ir',lesen:'leer',schreiben:'escribir',sehen:'ver',hören:'oír',kaufen:'comprar',brauchen:'necesitar',finden:'encontrar',nehmen:'tomar',geben:'dar',schlafen:'dormir',laufen:'correr',fragen:'preguntar',antworten:'responder',sagen:'decir',bleiben:'quedarse',bringen:'traer',denken:'pensar',kennen:'conocer',wissen:'saber',helfen:'ayudar',treffen:'encontrarse',vergessen:'olvidar',verlieren:'perder',beginnen:'empezar',bekommen:'recibir',besuchen:'visitar',bezahlen:'pagar',erzählen:'contar',erklären:'explicar',gefallen:'gustar',gehören:'pertenecer',gewinnen:'ganar',kochen:'cocinar',reisen:'viajar',schicken:'enviar',suchen:'buscar',tragen:'llevar',verkaufen:'vender',verstehen:'entender',warten:'esperar',waschen:'lavar',ziehen:'tirar; mudarse',öffnen:'abrir',schließen:'cerrar'
 },
 it: {
  sein:'essere',haben:'avere',werden:'diventare',gehen:'andare',kommen:'venire',machen:'fare',lernen:'imparare',wohnen:'abitare',leben:'vivere',arbeiten:'lavorare',spielen:'giocare',essen:'mangiare',trinken:'bere',sprechen:'parlare',heißen:'chiamarsi',fahren:'guidare; andare',lesen:'leggere',schreiben:'scrivere',sehen:'vedere',hören:'sentire',kaufen:'comprare',brauchen:'avere bisogno di',finden:'trovare',nehmen:'prendere',geben:'dare',schlafen:'dormire',laufen:'correre',fragen:'chiedere',antworten:'rispondere',sagen:'dire',bleiben:'rimanere',bringen:'portare',denken:'pensare',kennen:'conoscere',wissen:'sapere',helfen:'aiutare',treffen:'incontrare',vergessen:'dimenticare',verlieren:'perdere',beginnen:'iniziare',bekommen:'ricevere',besuchen:'visitare',bezahlen:'pagare',erzählen:'raccontare',erklären:'spiegare',gefallen:'piacere',gehören:'appartenere',gewinnen:'vincere',kochen:'cucinare',reisen:'viaggiare',schicken:'inviare',suchen:'cercare',tragen:'portare; indossare',verkaufen:'vendere',verstehen:'capire',warten:'aspettare',waschen:'lavare',ziehen:'tirare; trasferirsi',öffnen:'aprire',schließen:'chiudere'
 },
 pt: {
  sein:'ser; estar',haben:'ter',werden:'tornar-se',gehen:'ir',kommen:'vir',machen:'fazer',lernen:'aprender',wohnen:'morar',leben:'viver',arbeiten:'trabalhar',spielen:'jogar; brincar',essen:'comer',trinken:'beber',sprechen:'falar',heißen:'chamar-se',fahren:'dirigir; ir',lesen:'ler',schreiben:'escrever',sehen:'ver',hören:'ouvir',kaufen:'comprar',brauchen:'precisar',finden:'encontrar',nehmen:'pegar; tomar',geben:'dar',schlafen:'dormir',laufen:'correr',fragen:'perguntar',antworten:'responder',sagen:'dizer',bleiben:'ficar',bringen:'trazer',denken:'pensar',kennen:'conhecer',wissen:'saber',helfen:'ajudar',treffen:'encontrar',vergessen:'esquecer',verlieren:'perder',beginnen:'começar',bekommen:'receber',besuchen:'visitar',bezahlen:'pagar',erzählen:'contar',erklären:'explicar',gefallen:'agradar',gehören:'pertencer',gewinnen:'ganhar',kochen:'cozinhar',reisen:'viajar',schicken:'enviar',suchen:'procurar',tragen:'carregar; vestir',verkaufen:'vender',verstehen:'entender',warten:'esperar',waschen:'lavar',ziehen:'puxar; mudar-se',öffnen:'abrir',schließen:'fechar'
 },
 tr: {
  sein:'olmak',haben:'sahip olmak',werden:'olmak; dönüşmek',gehen:'gitmek',kommen:'gelmek',machen:'yapmak',lernen:'öğrenmek',wohnen:'oturmak; ikamet etmek',leben:'yaşamak',arbeiten:'çalışmak',spielen:'oynamak',essen:'yemek',trinken:'içmek',sprechen:'konuşmak',heißen:'adı olmak',fahren:'sürmek; gitmek',lesen:'okumak',schreiben:'yazmak',sehen:'görmek',hören:'duymak',kaufen:'satın almak',brauchen:'ihtiyaç duymak',finden:'bulmak',nehmen:'almak',geben:'vermek',schlafen:'uyumak',laufen:'koşmak',fragen:'sormak',antworten:'yanıtlamak',sagen:'söylemek',bleiben:'kalmak',bringen:'getirmek',denken:'düşünmek',kennen:'tanımak',wissen:'bilmek',helfen:'yardım etmek',treffen:'buluşmak',vergessen:'unutmak',verlieren:'kaybetmek',beginnen:'başlamak',bekommen:'almak; elde etmek',besuchen:'ziyaret etmek',bezahlen:'ödemek',erzählen:'anlatmak',erklären:'açıklamak',gefallen:'hoşuna gitmek',gehören:'ait olmak',gewinnen:'kazanmak',kochen:'yemek pişirmek',reisen:'seyahat etmek',schicken:'göndermek',suchen:'aramak',tragen:'taşımak; giymek',verkaufen:'satmak',verstehen:'anlamak',warten:'beklemek',waschen:'yıkamak',ziehen:'çekmek; taşınmak',öffnen:'açmak',schließen:'kapatmak'
 },
 nl: {
  sein:'zijn',haben:'hebben',werden:'worden',gehen:'gaan',kommen:'komen',machen:'doen; maken',lernen:'leren',wohnen:'wonen',leben:'leven',arbeiten:'werken',spielen:'spelen',essen:'eten',trinken:'drinken',sprechen:'spreken',heißen:'heten',fahren:'rijden',lesen:'lezen',schreiben:'schrijven',sehen:'zien',hören:'horen',kaufen:'kopen',brauchen:'nodig hebben',finden:'vinden',nehmen:'nemen',geben:'geven',schlafen:'slapen',laufen:'rennen; lopen',fragen:'vragen',antworten:'antwoorden',sagen:'zeggen',bleiben:'blijven',bringen:'brengen',denken:'denken',kennen:'kennen',wissen:'weten',helfen:'helpen',treffen:'ontmoeten',vergessen:'vergeten',verlieren:'verliezen',beginnen:'beginnen',bekommen:'krijgen',besuchen:'bezoeken',bezahlen:'betalen',erzählen:'vertellen',erklären:'uitleggen',gefallen:'bevallen',gehören:'horen bij',gewinnen:'winnen',kochen:'koken',reisen:'reizen',schicken:'sturen',suchen:'zoeken',tragen:'dragen',verkaufen:'verkopen',verstehen:'begrijpen',warten:'wachten',waschen:'wassen',ziehen:'trekken; verhuizen',öffnen:'openen',schließen:'sluiten'
 },
 ru: {
  sein:'быть',haben:'иметь',werden:'становиться',gehen:'идти',kommen:'приходить',machen:'делать',lernen:'учить; изучать',wohnen:'проживать',leben:'жить',arbeiten:'работать',spielen:'играть',essen:'есть',trinken:'пить',sprechen:'говорить',heißen:'называться',fahren:'ехать; водить',lesen:'читать',schreiben:'писать',sehen:'видеть',hören:'слышать',kaufen:'покупать',brauchen:'нуждаться',finden:'находить',nehmen:'брать',geben:'давать',schlafen:'спать',laufen:'бегать',fragen:'спрашивать',antworten:'отвечать',sagen:'сказать',bleiben:'оставаться',bringen:'приносить',denken:'думать',kennen:'знать',wissen:'знать',helfen:'помогать',treffen:'встречать',vergessen:'забывать',verlieren:'терять',beginnen:'начинать',bekommen:'получать',besuchen:'посещать',bezahlen:'платить',erzählen:'рассказывать',erklären:'объяснять',gefallen:'нравиться',gehören:'принадлежать',gewinnen:'выигрывать',kochen:'готовить',reisen:'путешествовать',schicken:'посылать',suchen:'искать',tragen:'носить',verkaufen:'продавать',verstehen:'понимать',warten:'ждать',waschen:'мыть',ziehen:'тянуть; переезжать',öffnen:'открывать',schließen:'закрывать'
 },
 kab: {
  sein:'ili',haben:'sɛu',werden:'uɣal',gehen:'ṛuḥ',kommen:'as',machen:'eg',lernen:'lmed',wohnen:'zdeɣ',leben:'idir',arbeiten:'xedem',spielen:'urar',essen:'ečč',trinken:'ssew',sprechen:'meslay',heißen:'isem',fahren:'ṛuḥ s tkarust',lesen:'ɣer',schreiben:'aru',sehen:'wali',hören:'sel',kaufen:'aɣ',brauchen:'ḥwaǧ',finden:'af',nehmen:'awi',geben:'efk',schlafen:'gen',laufen:'azzel',fragen:'steqsi',antworten:'err tiririt',sagen:'ini',bleiben:'qqim',bringen:'awi-d',denken:'xemmem',kennen:'issin',wissen:'issin',helfen:'ɛiwen',treffen:'mlil',vergessen:'ttu',verlieren:'ṛuḥ-as',beginnen:'bdu',besuchen:'ṛuḥ ɣer',bezahlen:'xelleṣ',erklären:'sefhem',verstehen:'fhem',warten:'ṛǧu',öffnen:'ldi',schließen:'mḍel'
 }
};

const meaningCacheKey = 'trainerTranslatedGlosses.v3';
let translatedGlossCache = {};
try { translatedGlossCache = JSON.parse(localStorage.getItem(meaningCacheKey)) || {}; } catch {}
const translationPending = new Map();
const translationLimits = {inFlight:0,queue:[]};
const labelFallback = {en:'English',ar:'English',kab:'English',fr:'English',de:'English',es:'English',it:'English',pt:'English',tr:'English',nl:'English',ru:'English'};

function storedMeaning(verb, locale = interfaceLocale) {
  const fallback = VERB_MEANINGS_EN[verb] || verb;
  if (locale === 'en') return {text:fallback, lang:'en'};
  if (locale === 'de') return {text:verb, lang:'de'};
  const own = builtinGlosses[locale]?.[verb] || translatedGlossCache[locale]?.[verb];
  if (own) return {text:own,lang:locale==='kab' && !builtinGlosses.kab?.[verb] ? 'fr' : locale};
  return {text:fallback,lang:'en'};
}

// Public, optional translation fallback (free quotas / browser online needed).
// No user answers are ever sent. Only public German verb infinitives.
function fetchMeaning(verb, locale = interfaceLocale) {
  if (['en','de'].includes(locale) || storedMeaning(verb,locale).lang === locale || !navigator.onLine) return;
  const key = `${locale}:${verb}`;
  if (translationPending.has(key)) return;
  const job = new Promise(resolve => {
    translationLimits.queue.push(async () => {
      try {
        const params = new URLSearchParams({q:`to ${verb} (German infinitive)`,langpair:`en|${locale}`});
        // Use the English infinitive gloss rather than German, to avoid inflected translation.
        params.set('q', VERB_MEANINGS_EN[verb] || verb);
        let value='';
        try {
          const endpoint='https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl='+encodeURIComponent(locale==='kab'?'fr':locale)+'&dt=t&q='+encodeURIComponent(VERB_MEANINGS_EN[verb] || verb);
          const response=await fetch(endpoint);
          if(response.ok){const data=await response.json();value=(data?.[0]||[]).map(x=>x?.[0]||'').join('').trim();}
        }catch{}
        if(!value){
          const response=await fetch(`https://api.mymemory.translated.net/get?${params}`);
          const data=await response.json();
          if(response.ok && Number(data.responseStatus)===200)value=data?.responseData?.translatedText?.trim()||'';
        }
        if (value && !/MYMEMORY|INVALID LANGUAGE|QUOTA|QUERY LENGTH/i.test(value)) {
          (translatedGlossCache[locale] ||= {})[verb] = value;
          try { localStorage.setItem(meaningCacheKey,JSON.stringify(translatedGlossCache)); } catch {}
          refreshMeaningLabels();
        }
      } catch {} finally {translationPending.delete(key);resolve();}
    });
    processTranslationQueue();
  });
  translationPending.set(key,job);
}
function processTranslationQueue() {
  while(translationLimits.inFlight < 2 && translationLimits.queue.length) {
    const run = translationLimits.queue.shift();
    translationLimits.inFlight++;
    run().finally(() => {translationLimits.inFlight--;processTranslationQueue();});
  }
}
function localizedMeaning(verb) {
  const value = storedMeaning(verb);
  return value;
}
function addMeaningNode(verb,large=false) {
  const span = document.createElement(large?'p':'small');
  span.className = large ? 'verb-meaning':'verb-gloss';
  span.dataset.glossVerb = verb;
  fillMeaningNode(span);
  return span;
}
function fillMeaningNode(el) {
  const {text,lang} = localizedMeaning(el.dataset.glossVerb);
  el.replaceChildren(document.createTextNode(text));
  el.lang=lang;
  el.dir=['ar'].includes(lang)?'rtl':'auto';
  if (lang !== interfaceLocale && interfaceLocale !== 'en') {
    const tag=document.createElement('span');tag.className='meaning-tag';
    tag.textContent=`(${lang==='en'?'English':lang==='fr'?'Français':lang})`;
    el.append(tag);
  }
}
function refreshMeaningLabels() {
  document.querySelectorAll('[data-gloss-verb]').forEach(fillMeaningNode);
}
function annotateVerbLabels(root) {
  root.querySelectorAll('label.verb-item').forEach(label => {
    if (label.classList.contains('select-all-option') || label.querySelector('.verb-gloss')) return;
    const input=label.querySelector('input');
    if (!input) return;
    const raw = [...label.childNodes].filter(n=>n.nodeType===Node.TEXT_NODE).map(n=>n.nodeValue).join('').trim();
    if (!VERB_MEANINGS_EN[raw]) return;
    const holder=document.createElement('span');
    holder.style.minWidth='0';
    holder.style.flex='1';
    holder.style.display='block';
    for(const node of [...label.childNodes]) if(node.nodeType===Node.TEXT_NODE) holder.append(node);
    holder.append(addMeaningNode(raw));
    label.append(holder);
    fetchMeaning(raw);
  });
}
const renderVerbsOriginal = renderVerbs;
renderVerbs = function() {
  renderVerbsOriginal();
  annotateVerbLabels(document.getElementById('verbList'));
  translateVisibleMeanings();
};
const renderCustomSettingsOriginal = renderCustomListSettings;
renderCustomListSettings = function() {
  renderCustomSettingsOriginal();
  annotateVerbLabels(document.getElementById('customVerbChoices'));
  translateVisibleMeanings();
};

// Never let the browser silently pronounce German words with an English voice.
let germanVoices=[];
function refreshGermanVoices(){
  if(!('speechSynthesis' in window))return;
  germanVoices=speechSynthesis.getVoices().filter(v=>/^de(?:-|$)/i.test(v.lang));
}
if('speechSynthesis' in window){
  refreshGermanVoices();
  speechSynthesis.addEventListener?.('voiceschanged',refreshGermanVoices);
}
function speakVerb(verb){
  if(!('speechSynthesis' in window))return alert(appPhrase('noSpeech'));
  refreshGermanVoices();
  const voice=germanVoices.find(v=>/^de-DE$/i.test(v.lang)) || germanVoices[0];
  if(!voice){
    alert('No German text-to-speech voice is installed in this browser. Install a German (Deutsch) speech voice in your device settings, then reload this page.');
    return;
  }
  speechSynthesis.cancel();
  const utterance=new SpeechSynthesisUtterance(verb);
  utterance.lang=voice.lang;
  utterance.voice=voice;
  utterance.rate=.82;
  utterance.pitch=1;
  speechSynthesis.speak(utterance);
}

// Additional interface languages for the original site.
const extraKeys = [
 'YOUR GERMAN STUDY NOTEBOOK','German Verb Trainer','A little practice every day makes progress.','Language','GET STARTED','Choose your level',
 'YOUR VOCABULARY','Available verbs','Select the verbs you want to practise','＋ Create my own list','Enter your list name',
 'Create list','Cancel','Continue','← Back','← Back to lists','PERSONALISE','Configure your list',
 'Choose verbs from the available levels','Choose tenses','Choose pronouns','Start practice','PRACTICE SETTINGS',
 'Choose your tenses','Choose which German tenses you want to work on.','Start conjugating','YOUR SESSION',
 'Conjugation practice','SESSION SETTINGS','Edit verbs','Edit tenses','Edit pronouns','Check answers',
 'Reset answers','↻ Redo this verb','Next verb →','Next →','Finish practice','Select all','Open list','Delete list',
 'Your answer...','Not used in Imperativ','All verbs completed!','Save','Yes','OK','Message',
 'Please confirm','Enter information','Make your selection','Close list','0 verbs selected'
];
const newLanguageRows = {
 kab: `AḤRIC N ULMMUD N TALMANIT|Aselmad n yimyagen n talmanit|Aselmed yal ass ad ak-yawi ɣer zdat.|Tutlayt|BḌU|Fren aswir-ik|AMAWAL-IK|Imyagen i yellan|Fren imyagen i tebɣiḍ ad tɛerḍeḍ|＋ Rnu tabdart-inu|Sekcem isem n tebdart|Rnu tabdart|Sefsex|Kemmel|← Uɣal|← Uɣal ɣer tebdarin|SEGGEM|Seggem tabdart-ik|Fren imyagen seg yiswiren|Fren akuden|Fren imqimen|Bdu aɛraḍ|IƔEWWAṚEN N UƐRAḌ|Fren akuden-ik|Fren akuden n talmanit i tebɣiḍ ad tɛerḍeḍ.|Bdu tasleɣt|TAMẒLA-IK|Aɛraḍ n tesleɣt n yimyagen|IƔEWWAṚEN N TEMẒLA|Ẓreg imyagen|Ẓreg akuden|Ẓreg imqimen|Senqed tiririyin|Ales tiririyin|↻ Ales amyag-a|Amyag i d-iteddun →|Ɣer zdat →|Fak aɛraḍ|Fren akk|Ldi tabdart|Kkes tabdart|Tiririt-ik...|Ur yettuseqdac ara deg wanaḍ|Tfukkeḍ akk imyagen!|Sekles|Ih|Ih|Izen|Sentem|Sekcem talɣut|Fren|Mdel tabdart|0 imyagen yettwafren`,
 it: `IL TUO QUADERNO DI TEDESCO|Allenatore di verbi tedeschi|Un po' di pratica ogni giorno porta progressi.|Lingua|INIZIA|Scegli il tuo livello|IL TUO VOCABOLARIO|Verbi disponibili|Seleziona i verbi da esercitare|＋ Crea la tua lista|Nome della lista|Crea lista|Annulla|Continua|← Indietro|← Torna alle liste|PERSONALIZZA|Configura la tua lista|Scegli i verbi dai livelli disponibili|Scegli i tempi|Scegli i pronomi|Inizia la pratica|IMPOSTAZIONI|Scegli i tuoi tempi|Scegli i tempi tedeschi da esercitare.|Inizia a coniugare|LA TUA SESSIONE|Esercizi di coniugazione|IMPOSTAZIONI SESSIONE|Modifica verbi|Modifica tempi|Modifica pronomi|Controlla le risposte|Reimposta risposte|↻ Ripeti|Verbo successivo →|Avanti →|Termina|Seleziona tutto|Apri lista|Elimina lista|La tua risposta...|Non usato nell'imperativo|Tutti i verbi completati!|Salva|Sì|OK|Messaggio|Conferma|Inserisci le informazioni|Scegli|Chiudi lista|0 verbi selezionati`,
 pt: `SEU CADERNO DE ALEMÃO|Treinador de Verbos Alemães|Um pouco de prática diária traz progresso.|Idioma|COMEÇAR|Escolha seu nível|SEU VOCABULÁRIO|Verbos disponíveis|Selecione os verbos para praticar|＋ Criar minha lista|Nome da lista|Criar lista|Cancelar|Continuar|← Voltar|← Voltar às listas|PERSONALIZAR|Configurar sua lista|Escolher verbos dos níveis disponíveis|Escolher tempos|Escolher pronomes|Iniciar prática|CONFIGURAÇÕES|Escolha seus tempos|Escolha os tempos alemães para praticar.|Começar a conjugar|SUA SESSÃO|Prática de conjugação|CONFIGURAÇÕES DA SESSÃO|Editar verbos|Editar tempos|Editar pronomes|Verificar respostas|Limpar respostas|↻ Refazer|Próximo verbo →|Próximo →|Concluir|Selecionar tudo|Abrir lista|Excluir lista|Sua resposta...|Não usado no imperativo|Todos os verbos concluídos!|Salvar|Sim|OK|Mensagem|Confirme|Insira as informações|Escolha|Fechar lista|0 verbos selecionados`,
 tr: `ALMANCA ÇALIŞMA DEFTERİN|Almanca Fiil Eğitmeni|Her gün biraz pratik ilerleme sağlar.|Dil|BAŞLA|Seviyeni seç|KELİME HAZİNEN|Mevcut fiiller|Çalışmak istediğin fiilleri seç|＋ Kendi listemi oluştur|Liste adı|Liste oluştur|İptal|Devam et|← Geri|← Listelere dön|ÖZELLEŞTİR|Listeni düzenle|Seviyelerden fiil seç|Zamanları seç|Zamirleri seç|Alıştırmaya başla|ALIŞTIRMA AYARLARI|Zamanlarını seç|Çalışmak istediğin Almanca zamanları seç.|Çekim yapmaya başla|OTURUMUN|Fiil çekimi alıştırması|OTURUM AYARLARI|Fiilleri düzenle|Zamanları düzenle|Zamirleri düzenle|Cevapları kontrol et|Cevapları sıfırla|↻ Tekrar et|Sonraki fiil →|Sonraki →|Bitir|Tümünü seç|Listeyi aç|Listeyi sil|Cevabın...|Emir kipinde kullanılmaz|Tüm fiiller tamamlandı!|Kaydet|Evet|OK|Mesaj|Onayla|Bilgi gir|Seç|Listeyi kapat|0 fiil seçildi`,
 nl: `JE DUITSE STUDIESCHRIFT|Duitse Werkwoordtrainer|Elke dag een beetje oefenen helpt.|Taal|BEGINNEN|Kies je niveau|JE WOORDENSCHAT|Beschikbare werkwoorden|Kies de werkwoorden om te oefenen|＋ Eigen lijst maken|Naam van de lijst|Lijst maken|Annuleren|Doorgaan|← Terug|← Terug naar lijsten|AANPASSEN|Je lijst instellen|Kies werkwoorden uit de niveaus|Kies tijden|Kies voornaamwoorden|Begin met oefenen|OEFENINSTELLINGEN|Kies je tijden|Kies de Duitse tijden om te oefenen.|Begin met vervoegen|JE SESSIE|Vervoegingsoefening|SESSIE-INSTELLINGEN|Werkwoorden bewerken|Tijden bewerken|Voornaamwoorden bewerken|Antwoorden controleren|Antwoorden wissen|↻ Opnieuw|Volgend werkwoord →|Volgende →|Afronden|Alles selecteren|Lijst openen|Lijst verwijderen|Je antwoord...|Niet gebruikt in de gebiedende wijs|Alle werkwoorden voltooid!|Opslaan|Ja|OK|Bericht|Bevestig|Vul informatie in|Kies|Lijst sluiten|0 werkwoorden geselecteerd`,
 ru: `ТВОЯ ТЕТРАДЬ ПО НЕМЕЦКОМУ|Тренажёр немецких глаголов|Немного практики каждый день помогает прогрессу.|Язык|НАЧАТЬ|Выберите уровень|ВАШ СЛОВАРЬ|Доступные глаголы|Выберите глаголы для практики|＋ Создать свой список|Название списка|Создать список|Отмена|Продолжить|← Назад|← К спискам|НАСТРОИТЬ|Настроить список|Выберите глаголы из уровней|Выберите времена|Выберите местоимения|Начать тренировку|НАСТРОЙКИ|Выберите времена|Выберите немецкие времена для практики.|Начать спряжение|ВАША СЕССИЯ|Тренировка спряжения|НАСТРОЙКИ СЕССИИ|Изменить глаголы|Изменить времена|Изменить местоимения|Проверить ответы|Сбросить ответы|↻ Повторить|Следующий глагол →|Далее →|Завершить|Выбрать всё|Открыть список|Удалить список|Ваш ответ...|Не используется в повелительном наклонении|Все глаголы пройдены!|Сохранить|Да|OK|Сообщение|Подтвердить|Введите данные|Выберите|Закрыть список|0 глаголов выбрано`
};
Object.entries(newLanguageRows).forEach(([locale,row]) => {
  const values=row.split('|');
  if (values.length !== extraKeys.length) console.warn('UI translation length mismatch',locale,values.length,extraKeys.length);
  extraKeys.forEach((source,i)=>{
    (UI_LANGUAGES[source] ||= {})[locale]=values[i] || source;
  });
});

const appPhrases = {
 en:['German letters','More letters ⌄','Fewer letters ⌃','Write by hand','Write your answer','Clear writing','Recognize writing','Or use your tablet’s handwriting keyboard here','Use this answer','Close','Handwriting recognition is unavailable here. You can still draw, then use your tablet handwriting keyboard in the text box.','No handwriting to recognize yet.','Handwriting recognition is not available for German in this browser. Type with your tablet’s handwriting keyboard instead.','Speech playback is unavailable in this browser.','Wonderful! You are building your German every day.','Beautiful effort! Keep writing.','Good practice! Progress takes repetition.','— your study buddy ✦'],
 ar:['حروف ألمانية','حروف إضافية ⌄','حروف أقل ⌃','اكتب بخط اليد','اكتب إجابتك','مسح الكتابة','التعرف على الكتابة','أو استخدم لوحة الكتابة اليدوية في جهازك هنا','استخدام الإجابة','إغلاق','التعرف على الخط غير متاح هنا. يمكنك الرسم ثم إدخال النص بلوحة جهازك.','اكتب شيئاً أولاً.','التعرف على الكتابة الألمانية غير متاح في هذا المتصفح.','الصوت غير متاح في هذا المتصفح.','رائع! أنت تتقدم في الألمانية كل يوم.','مجهود جميل! استمر في الكتابة.','تدريب جيد! التكرار يصنع التقدم.','— رفيق دراستك ✦'],
 kab:['Isekkilen n talmanit','Ugar n yisekkilen ⌄','Drus n yisekkilen ⌃','Aru s ufus','Aru tiririt-ik','Sfeḍ tira','Ssen tira','Neɣ seqdec tanarit n tira n tfelwit-ik','Seqdec tiririt-a','Mdel','Asenqed n tira ur yelli ara dagi. Tzemreḍ ad taruḍ s ufus, sakin ad tesqedceḍ tanarit n tfelwit.','Aru kra n tira uqbel.','Asenqed n tira n talmanit ur yelli ara deg yiminig-a.','Imesli ur yelli ara deg yiminig-a.','Ayuz! Tettnerniḍ deg talmanit yal ass.','Aɛraḍ yelhan! Kemmel.','Aɛraḍ yelhan! Ales i ulmmud.','— ameddakel-ik n ulmmud ✦'],
 fr:['Lettres allemandes','Plus de lettres ⌄','Moins de lettres ⌃','Écrire à la main','Écrivez votre réponse','Effacer','Reconnaître l’écriture','Ou utilisez le clavier manuscrit de votre tablette ici','Utiliser cette réponse','Fermer','La reconnaissance manuscrite est indisponible ici. Vous pouvez dessiner puis saisir avec votre clavier manuscrit.','Écrivez quelque chose avant.','La reconnaissance de l’allemand n’est pas disponible ici.','La lecture audio n’est pas disponible.','Magnifique ! Vous progressez chaque jour.','Bel effort ! Continuez à écrire.','Bon entraînement ! La répétition fait progresser.','— votre partenaire d’étude ✦'],
 de:['Deutsche Buchstaben','Mehr Buchstaben ⌄','Weniger Buchstaben ⌃','Mit Hand schreiben','Schreibe deine Antwort','Schrift löschen','Handschrift erkennen','Oder nutze die Handschrifttastatur deines Tablets','Antwort übernehmen','Schließen','Handschrifterkennung ist hier nicht verfügbar. Du kannst zeichnen und die Tablet-Tastatur benutzen.','Schreibe zuerst etwas.','Deutsche Handschrifterkennung ist in diesem Browser nicht verfügbar.','Sprachausgabe ist nicht verfügbar.','Wunderbar! Jeden Tag wirst du besser.','Tolle Arbeit! Schreib weiter.','Gut geübt! Wiederholung bringt Fortschritt.','— dein Lernbegleiter ✦'],
 es:['Letras alemanas','Más letras ⌄','Menos letras ⌃','Escribir a mano','Escribe tu respuesta','Borrar','Reconocer escritura','O usa el teclado de escritura de tu tableta','Usar esta respuesta','Cerrar','El reconocimiento de escritura no está disponible aquí. Puedes dibujar y usar tu teclado manuscrito.','Escribe algo primero.','No hay reconocimiento de alemán en este navegador.','El audio no está disponible.','¡Maravilloso! Mejoras cada día.','¡Buen esfuerzo! Sigue escribiendo.','¡Buena práctica! Repetir ayuda.','— tu compañero de estudio ✦'],
 it:['Lettere tedesche','Altre lettere ⌄','Meno lettere ⌃','Scrivi a mano','Scrivi la risposta','Cancella','Riconosci la scrittura','Oppure usa la tastiera a mano del tablet','Usa questa risposta','Chiudi','Riconoscimento non disponibile qui. Puoi disegnare e usare la tastiera del tablet.','Scrivi prima qualcosa.','Il riconoscimento del tedesco non è disponibile.','Audio non disponibile.','Meraviglioso! Migliori ogni giorno.','Bel lavoro! Continua a scrivere.','Ottima pratica! La ripetizione aiuta.','— il tuo compagno di studio ✦'],
 pt:['Letras alemãs','Mais letras ⌄','Menos letras ⌃','Escrever à mão','Escreva sua resposta','Apagar','Reconhecer escrita','Ou use o teclado de escrita à mão do tablet','Usar esta resposta','Fechar','O reconhecimento não está disponível. Você pode desenhar e usar o teclado do tablet.','Escreva algo primeiro.','O reconhecimento de alemão não está disponível neste navegador.','Áudio indisponível.','Maravilha! Você melhora a cada dia.','Bom esforço! Continue escrevendo.','Boa prática! Repetir ajuda.','— seu parceiro de estudos ✦'],
 tr:['Almanca harfler','Daha fazla harf ⌄','Daha az harf ⌃','Elle yaz','Cevabını yaz','Temizle','Yazıyı tanı','Veya tabletin el yazısı klavyesini kullan','Bu cevabı kullan','Kapat','El yazısı tanıma burada kullanılamıyor. Çizip tablet klavyesinden yazabilirsin.','Önce bir şey yaz.','Bu tarayıcı Almanca el yazısı tanımıyor.','Ses oynatma kullanılamıyor.','Harika! Her gün gelişiyorsun.','Güzel çaba! Yazmaya devam et.','İyi çalışma! Tekrar ilerletir.','— çalışma arkadaşın ✦'],
 nl:['Duitse letters','Meer letters ⌄','Minder letters ⌃','Met de hand schrijven','Schrijf je antwoord','Wissen','Handschrift herkennen','Of gebruik het handschrifttoetsenbord van je tablet','Gebruik dit antwoord','Sluiten','Handschriftherkenning is niet beschikbaar. Je kunt tekenen en je tablettoetsenbord gebruiken.','Schrijf eerst iets.','Duitse handschriftherkenning is hier niet beschikbaar.','Spraak is niet beschikbaar.','Geweldig! Elke dag word je beter.','Mooi gedaan! Blijf schrijven.','Goed geoefend! Herhaling helpt.','— je studiemaatje ✦'],
 ru:['Немецкие буквы','Больше букв ⌄','Меньше букв ⌃','Писать от руки','Напишите ответ','Очистить','Распознать почерк','Или используйте рукописную клавиатуру планшета','Использовать ответ','Закрыть','Распознавание здесь недоступно. Можно рисовать и вводить текст с клавиатуры планшета.','Сначала напишите что-нибудь.','Распознавание немецкого почерка недоступно в браузере.','Озвучивание недоступно.','Прекрасно! Каждый день вы становитесь лучше.','Отличная работа! Продолжайте писать.','Хорошая практика! Повторение помогает.','— ваш помощник в учёбе ✦']
};
const appPhraseKeys=['keyboard','expand','collapse','handwrite','handwriteTitle','clear','recognize','tabletInput','apply','close','unsupported','empty','unsupportedGerman','noSpeech','great','good','keepGoing','signature'];
function appPhrase(key){
 const i=appPhraseKeys.indexOf(key);
 return appPhrases[interfaceLocale]?.[i] || appPhrases.en[i] || key;
}

// Improve the existing conjugation engine for regular Präteritum forms.
const conjugateOriginal = conjugate;
conjugate = function(verb,tense,person) {
  if(tense==='Präteritum' && !irregular[verb]) {
    const base=verb.replace(/en$|n$/,'');
    const stem=base+(/[td]$/.test(base)?'ete':'te');
    return stem+['','st','','n','t','n'][person===6?5:person];
  }
  return conjugateOriginal(verb,tense,person);
};

let lastAnswerInput=null;
const renderCurrentVerbOriginal=renderCurrentVerb;
renderCurrentVerb=function(){
  renderCurrentVerbOriginal();
  document.getElementById('handwrittenMotivation').classList.add('hidden');
  document.getElementById('handwrittenMotivation').textContent='';
  lastAnswerInput=null;
  if(currentVerbIndex>=practiceVerbs.length)return;
  const verb=practiceVerbs[currentVerbIndex];
  const container=document.getElementById('exercise');
  const title=container.querySelector('.practice-verb-title');
  if(title){
    const header=document.createElement('div');header.className='practice-verb-heading';
    title.before(header);header.append(title);
    const say=document.createElement('button');
    say.type='button';say.className='verb-pronounce';say.textContent='🔊  Deutsch';
    say.title='Listen to the verb in German';
    say.onclick=()=>speakVerb(verb);header.append(say);
    header.after(addMeaningNode(verb,true));
  }
  container.querySelectorAll('.exercise-row').forEach(row=>{
    const input=row.querySelector('input');if(!input || input.disabled)return;
    row.classList.add('with-compact-feedback');
    const field=document.createElement('div');field.className='answer-field';
    input.before(field);field.append(input);
    input.addEventListener('focus',()=>{lastAnswerInput=input;});
    if(!lastAnswerInput)lastAnswerInput=input;
  });
  updateKeyboardLanguage();
  fetchMeaning(verb);
};

// Append the signature only when all answers have been submitted.
const checkCurrentVerbOriginal=checkCurrentVerb;
checkCurrentVerb=function(){
  checkCurrentVerbOriginal();
  if(document.getElementById('verbNavigation').classList.contains('hidden'))return;
  showMotivation();
};
function showMotivation(){
  const element=document.getElementById('handwrittenMotivation');
  const correct=currentExercises.filter(x=>{
    return x.input.value.trim().toLocaleLowerCase('de')===conjugate(x.verb,x.tense,x.index).toLocaleLowerCase('de');
  }).length;
  const ratio=currentExercises.length ? correct/currentExercises.length : 0;
  const message=appPhrase(ratio>=.83?'great':ratio>=.4?'good':'keepGoing');
  element.replaceChildren(document.createTextNode(message));
  const sig=document.createElement('span');sig.className='signature';sig.textContent=appPhrase('signature');
  element.append(sig);element.classList.remove('hidden');
}
// Existing Enter handler calls checkCurrentVerb() dynamically; clicking Check calls an older
// handler reference, so explicitly reattach it to the wrapper.
document.getElementById('checkAll').onclick=checkCurrentVerb;

const basicKeys=['ä','ö','ü','ß'];
const extraKeysGerman=['Ä','Ö','Ü','ẞ','à','é','è','ê','-',' '];
let keyboardExpanded=false;
function drawKeyboard(){
  const keys=document.getElementById('keyboardKeys');keys.innerHTML='';
  [...basicKeys,...(keyboardExpanded?extraKeysGerman:[])].forEach(letter=>{
    const button=document.createElement('button');button.type='button';button.className='letter-key';
    button.textContent=letter===' '?'␣':letter;
    button.title=letter===' '?'Space':letter;
    button.addEventListener('pointerdown',e=>e.preventDefault());
    button.onclick=()=>insertIntoAnswer(letter);
    keys.append(button);
  });
  const toggle=document.getElementById('expandKeyboard');
  toggle.textContent=appPhrase(keyboardExpanded?'collapse':'expand');
  toggle.setAttribute('aria-expanded',String(keyboardExpanded));
}
function insertIntoAnswer(char) {
  const input=lastAnswerInput && !lastAnswerInput.disabled ? lastAnswerInput : currentExercises.find(e=>!e.input.disabled)?.input;
  if(!input)return;
  input.focus();
  const start=input.selectionStart??input.value.length;
  const end=input.selectionEnd??input.value.length;
  input.setRangeText(char,start,end,'end');
  input.dispatchEvent(new Event('input',{bubbles:true}));
}
document.getElementById('expandKeyboard').onclick=()=>{keyboardExpanded=!keyboardExpanded;drawKeyboard();};
function updateKeyboardLanguage(){
 document.getElementById('keyboardTitle').textContent=appPhrase('keyboard');drawKeyboard();
}

// Switch languages without erasing answers mid-exercise.
const setLanguageOriginal=setInterfaceLanguage;
setInterfaceLanguage=function(locale){
 setLanguageOriginal(locale);
 refreshMeaningLabels();
 translateVisibleMeanings();
 updateKeyboardLanguage();
 const motivation=document.getElementById('handwrittenMotivation');
 if(!motivation.classList.contains('hidden'))showMotivation();
 const verb=practiceVerbs[currentVerbIndex];if(verb)fetchMeaning(verb);
};

// Support the existing selected locale from localStorage.
renderVerbs();renderCustomLists();updateKeyboardLanguage();

// Localize generated progress and score messages in the additional languages.
const extraPatternTranslations = {
 kab: ['$1 imyagen yettwafren','$1 imyagen','Seggem: $1','Kkes "$1"?','Fren akk $1','Aɛraḍ $1 seg $2 | Amyag $3 seg $4 | Akud $5 seg $6','Agmuḍ: $1 / $2 iseḥḥan','Mdel tabdart','Ldi tabdart'],
 it: ['$1 verbi selezionati','$1 verbi','Configura: $1','Eliminare "$1"?','Seleziona tutti $1','Esercizio $1 di $2 | Verbo $3 di $4 | Tempo $5 di $6','Risultato: $1 / $2 corrette','Chiudi lista','Apri lista'],
 pt: ['$1 verbos selecionados','$1 verbos','Configurar: $1','Excluir "$1"?','Selecionar todos $1','Exercício $1 de $2 | Verbo $3 de $4 | Tempo $5 de $6','Resultado: $1 / $2 corretas','Fechar lista','Abrir lista'],
 tr: ['$1 fiil seçildi','$1 fiil','Düzenle: $1','"$1" silinsin mi?','Tüm $1 fiillerini seç','Alıştırma $1 / $2 | Fiil $3 / $4 | Zaman $5 / $6','Sonuç: $1 / $2 doğru','Listeyi kapat','Listeyi aç'],
 nl: ['$1 werkwoorden geselecteerd','$1 werkwoorden','Instellen: $1','"$1" verwijderen?','Alle $1 selecteren','Oefening $1 van $2 | Werkwoord $3 van $4 | Tijd $5 van $6','Resultaat: $1 / $2 goed','Lijst sluiten','Lijst openen'],
 ru: ['$1 глаголов выбрано','$1 глаголов','Настроить: $1','Удалить "$1"?','Выбрать все $1','Упражнение $1 из $2 | Глагол $3 из $4 | Время $5 из $6','Результат: $1 / $2 правильно','Закрыть список','Открыть список']
};
Object.entries(extraPatternTranslations).forEach(([locale, texts]) => {
 texts.forEach((message,index) => { UI_PATTERNS[index][1][locale] = message; });
});
// Reapply after the extra dictionaries have been registered.
setInterfaceLanguage(localStorage.getItem('germanTrainerInterfaceLanguage') || 'en');

// Miscellaneous alerts / labels for the additional six interface languages.
const extraMiscStrings = {
 'Choose at least one verb.': ['Fren ma drus yiwen n umyag.','Scegli almeno un verbo.','Escolha pelo menos um verbo.','En az bir fiil seç.','Kies minstens één werkwoord.','Выберите хотя бы один глагол.'],
 'Choose at least one tense.': ['Fren ma drus yiwen n wakud.','Scegli almeno un tempo.','Escolha pelo menos um tempo.','En az bir zaman seç.','Kies minstens één tijd.','Выберите хотя бы одно время.'],
 'Choose at least one pronoun.': ['Fren ma drus yiwen n umqim.','Scegli almeno un pronome.','Escolha pelo menos um pronome.','En az bir zamir seç.','Kies minstens één voornaamwoord.','Выберите хотя бы одно местоимение.'],
 'Enter a list name.': ['Sekcem isem n tebdart.','Inserisci un nome.','Digite um nome.','Liste adı gir.','Voer een naam in.','Введите название списка.'],
 'This list already exists.': ['Tabdart-a tella yakan.','Questa lista esiste già.','Esta lista já existe.','Bu liste zaten var.','Deze lijst bestaat al.','Этот список уже существует.'],
 'GERMAN VERB TRAINER': ['ASELMAD N YIMYAGEN N TALMANIT','ALLENATORE DI VERBI TEDESCHI','TREINADOR DE VERBOS ALEMÃES','ALMANCA FİİL EĞİTMENİ','DUITSE WERKWOORDTRAINER','ТРЕНАЖЁР НЕМЕЦКИХ ГЛАГОЛОВ'],
 'Learn at your own pace': ['Lmed s ṛṛay-ik','Impara al tuo ritmo','Aprenda no seu ritmo','Kendi hızında öğren','Leer in je eigen tempo','Учитесь в своём темпе'],
 'Click to select or deselect the verbs you want:': ['Fren imyagen i tebɣiḍ:','Seleziona o deseleziona i verbi:','Selecione ou desmarque os verbos:','Fiilleri seç veya kaldır:','Selecteer de gewenste werkwoorden:','Выберите нужные глаголы:'],
 'Click to select or deselect the tenses you want:': ['Fren akuden i tebɣiḍ:','Seleziona i tempi:','Selecione os tempos:','Zamanları seç veya kaldır:','Selecteer de tijden:','Выберите времена:'],
 'Click to select or deselect the pronouns you want:': ['Fren imqimen i tebɣiḍ:','Seleziona i pronomi:','Selecione os pronomes:','Zamirleri seç veya kaldır:','Selecteer de voornaamwoorden:','Выберите местоимения:']
};
for(const [source,values] of Object.entries(extraMiscStrings)) {
 ['kab','it','pt','tr','nl','ru'].forEach((locale,i)=>{
   (UI_LANGUAGES[source] ||= {})[locale]=values[i];
 });
}
// Update the visible language after the full dictionary has been loaded.
setInterfaceLanguage(interfaceLocale);

function focusPracticeAnswers(){
  const first=currentExercises.find(x=>!x.input.disabled)?.input;
  if(!first)return;
  first.scrollIntoView({behavior:'instant',block:'center'});
  try{first.focus({preventScroll:true});}catch{first.focus();}
}


// Translate every visible meaning, including B1–C2, in batches.
// Google endpoint may be blocked in some environments; per-word fallback remains available.
const batchGlossPending = new Set();
async function translateVisibleMeanings(){
 const locale=interfaceLocale;
 if(['en','de'].includes(locale))return;
 const missing=[...new Set([...document.querySelectorAll('[data-gloss-verb]')].map(el=>el.dataset.glossVerb))]
  .filter(v=>storedMeaning(v,locale).lang!==locale && !batchGlossPending.has(locale+':'+v));
 if(!missing.length)return;
 const target=locale==='kab'?'fr':locale;
 for(let offset=0;offset<missing.length;offset+=12){
  const chunk=missing.slice(offset,offset+12);
  chunk.forEach(v=>batchGlossPending.add(locale+':'+v));
  try{
   const separator='\n';
   const q=chunk.map(v=>VERB_MEANINGS_EN[v]||v).join(separator);
   const endpoint='https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl='+encodeURIComponent(target)+'&dt=t&q='+encodeURIComponent(q);
   const response=await fetch(endpoint);
   if(!response.ok)throw new Error('Translation unavailable');
   const data=await response.json();
   const translated=(data[0]||[]).map(part=>part[0]||'').join('').trim().split(/\n/);
   if(translated.length!==chunk.length)throw new Error('Translation alignment mismatch');
   chunk.forEach((v,i)=>{if(translated[i]?.trim())(translatedGlossCache[locale]||={})[v]=translated[i].trim();});
   try{localStorage.setItem(meaningCacheKey,JSON.stringify(translatedGlossCache));}catch{}
   if(interfaceLocale===locale)refreshMeaningLabels();
  }catch(e){chunk.forEach(v=>fetchMeaning(v,locale));}
  finally{chunk.forEach(v=>batchGlossPending.delete(locale+':'+v));}
 }
}


// Separable-prefix conjugation. Apply to a curated list, never guess from
// arbitrary initial letters (e.g. unternehmen is NOT unter + nehmen).
const SEPARABLE_VERBS = {
  anrufen:['an','rufen'],aufstehen:['auf','stehen'],anfangen:['an','fangen'],ankommen:['an','kommen'],
  aussehen:['aus','sehen'],einladen:['ein','laden'],vorbereiten:['vor','bereiten'],vorschlagen:['vor','schlagen'],
  teilnehmen:['teil','nehmen'],ablehnen:['ab','lehnen'],anbieten:['an','bieten'],annehmen:['an','nehmen'],
  beitragen:['bei','tragen'],darstellen:['dar','stellen'],durchführen:['durch','führen'],einsetzen:['ein','setzen'],
  feststellen:['fest','stellen'],herstellen:['her','stellen'],hinweisen:['hin','weisen'],
  voraussetzen:['voraus','setzen'],wahrnehmen:['wahr','nehmen'],zusammenfassen:['zusammen','fassen'],
  zunehmen:['zu','nehmen'],abnehmen:['ab','nehmen'],abwickeln:['ab','wickeln'],
  aufrechterhalten:['aufrecht','erhalten'],auslösen:['aus','lösen'],einräumen:['ein','räumen'],
  einschränken:['ein','schränken'],entfallen:null,hervorheben:['hervor','heben'],
  nachvollziehen:['nach','vollziehen'],sicherstellen:['sicher','stellen'],
  veranlassen:null,veranschaulichen:null,verschaffen:null,vorausgehen:['voraus','gehen'],
  zurückgreifen:['zurück','greifen'],zustimmen:['zu','stimmen'],
  einhergehen:['einher','gehen'],entgegenwirken:['entgegen','wirken'],
  erschließen:null,hervorgehen:['hervor','gehen'],innewohnen:['inne','wohnen'],
  preisgeben:['preis','geben'],zuwiderlaufen:['zuwider','laufen'],
  'zugrunde liegen':['zugrunde','liegen'],
  'abwegig erscheinen':null,'sich erschöpfen':null,'sich zutragen':null
};
const COMPOUND_IRREGULAR = {
 rufen:['rief','gerufen'],stehen:['stand','gestanden'],fangen:['fing','gefangen'],
 laden:['lud','geladen'],schlagen:['schlug','geschlagen'],bieten:['bot','geboten'],
 tragen:['trug','getragen'],weisen:['wies','gewiesen'],halten:['hielt','gehalten'],
 liegen:['lag','gelegen'],ziehen:['zog','gezogen'],heben:['hob','gehoben'],
 greifen:['griff','gegriffen'],treten:['trat','getreten'],wirken:['wirkte','gewirkt']
};
const COMPOUND_PRESENT = {
 stehen:['stehe','stehst','steht','stehen','steht','stehen'],
 fangen:['fange','fängst','fängt','fangen','fangt','fangen'],
 laden:['lade','lädst','lädt','laden','ladet','laden'],
 schlagen:['schlage','schlägst','schlägt','schlagen','schlagt','schlagen'],
 bieten:['biete','bietest','bietet','bieten','bietet','bieten'],
 tragen:['trage','trägst','trägt','tragen','tragt','tragen'],
 weisen:['weise','weist','weist','weisen','weist','weisen'],
 halten:['halte','hältst','hält','halten','haltet','halten'],
 liegen:['liege','liegst','liegt','liegen','liegt','liegen'],
 ziehen:['ziehe','ziehst','zieht','ziehen','zieht','ziehen'],
 heben:['hebe','hebst','hebt','heben','hebt','heben'],
 greifen:['greife','greifst','greift','greifen','greift','greifen']
};
const previousConjugate=conjugate;
function regularCoreForms(core){
 const stem=core.replace(/en$|n$/,'');
 const insertE=/[td]$/.test(stem)||/[^aeiouäöü]m$|[^aeiouäöü]n$/.test(stem);
 const endings=['e','st','t','en','t','en'];
 const present=endings.map((e,i)=>stem+(insertE&&[1,2,4].includes(i)?(i===1?'est':'et'):(i===1&&/[sßzx]$/.test(stem)?'t':e)));
 const pastStem=stem+(/[td]$/.test(stem)?'ete':'te');
 const past=pastStem+'';
 const pastForms=['','st','','n','t','n'].map(x=>past+x);
 const part=core.endsWith('ieren')||/^(be|ver|ent|er|zer|miss|emp)/.test(core)?stem+'t':'ge'+stem+'t';
 return {present,past:pastForms,part,aux:'haben'};
}
function coreForms(core){
 const f=regularCoreForms(core), irr=irregular[core];
 if(irr){if(irr.present)f.present=irr.present;if(irr.past)f.past=irr.past;if(irr.part)f.part=irr.part;if(irr.aux)f.aux=irr.aux;}
 if(COMPOUND_PRESENT[core])f.present=COMPOUND_PRESENT[core];
 if(COMPOUND_IRREGULAR[core]){
  const [past,part]=COMPOUND_IRREGULAR[core];f.part=part;
  if(!irr?.past){const stem=past;f.past=[stem,stem+'st',stem,stem+'en',stem+'t',stem+'en'];}
 }
 return f;
}
const SEPARABLE_SEIN = new Set(['aufstehen','ankommen','vorausgehen','hervorgehen','einhergehen','zuwiderlaufen']);
conjugate=function(verb,tense,person){
 const split=Object.prototype.hasOwnProperty.call(SEPARABLE_VERBS,verb)?SEPARABLE_VERBS[verb]:undefined;
 if(!split)return previousConjugate(verb,tense,person);
 const [prefix,core]=split;const i=person===6?5:person;const f=coreForms(core);
 const infinitive=prefix+' '+core;const participle=prefix+(f.part.startsWith('ge')?f.part:'ge'+f.part);
 const aux=SEPARABLE_SEIN.has(verb)?'sein':f.aux;
 if(tense==='Präsens')return f.present[i]+' '+prefix;
 if(tense==='Präteritum')return f.past[i]+' '+prefix;
 if(tense==='Perfekt')return auxiliaries[aux][i]+' '+participle;
 if(tense==='Plusquamperfekt')return (aux==='sein'?['war','warst','war','waren','wart','waren']:['hatte','hattest','hatte','hatten','hattet','hatten'])[i]+' '+participle;
 if(tense==='Futur I')return ['werde','wirst','wird','werden','werdet','werden'][i]+' '+verb;
 if(tense==='Futur II')return ['werde','wirst','wird','werden','werdet','werden'][i]+' '+participle+' '+aux;
 if(tense==='Konjunktiv I')return core.replace(/en$|n$/,'')+['e','est','e','en','et','en'][i]+' '+prefix;
 if(tense==='Konjunktiv II')return ['würde','würdest','würde','würden','würdet','würden'][i]+' '+verb;
 if(tense==='Imperativ'){
  if([0,2,5].includes(person))return '—';
  if(person===1){const irregularDu={fangen:'fang',nehmen:'nimm',geben:'gib',sehen:'sieh',halten:'halt',tragen:'trag',laufen:'lauf',lesen:'lies'};return (irregularDu[core]||core.replace(/en$|n$/,''))+' '+prefix;}
  if(person===3)return core+' wir '+prefix;
  if(person===4)return f.present[4]+' '+prefix;
  if(person===6)return core+' Sie '+prefix;
 }
 return previousConjugate(verb,tense,person);
};


// Consolidated conjugation engine. This replaces the earlier overlapping wrappers.
const STRONG_FORMS = {
  anfangen:['fange','fängst','fängt','fangen','fangt','fangen','fing','gefangen'],
  rufen:['rufe','rufst','ruft','rufen','ruft','rufen','rief','gerufen'],
  stehen:['stehe','stehst','steht','stehen','steht','stehen','stand','gestanden'],
  fangen:['fange','fängst','fängt','fangen','fangt','fangen','fing','gefangen'],
  kommen:['komme','kommst','kommt','kommen','kommt','kommen','kam','gekommen'],
  laden:['lade','lädst','lädt','laden','ladet','laden','lud','geladen'],
  schlagen:['schlage','schlägst','schlägt','schlagen','schlagt','schlagen','schlug','geschlagen'],
  bieten:['biete','bietest','bietet','bieten','bietet','bieten','bot','geboten'],
  tragen:['trage','trägst','trägt','tragen','tragt','tragen','trug','getragen'],
  weisen:['weise','weist','weist','weisen','weist','weisen','wies','gewiesen'],
  halten:['halte','hältst','hält','halten','haltet','halten','hielt','gehalten'],
  liegen:['liege','liegst','liegt','liegen','liegt','liegen','lag','gelegen'],
  ziehen:['ziehe','ziehst','zieht','ziehen','zieht','ziehen','zog','gezogen'],
  heben:['hebe','hebst','hebt','heben','hebt','heben','hob','gehoben'],
  greifen:['greife','greifst','greift','greifen','greift','greifen','griff','gegriffen'],
  nehmen:['nehme','nimmst','nimmt','nehmen','nehmt','nehmen','nahm','genommen'],
  geben:['gebe','gibst','gibt','geben','gebt','geben','gab','gegeben'],
  sehen:['sehe','siehst','sieht','sehen','seht','sehen','sah','gesehen'],
  gehen:['gehe','gehst','geht','gehen','geht','gehen','ging','gegangen'],
  laufen:['laufe','läufst','läuft','laufen','lauft','laufen','lief','gelaufen'],
  fallen:['falle','fällst','fällt','fallen','fallt','fallen','fiel','gefallen'],
  nehmen:['nehme','nimmst','nimmt','nehmen','nehmt','nehmen','nahm','genommen'],
  treffen:['treffe','triffst','trifft','treffen','trefft','treffen','traf','getroffen'],
  gewinnen:['gewinne','gewinnst','gewinnt','gewinnen','gewinnt','gewinnen','gewann','gewonnen'],
  schließen:['schließe','schließt','schließt','schließen','schließt','schließen','schloss','geschlossen'],
  fliegen:['fliege','fliegst','fliegt','fliegen','fliegt','fliegen','flog','geflogen'],
  steigen:['steige','steigst','steigt','steigen','steigt','steigen','stieg','gestiegen'],
  wachsen:['wachse','wächst','wächst','wachsen','wachst','wachsen','wuchs','gewachsen'],
  setzen:null
};
const EXTRA_IRREGULAR = {
 kennen:['kannte','gekannt'],waschen:['wusch','gewaschen'],
 ziehen:['zog','gezogen'],gefallen:['gefiel','gefallen'],
 gewinnen:['gewann','gewonnen'],genießen:['genoss','genossen'],
 geschehen:['geschah','geschehen'],gelingen:['gelang','gelungen'],
 entscheiden:['entschied','entschieden'],entstehen:['entstand','entstanden'],
 erkennen:['erkannte','erkannt'],vergleichen:['verglich','verglichen'],
 verlassen:['verließ','verlassen'],verhalten:['verhielt','verhalten'],
 unterschreiben:['unterschrieb','unterschrieben'],
 anerkennen:['erkannte','erkannt'],begegnen:['begegnete','begegnet'],
 beschließen:['beschloss','beschlossen'],bestehen:['bestand','bestanden'],
 betreffen:['betraf','betroffen'],beweisen:['bewies','bewiesen'],
 entwickeln:['entwickelte','entwickelt'],enthalten:['enthielt','enthalten'],
 entsprechen:['entsprach','entsprochen'],überwinden:['überwand','überwunden'],
 unterliegen:['unterlag','unterlegen'],widersprechen:['widersprach','widersprochen'],
 durchdringen:['durchdrang','durchdrungen'],erschließen:['erschloss','erschlossen'],
 obliegen:['oblag','oblegen'],unterbinden:['unterband','unterbunden'],
 verkennen:['verkannte','verkannt'],widerlegen:['widerlegte','widerlegt'],
 verzichten:['verzichtete','verzichtet'],vermitteln:['vermittelte','vermittelt'],
 verbergen:['verbarg','verborgen'],entfallen:['entfiel','entfallen']
};
const PRESENT_OVERRIDES = {
 gefallen:['gefalle','gefällst','gefällt','gefallen','gefallt','gefallen'],
 geschehen:['geschehe','geschiehst','geschieht','geschehen','gescheht','geschehen'],
 gelten:['gelte','giltst','gilt','gelten','geltet','gelten'],
 enthalten:['enthalte','enthältst','enthält','enthalten','enthaltet','enthalten'],
 entsprechen:['entspreche','entsprichst','entspricht','entsprechen','entsprecht','entsprechen'],
 betreffen:['betreffe','betriffst','betrifft','betreffen','betrefft','betreffen'],
 widersprechen:['widerspreche','widersprichst','widerspricht','widersprechen','widersprecht','widersprechen'],
 verhalten:['verhalte','verhältst','verhält','verhalten','verhaltet','verhalten'],
 verlassen:['verlasse','verlässt','verlässt','verlassen','verlasst','verlassen'],
 empfehlen:['empfehle','empfiehlst','empfiehlt','empfehlen','empfehlt','empfehlen'],
 übernehmen:['übernehme','übernimmst','übernimmt','übernehmen','übernehmt','übernehmen'],
 unternehmen:['unternehme','unternimmst','unternimmt','unternehmen','unternehmt','unternehmen'],
 überwinden:['überwinde','überwindest','überwindet','überwinden','überwindet','überwinden'],
 entfallen:['entfalle','entfällst','entfällt','entfallen','entfallt','entfallen']
};
Object.assign(EXTRA_IRREGULAR,{
 empfehlen:['empfahl','empfohlen'], unternehmen:['unternahm','unternommen'],
 übernehmen:['übernahm','übernommen'], erscheinen:['erschien','erschienen'],
 erkennen:['erkannte','erkannt'], wohnen:['wohnte','gewohnt'],
 vollziehen:['vollzog','vollzogen'], erhalten:['erhielt','erhalten'],
 bereiten:['bereitete','bereitet'], kennen:['kannte','gekannt']
});
Object.assign(PRESENT_OVERRIDES,{
 erkennen:['erkenne','erkennst','erkennt','erkennen','erkennt','erkennen'],
 erhalten:['erhalte','erhältst','erhält','erhalten','erhaltet','erhalten']
});
SEPARABLE_VERBS.anerkennen=['an','erkennen'];
const MOVE_SEIN = new Set(['gehen','kommen','fahren','laufen','fliegen','bleiben','werden','entstehen','geschehen','gelingen','entfallen','begegnen','steigen','fallen','ziehen']);
const PREFIX_SEIN = new Set(['aufstehen','ankommen','umziehen','vorausgehen','hervorgehen','einhergehen','zuwiderlaufen','entfallen']);
const EXTRA_SPLITS = {
 umziehen:['um','ziehen'], 'sich zutragen':['zu','tragen'],
 'zugrunde liegen':['zugrunde','liegen']
};
const FUTURE=['werde','wirst','wird','werden','werdet','werden'];
const PRETERITE_HABEN=['hatte','hattest','hatte','hatten','hattet','hatten'];
const PRETERITE_SEIN=['war','warst','war','waren','wart','waren'];
function verbStem(v){return v.replace(/en$|n$/,'');}
function simpleForms(v){
 const stem=verbStem(v);
 const eln=v.endsWith('eln');
 const ep=/[td]$/.test(stem)||/[^aeiouäöü]m$|[^aeiouäöü]n$/.test(stem);
 const present=['e','st','t','en','t','en'].map((end,i)=>eln?(i===0?stem.slice(0,-2)+'le':i===3||i===5?v:stem+(i===1?'st':i===2||i===4?'t':'')):stem+(ep&&[1,2,4].includes(i)?(i===1?'est':'et'):i===1&&/[sßzx]$/.test(stem)?'t':end));
 const pastBase=stem+(/[td]$/.test(stem)?'ete':'te');
 const past=['','st','','n','t','n'].map(end=>pastBase+end);
 const noGe=/^(be|ver|ent|er|zer|miss|emp|ge)/.test(v)||v.endsWith('ieren');
 const part=(noGe?'':'ge')+stem+(ep?'et':'t');
 return {present,past,part,aux:'haben'};
}
function strongPast(p){
 const e=/[td]$/.test(p);
 const s=/[sßz]$/.test(p);
 return [p,p+(e||s?'est':'st'),p,p+'en',p+(e?'et':'t'),p+'en'];
}
function formsFor(v){
 const f=simpleForms(v), irr=irregular[v], strong=STRONG_FORMS[v], extra=EXTRA_IRREGULAR[v];
 if(irr){Object.assign(f,irr);}
 if(strong){f.present=strong.slice(0,6);const past=strong[6];f.past=strongPast(past);f.part=strong[7];}
 if(extra){const [p,part]=extra;f.past=strongPast(p);f.part=part;}
 if(PRESENT_OVERRIDES[v])f.present=PRESENT_OVERRIDES[v];
 if(MOVE_SEIN.has(v))f.aux='sein';
 return f;
}
function imperativeCore(core,person,f){
 if(core==='sein')return person===1?'sei':person===3?'seien wir':person===4?'seid':person===6?'seien Sie':'—';
 if(person===1){
  const overrides={nehmen:'nimm',geben:'gib',sehen:'sieh',lesen:'lies',essen:'iss',sprechen:'sprich',helfen:'hilf',treffen:'triff',vergessen:'vergiss',empfehlen:'empfiehl',werden:'werde',wissen:'wisse'};
  return overrides[core]||verbStem(core);
 }
 if(person===3)return core+' wir';
 if(person===4)return f.present[4];
 if(person===6)return core+' Sie';
 return '—';
}
conjugate=function(verb,tense,person){
 const rawPerson=person,i=person===6?5:person;
 const reflexive=verb.startsWith('sich ');
 const bare=reflexive?verb.slice(5):verb;
 const split=EXTRA_SPLITS[verb]||SEPARABLE_VERBS[bare]||null;
 const prefix=split?split[0]:'';
 const core=split?split[1]:bare;
 const f=formsFor(core);
 const aux=(PREFIX_SEIN.has(bare)||(!split&&f.aux==='sein'))?'sein':'haben';
 const pfx=split?' '+prefix:'';
 const part=split?prefix+f.part:f.part;
 const infinitive=bare;
 const reflexivePronouns=['mich','dich','sich','uns','euch','sich'];
 const reflexiveText=reflexive?' '+reflexivePronouns[i]:'';
 if(tense==='Präsens')return f.present[i]+reflexiveText+pfx;
 if(tense==='Präteritum')return f.past[i]+reflexiveText+pfx;
 if(tense==='Perfekt')return auxiliaries[aux][i]+reflexiveText+' '+part;
 if(tense==='Plusquamperfekt')return (aux==='sein'?PRETERITE_SEIN:PRETERITE_HABEN)[i]+reflexiveText+' '+part;
 if(tense==='Futur I')return FUTURE[i]+reflexiveText+' '+infinitive;
 if(tense==='Futur II')return FUTURE[i]+reflexiveText+' '+part+' '+aux;
 if(tense==='Konjunktiv I'){
  const base=core==='sein'?['sei','seiest','sei','seien','seiet','seien'][i]:verbStem(core)+['e','est','e','en','et','en'][i];
  return base+reflexiveText+pfx;
 }
 if(tense==='Konjunktiv II'){
  if(!split&&bare==='sein')return ['wäre','wärst','wäre','wären','wärt','wären'][i];
  if(!split&&bare==='haben')return ['hätte','hättest','hätte','hätten','hättet','hätten'][i];
  return ['würde','würdest','würde','würden','würdet','würden'][i]+reflexiveText+' '+infinitive;
 }
 if(tense==='Imperativ'){
  if([0,2,5].includes(rawPerson))return '—';
  const imp=imperativeCore(core,rawPerson,f);
  if(!split)return reflexive ? imp+(rawPerson===3?' uns':rawPerson===6?' sich':rawPerson===4?' euch':' dich') : imp;
  if(rawPerson===3)return core+' wir'+(reflexive?' uns':'')+' '+prefix;
  if(rawPerson===6)return core+' Sie'+(reflexive?' sich':'')+' '+prefix;
  return imp+(reflexive?(rawPerson===4?' euch':' dich'):'')+' '+prefix;
 }
 return '';
};

// Audited conjugation corrections for the built-in A1–C2 vocabulary.
// "kennen" is a mixed (irregular weak) verb: kannte, gekannt.
Object.assign(irregular, {
  anerkennen:{present:['anerkenne','anerkennst','anerkennt','anerkennen','anerkennt','anerkennen'],past:['anerkannte','anerkanntest','anerkannte','anerkannten','anerkanntet','anerkannten'],part:'anerkannt'},
  kennen:{present:['kenne','kennst','kennt','kennen','kennt','kennen'],past:['kannte','kanntest','kannte','kannten','kanntet','kannten'],part:'gekannt'},
  heißen:{present:['heiße','heißt','heißt','heißen','heißt','heißen'],past:['hieß','hießest','hieß','hießen','hießt','hießen'],part:'geheißen'},
  verstehen:{past:['verstand','verstandest','verstand','verstanden','verstandet','verstanden'],part:'verstanden'},
  waschen:{present:['wasche','wäschst','wäscht','waschen','wascht','waschen'],past:['wusch','wuschst','wusch','wuschen','wuscht','wuschen'],part:'gewaschen'},
  empfehlen:{present:['empfehle','empfiehlst','empfiehlt','empfehlen','empfehlt','empfehlen'],past:['empfahl','empfahlst','empfahl','empfahlen','empfahlt','empfahlen'],part:'empfohlen'},
  vermeiden:{past:['vermied','vermiedest','vermied','vermieden','vermiedet','vermieden'],part:'vermieden'},
  bleiben:{past:['blieb','bliebst','blieb','blieben','bliebt','blieben'],part:'geblieben',aux:'sein'},
  reisen:{aux:'sein'},
  begegnen:{aux:'sein'},
  geschehen:{aux:'sein'},
  gelingen:{aux:'sein'},
  entfallen:{aux:'sein'},
  entstehen:{aux:'sein'},
  fliegen:{aux:'sein'}
});
Object.assign(EXTRA_IRREGULAR, {
  heißen:['hieß','geheißen'], verstehen:['verstand','verstanden'],
  vermeiden:['vermied','vermieden'], empfehlen:['empfahl','empfohlen'],
  wissen:['wusste','gewusst'], kennen:['kannte','gekannt'], anerkennen:['anerkannte','anerkannt'],
  unterbinden:['unterband','unterbunden'],
  einladen:['lud','geladen'], verlieren:['verlor','verloren']
});
Object.assign(PRESENT_OVERRIDES, {
  waschen:['wasche','wäschst','wäscht','waschen','wascht','waschen'],
  heißen:['heiße','heißt','heißt','heißen','heißt','heißen'],
  empfehlen:['empfehle','empfiehlst','empfiehlt','empfehlen','empfehlt','empfehlen'],
  kennen:['kenne','kennst','kennt','kennen','kennt','kennen']
});
MOVE_SEIN.add('reisen');
// "anerkennen" has an inseparable prefix and is never "erkenne an".
delete SEPARABLE_VERBS.anerkennen;
// "zugrunde liegen" is written as two words, including in compound tenses.
const auditedConjugate = conjugate;
conjugate = function(verb, tense, person) {
  const i=person===6?5:person;
  if(verb==='abwegig erscheinen') {
    const result=auditedConjugate('erscheinen',tense,person);
    if(tense==='Perfekt'||tense==='Plusquamperfekt') return result+' abwegig';
    if(tense==='Futur II') return result.replace(/ (sein|haben)$/,' abwegig $1');
    if(tense==='Futur I'||tense==='Konjunktiv II') return result+' abwegig';
    return result+' abwegig';
  }
  if(verb==='zugrunde liegen') {
    if(tense==='Perfekt'||tense==='Plusquamperfekt')
      return (tense==='Perfekt'?auxiliaries.haben[i]:PRETERITE_HABEN[i])+' zugrunde gelegen';
    if(tense==='Futur II') return FUTURE[i]+' zugrunde gelegen haben';
    if(tense==='Futur I') return FUTURE[i]+' zugrunde liegen';
    if(tense==='Konjunktiv II') return ['würde','würdest','würde','würden','würdet','würden'][i]+' zugrunde liegen';
  }
  if(tense==='Konjunktiv II') {
    const forms={
      wissen:['wüsste','wüsstest','wüsste','wüssten','wüsstet','wüssten'],
      werden:['würde','würdest','würde','würden','würdet','würden'],
      können:['könnte','könntest','könnte','könnten','könntet','könnten'],
      müssen:['müsste','müsstest','müsste','müssten','müsstet','müssten'],
      dürfen:['dürfte','dürftest','dürfte','dürften','dürftet','dürften'],
      mögen:['möchte','möchtest','möchte','möchten','möchtet','möchten'],
      sollen:['sollte','solltest','sollte','sollten','solltet','sollten'],
      wollen:['wollte','wolltest','wollte','wollten','wolltet','wollten'],
      gehen:['ginge','gingest','ginge','gingen','ginget','gingen'],
      kommen:['käme','kämest','käme','kämen','kämet','kämen'],
      finden:['fände','fändest','fände','fänden','fändet','fänden'],
      geben:['gäbe','gäbest','gäbe','gäben','gäbet','gäben'],
      nehmen:['nähme','nähmest','nähme','nähmen','nähmet','nähmen']
    };
    if(forms[verb])return forms[verb][i];
  }
  return auditedConjugate(verb,tense,person);
};

// Theme selection, remembered between visits.
(function(){
 const select=document.getElementById('themeSelect');
 const allowed=['notebook','dark','ocean','rose','minimal'];
 let saved='notebook';
 try { saved=localStorage.getItem('gvt-theme')||'notebook'; } catch(e) {}
 if(!allowed.includes(saved)) saved='notebook';
 function apply(value){
  document.documentElement.dataset.theme=value;
  select.value=value;
  try { localStorage.setItem('gvt-theme',value); } catch(e) {}
 }
 select.addEventListener('change',()=>apply(select.value));
 apply(saved);
})();

// Central settings panel, preserving existing theme/language/edit handlers.
(function(){
 const panel=document.getElementById('settingsPanel');
 const backdrop=document.getElementById('settingsBackdrop');
 const trigger=document.getElementById('openSettings');
 const close=document.getElementById('closeSettings');
 let previousFocus=null;
 let isOpen=false;
 panel.inert=true;
 function open(){
   if(isOpen)return;
   isOpen=true;previousFocus=document.activeElement;
   panel.inert=false;
   panel.setAttribute('aria-hidden','false');
   trigger.setAttribute('aria-expanded','true');
   backdrop.classList.add('is-open');
   panel.classList.add('is-open');
   document.body.classList.add('settings-open');
   requestAnimationFrame(()=>{if(isOpen)close.focus({preventScroll:true});});
 }
 function dismiss(){
   if(!isOpen)return;
   isOpen=false;
   panel.classList.remove('is-open');
   backdrop.classList.remove('is-open');
   trigger.setAttribute('aria-expanded','false');
   panel.setAttribute('aria-hidden','true');
   panel.inert=true;
   document.body.classList.remove('settings-open');
   requestAnimationFrame(()=>previousFocus?.focus({preventScroll:true}));
 }
 trigger.addEventListener('click',open);close.addEventListener('click',dismiss);backdrop.addEventListener('click',dismiss);
 document.addEventListener('keydown',e=>{if(!panel.classList.contains('is-open'))return;if(e.key==='Escape'){dismiss();return;}if(e.key==='Tab'){const els=[...panel.querySelectorAll('button,select,input')].filter(el=>!el.disabled);const first=els[0],last=els[els.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}});
 ['editVerbs','editTenses','editPronouns'].forEach(id=>document.getElementById(id).addEventListener('click',dismiss));
 const kb=document.getElementById('settingKeyboard'),large=document.getElementById('settingLargeText');
 const read=(key,fallback)=>{try{return localStorage.getItem(key)??fallback}catch{return fallback}};
 function apply(){document.body.classList.toggle('hide-german-keyboard',!kb.checked);document.body.classList.toggle('large-answer-text',large.checked);try{localStorage.setItem('gvt-show-keyboard',String(kb.checked));localStorage.setItem('gvt-large-text',String(large.checked))}catch{}}
 kb.checked=read('gvt-show-keyboard','true')!=='false';large.checked=read('gvt-large-text','false')==='true';apply();kb.addEventListener('change',apply);large.addEventListener('change',apply);
 document.getElementById('resetSettings').addEventListener('click',()=>{kb.checked=true;large.checked=false;apply();document.getElementById('themeSelect').value='notebook';document.getElementById('themeSelect').dispatchEvent(new Event('change'));document.getElementById('interfaceLanguage').value='en';document.getElementById('interfaceLanguage').dispatchEvent(new Event('change'));dismiss();});
})();

// Keep the header language shortcut synchronized with the full settings selector.
(function(){
 const quick=document.getElementById('quickLanguage');
 const full=document.getElementById('interfaceLanguage');
 if(!quick||!full)return;
 const sync=()=>{if(quick.value!==full.value)quick.value=full.value;};
 quick.addEventListener('change',()=>{full.value=quick.value;full.dispatchEvent(new Event('change',{bubbles:true}));});
 full.addEventListener('change',sync);
 const observer=new MutationObserver(sync);
 observer.observe(full,{attributes:true,attributeFilter:['value']});
 sync();
 window.addEventListener('pageshow',sync);
})();

// After answers are checked, another Enter advances to the next exercise
// (or finishes the practice when the final exercise has been completed).
document.addEventListener('keydown', function(event) {
  if (event.key !== 'Enter' || event.repeat || event.isComposing) return;
  const practicePage = document.getElementById('page3');
  const navigation = document.getElementById('verbNavigation');
  if (!practicePage || practicePage.classList.contains('hidden') ||
      !navigation || navigation.classList.contains('hidden')) return;
  const active = document.activeElement;
  if (active && (active.tagName === 'BUTTON' || active.tagName === 'SELECT' ||
      active.tagName === 'TEXTAREA' || active.isContentEditable)) return;
  event.preventDefault();
  document.getElementById('nextVerb').click();
}, true);


// Dismiss edit-verb, edit-tense, edit-pronoun and other dialogs by
// clicking the dimmed background or pressing Escape.
(function enableEasyDialogDismissal(){
  const overlay=document.getElementById('siteDialog');
  if(!overlay)return;
  function dismiss(){
    if(overlay.classList.contains('hidden'))return;
    const cancel=overlay.querySelector('.dialog-cancel');
    if(cancel){cancel.click();return;}
    const ok=overlay.querySelector('.dialog-ok');
    if(ok)ok.click();
  }
  overlay.addEventListener('pointerdown',event=>{
    if(event.target===overlay)dismiss();
  });
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&!overlay.classList.contains('hidden')){
      event.preventDefault();event.stopPropagation();dismiss();
    }
  },true);
})();


/* === VERIFIED CONJUGATIONS — ONE EXPLICIT LEXEME FOR EVERY BUILT-IN VERB ===
 * Curated verb-by-verb lexicon (169 unique entries, across A1-C2).
 * Strong/mixed stems, prefixes, participles, auxiliary verbs,
 * second/third-person mutations, Konjunktiv II and imperatives are explicit.
 * Only regular person endings and compound-tense auxiliaries are generated.
 * Reference checks on irregular / defective verbs: Duden; meanings matter.
 */
const AUDITED_VERB_LEXICON = {"sein":{"past":"war","part":"gewesen","aux":"sein","du":"bist","er":"ist","k2":"wäre","imp":"sei","split":"-","flags":"-"},"haben":{"past":"hatte","part":"gehabt","aux":"haben","du":"hast","er":"hat","k2":"hätte","imp":"hab","split":"-","flags":"-"},"werden":{"past":"wurde","part":"geworden","aux":"sein","du":"wirst","er":"wird","k2":"würde","imp":"werde","split":"-","flags":"-"},"gehen":{"past":"ging","part":"gegangen","aux":"sein","du":"-","er":"-","k2":"ginge","imp":"geh","split":"-","flags":"-"},"kommen":{"past":"kam","part":"gekommen","aux":"sein","du":"-","er":"-","k2":"käme","imp":"komm","split":"-","flags":"-"},"machen":{"past":"machte","part":"gemacht","aux":"haben","du":"-","er":"-","k2":"-","imp":"mach","split":"-","flags":"-"},"lernen":{"past":"lernte","part":"gelernt","aux":"haben","du":"-","er":"-","k2":"-","imp":"lern","split":"-","flags":"-"},"wohnen":{"past":"wohnte","part":"gewohnt","aux":"haben","du":"-","er":"-","k2":"-","imp":"wohn","split":"-","flags":"-"},"leben":{"past":"lebte","part":"gelebt","aux":"haben","du":"-","er":"-","k2":"-","imp":"leb","split":"-","flags":"-"},"arbeiten":{"past":"arbeitete","part":"gearbeitet","aux":"haben","du":"-","er":"-","k2":"-","imp":"arbeite","split":"-","flags":"-"},"spielen":{"past":"spielte","part":"gespielt","aux":"haben","du":"-","er":"-","k2":"-","imp":"spiel","split":"-","flags":"-"},"essen":{"past":"aß","part":"gegessen","aux":"haben","du":"isst","er":"isst","k2":"äße","imp":"iss","split":"-","flags":"-"},"trinken":{"past":"trank","part":"getrunken","aux":"haben","du":"-","er":"-","k2":"tränke","imp":"trink","split":"-","flags":"-"},"sprechen":{"past":"sprach","part":"gesprochen","aux":"haben","du":"sprichst","er":"spricht","k2":"spräche","imp":"sprich","split":"-","flags":"-"},"heißen":{"past":"hieß","part":"geheißen","aux":"haben","du":"heißt","er":"heißt","k2":"hieße","imp":"heiß","split":"-","flags":"-"},"fahren":{"past":"fuhr","part":"gefahren","aux":"sein","du":"fährst","er":"fährt","k2":"führe","imp":"fahr","split":"-","flags":"-"},"lesen":{"past":"las","part":"gelesen","aux":"haben","du":"liest","er":"liest","k2":"läse","imp":"lies","split":"-","flags":"-"},"schreiben":{"past":"schrieb","part":"geschrieben","aux":"haben","du":"-","er":"-","k2":"schriebe","imp":"schreib","split":"-","flags":"-"},"sehen":{"past":"sah","part":"gesehen","aux":"haben","du":"siehst","er":"sieht","k2":"sähe","imp":"sieh","split":"-","flags":"-"},"hören":{"past":"hörte","part":"gehört","aux":"haben","du":"-","er":"-","k2":"-","imp":"hör","split":"-","flags":"-"},"kaufen":{"past":"kaufte","part":"gekauft","aux":"haben","du":"-","er":"-","k2":"-","imp":"kauf","split":"-","flags":"-"},"brauchen":{"past":"brauchte","part":"gebraucht","aux":"haben","du":"-","er":"-","k2":"-","imp":"brauch","split":"-","flags":"-"},"finden":{"past":"fand","part":"gefunden","aux":"haben","du":"-","er":"-","k2":"fände","imp":"finde","split":"-","flags":"-"},"nehmen":{"past":"nahm","part":"genommen","aux":"haben","du":"nimmst","er":"nimmt","k2":"nähme","imp":"nimm","split":"-","flags":"-"},"geben":{"past":"gab","part":"gegeben","aux":"haben","du":"gibst","er":"gibt","k2":"gäbe","imp":"gib","split":"-","flags":"-"},"schlafen":{"past":"schlief","part":"geschlafen","aux":"haben","du":"schläfst","er":"schläft","k2":"schliefe","imp":"schlaf","split":"-","flags":"-"},"laufen":{"past":"lief","part":"gelaufen","aux":"sein","du":"läufst","er":"läuft","k2":"liefe","imp":"lauf","split":"-","flags":"-"},"fragen":{"past":"fragte","part":"gefragt","aux":"haben","du":"-","er":"-","k2":"-","imp":"frag","split":"-","flags":"-"},"antworten":{"past":"antwortete","part":"geantwortet","aux":"haben","du":"-","er":"-","k2":"-","imp":"antworte","split":"-","flags":"-"},"sagen":{"past":"sagte","part":"gesagt","aux":"haben","du":"-","er":"-","k2":"-","imp":"sag","split":"-","flags":"-"},"bleiben":{"past":"blieb","part":"geblieben","aux":"sein","du":"-","er":"-","k2":"bliebe","imp":"bleib","split":"-","flags":"-"},"bringen":{"past":"brachte","part":"gebracht","aux":"haben","du":"-","er":"-","k2":"brächte","imp":"bring","split":"-","flags":"-"},"denken":{"past":"dachte","part":"gedacht","aux":"haben","du":"-","er":"-","k2":"dächte","imp":"denk","split":"-","flags":"-"},"kennen":{"past":"kannte","part":"gekannt","aux":"haben","du":"-","er":"-","k2":"kennte","imp":"kenn","split":"-","flags":"-"},"wissen":{"past":"wusste","part":"gewusst","aux":"haben","du":"weißt","er":"weiß","k2":"wüsste","imp":"wisse","split":"-","flags":"-"},"helfen":{"past":"half","part":"geholfen","aux":"haben","du":"hilfst","er":"hilft","k2":"hülfe","imp":"hilf","split":"-","flags":"-"},"treffen":{"past":"traf","part":"getroffen","aux":"haben","du":"triffst","er":"trifft","k2":"träfe","imp":"triff","split":"-","flags":"-"},"vergessen":{"past":"vergaß","part":"vergessen","aux":"haben","du":"vergisst","er":"vergisst","k2":"vergäße","imp":"vergiss","split":"-","flags":"-"},"verlieren":{"past":"verlor","part":"verloren","aux":"haben","du":"-","er":"-","k2":"verlöre","imp":"verlier","split":"-","flags":"-"},"beginnen":{"past":"begann","part":"begonnen","aux":"haben","du":"-","er":"-","k2":"begänne","imp":"beginn","split":"-","flags":"-"},"bekommen":{"past":"bekam","part":"bekommen","aux":"haben","du":"-","er":"-","k2":"bekäme","imp":"bekomm","split":"-","flags":"-"},"besuchen":{"past":"besuchte","part":"besucht","aux":"haben","du":"-","er":"-","k2":"-","imp":"besuch","split":"-","flags":"-"},"bezahlen":{"past":"bezahlte","part":"bezahlt","aux":"haben","du":"-","er":"-","k2":"-","imp":"bezahl","split":"-","flags":"-"},"erzählen":{"past":"erzählte","part":"erzählt","aux":"haben","du":"-","er":"-","k2":"-","imp":"erzähl","split":"-","flags":"-"},"erklären":{"past":"erklärte","part":"erklärt","aux":"haben","du":"-","er":"-","k2":"-","imp":"erklär","split":"-","flags":"-"},"gefallen":{"past":"gefiel","part":"gefallen","aux":"haben","du":"gefällst","er":"gefällt","k2":"gefiele","imp":"gefall","split":"-","flags":"-"},"gehören":{"past":"gehörte","part":"gehört","aux":"haben","du":"-","er":"-","k2":"-","imp":"gehör","split":"-","flags":"-"},"gewinnen":{"past":"gewann","part":"gewonnen","aux":"haben","du":"-","er":"-","k2":"gewänne","imp":"gewinn","split":"-","flags":"-"},"kochen":{"past":"kochte","part":"gekocht","aux":"haben","du":"-","er":"-","k2":"-","imp":"koch","split":"-","flags":"-"},"reisen":{"past":"reiste","part":"gereist","aux":"sein","du":"-","er":"-","k2":"-","imp":"reis","split":"-","flags":"-"},"schicken":{"past":"schickte","part":"geschickt","aux":"haben","du":"-","er":"-","k2":"-","imp":"schick","split":"-","flags":"-"},"suchen":{"past":"suchte","part":"gesucht","aux":"haben","du":"-","er":"-","k2":"-","imp":"such","split":"-","flags":"-"},"tragen":{"past":"trug","part":"getragen","aux":"haben","du":"trägst","er":"trägt","k2":"trüge","imp":"trag","split":"-","flags":"-"},"verkaufen":{"past":"verkaufte","part":"verkauft","aux":"haben","du":"-","er":"-","k2":"-","imp":"verkauf","split":"-","flags":"-"},"verstehen":{"past":"verstand","part":"verstanden","aux":"haben","du":"-","er":"-","k2":"verstünde","imp":"versteh","split":"-","flags":"-"},"warten":{"past":"wartete","part":"gewartet","aux":"haben","du":"-","er":"-","k2":"-","imp":"warte","split":"-","flags":"-"},"waschen":{"past":"wusch","part":"gewaschen","aux":"haben","du":"wäschst","er":"wäscht","k2":"wüsche","imp":"wasch","split":"-","flags":"-"},"ziehen":{"past":"zog","part":"gezogen","aux":"haben","du":"-","er":"-","k2":"zöge","imp":"zieh","split":"-","flags":"-"},"öffnen":{"past":"öffnete","part":"geöffnet","aux":"haben","du":"-","er":"-","k2":"-","imp":"öffne","split":"-","flags":"-"},"schließen":{"past":"schloss","part":"geschlossen","aux":"haben","du":"-","er":"-","k2":"schlösse","imp":"schließ","split":"-","flags":"-"},"anrufen":{"past":"rief","part":"angerufen","aux":"haben","du":"-","er":"-","k2":"riefe","imp":"ruf","split":"an","flags":"-"},"aufstehen":{"past":"stand","part":"aufgestanden","aux":"sein","du":"-","er":"-","k2":"stünde","imp":"steh","split":"auf","flags":"-"},"anfangen":{"past":"fing","part":"angefangen","aux":"haben","du":"fängst","er":"fängt","k2":"finge","imp":"fang","split":"an","flags":"-"},"ankommen":{"past":"kam","part":"angekommen","aux":"sein","du":"-","er":"-","k2":"käme","imp":"komm","split":"an","flags":"-"},"aussehen":{"past":"sah","part":"ausgesehen","aux":"haben","du":"siehst","er":"sieht","k2":"sähe","imp":"sieh","split":"aus","flags":"-"},"einladen":{"past":"lud","part":"eingeladen","aux":"haben","du":"lädst","er":"lädt","k2":"lüde","imp":"lad","split":"ein","flags":"-"},"empfehlen":{"past":"empfahl","part":"empfohlen","aux":"haben","du":"empfiehlst","er":"empfiehlt","k2":"empföhle","imp":"empfiehl","split":"-","flags":"-"},"entscheiden":{"past":"entschied","part":"entschieden","aux":"haben","du":"-","er":"-","k2":"entschiede","imp":"entscheide","split":"-","flags":"-"},"entstehen":{"past":"entstand","part":"entstanden","aux":"sein","du":"-","er":"-","k2":"entstünde","imp":"entsteh","split":"-","flags":"-"},"erreichen":{"past":"erreichte","part":"erreicht","aux":"haben","du":"-","er":"-","k2":"-","imp":"erreich","split":"-","flags":"-"},"erkennen":{"past":"erkannte","part":"erkannt","aux":"haben","du":"-","er":"-","k2":"erkennte","imp":"erkenn","split":"-","flags":"-"},"erlauben":{"past":"erlaubte","part":"erlaubt","aux":"haben","du":"-","er":"-","k2":"-","imp":"erlaub","split":"-","flags":"-"},"erwarten":{"past":"erwartete","part":"erwartet","aux":"haben","du":"-","er":"-","k2":"-","imp":"erwarte","split":"-","flags":"-"},"fliegen":{"past":"flog","part":"geflogen","aux":"sein","du":"-","er":"-","k2":"flöge","imp":"flieg","split":"-","flags":"-"},"fühlen":{"past":"fühlte","part":"gefühlt","aux":"haben","du":"-","er":"-","k2":"-","imp":"fühl","split":"-","flags":"-"},"genießen":{"past":"genoss","part":"genossen","aux":"haben","du":"-","er":"-","k2":"genösse","imp":"genieß","split":"-","flags":"-"},"geschehen":{"past":"geschah","part":"geschehen","aux":"sein","du":"-","er":"geschieht","k2":"geschähe","imp":"-","split":"-","flags":"third"},"gelingen":{"past":"gelang","part":"gelungen","aux":"sein","du":"-","er":"-","k2":"gelänge","imp":"-","split":"-","flags":"third"},"vergleichen":{"past":"verglich","part":"verglichen","aux":"haben","du":"-","er":"-","k2":"vergliche","imp":"vergleich","split":"-","flags":"-"},"verhalten":{"past":"verhielt","part":"verhalten","aux":"haben","du":"verhältst","er":"verhält","k2":"verhielte","imp":"verhalte","split":"-","flags":"-"},"verlassen":{"past":"verließ","part":"verlassen","aux":"haben","du":"verlässt","er":"verlässt","k2":"verließe","imp":"verlass","split":"-","flags":"-"},"versuchen":{"past":"versuchte","part":"versucht","aux":"haben","du":"-","er":"-","k2":"-","imp":"versuch","split":"-","flags":"-"},"vorbereiten":{"past":"bereitete","part":"vorbereitet","aux":"haben","du":"-","er":"-","k2":"-","imp":"bereite","split":"vor","flags":"-"},"vorschlagen":{"past":"schlug","part":"vorgeschlagen","aux":"haben","du":"schlägst","er":"schlägt","k2":"schlüge","imp":"schlag","split":"vor","flags":"-"},"teilnehmen":{"past":"nahm","part":"teilgenommen","aux":"haben","du":"nimmst","er":"nimmt","k2":"nähme","imp":"nimm","split":"teil","flags":"-"},"unternehmen":{"past":"unternahm","part":"unternommen","aux":"haben","du":"unternimmst","er":"unternimmt","k2":"unternähme","imp":"unternimm","split":"-","flags":"-"},"unterschreiben":{"past":"unterschrieb","part":"unterschrieben","aux":"haben","du":"-","er":"-","k2":"unterschriebe","imp":"unterschreib","split":"-","flags":"-"},"überlegen":{"past":"überlegte","part":"überlegt","aux":"haben","du":"-","er":"-","k2":"-","imp":"überleg","split":"-","flags":"-"},"umziehen":{"past":"zog","part":"umgezogen","aux":"sein","du":"-","er":"-","k2":"zöge","imp":"zieh","split":"um","flags":"-"},"ablehnen":{"past":"lehnte","part":"abgelehnt","aux":"haben","du":"-","er":"-","k2":"-","imp":"lehn","split":"ab","flags":"-"},"anerkennen":{"past":"erkannte","part":"anerkannt","aux":"haben","du":"-","er":"-","k2":"erkennte","imp":"erkenn","split":"an","flags":"-"},"anbieten":{"past":"bot","part":"angeboten","aux":"haben","du":"-","er":"-","k2":"böte","imp":"biet","split":"an","flags":"-"},"annehmen":{"past":"nahm","part":"angenommen","aux":"haben","du":"nimmst","er":"nimmt","k2":"nähme","imp":"nimm","split":"an","flags":"-"},"beeinflussen":{"past":"beeinflusste","part":"beeinflusst","aux":"haben","du":"-","er":"-","k2":"-","imp":"beeinfluss","split":"-","flags":"-"},"begegnen":{"past":"begegnete","part":"begegnet","aux":"sein","du":"-","er":"-","k2":"-","imp":"begegne","split":"-","flags":"-"},"beitragen":{"past":"trug","part":"beigetragen","aux":"haben","du":"trägst","er":"trägt","k2":"trüge","imp":"trag","split":"bei","flags":"-"},"beschließen":{"past":"beschloss","part":"beschlossen","aux":"haben","du":"-","er":"-","k2":"beschlösse","imp":"beschließ","split":"-","flags":"-"},"bestehen":{"past":"bestand","part":"bestanden","aux":"haben","du":"-","er":"-","k2":"bestünde","imp":"besteh","split":"-","flags":"-"},"betreffen":{"past":"betraf","part":"betroffen","aux":"haben","du":"betriffst","er":"betrifft","k2":"beträfe","imp":"betriff","split":"-","flags":"-"},"beweisen":{"past":"bewies","part":"bewiesen","aux":"haben","du":"-","er":"-","k2":"bewiese","imp":"beweis","split":"-","flags":"-"},"darstellen":{"past":"stellte","part":"dargestellt","aux":"haben","du":"-","er":"-","k2":"-","imp":"stell","split":"dar","flags":"-"},"durchführen":{"past":"führte","part":"durchgeführt","aux":"haben","du":"-","er":"-","k2":"-","imp":"führ","split":"durch","flags":"-"},"einsetzen":{"past":"setzte","part":"eingesetzt","aux":"haben","du":"-","er":"-","k2":"-","imp":"setz","split":"ein","flags":"-"},"entwickeln":{"past":"entwickelte","part":"entwickelt","aux":"haben","du":"-","er":"-","k2":"-","imp":"entwickle","split":"-","flags":"-"},"erfordern":{"past":"erforderte","part":"erfordert","aux":"haben","du":"-","er":"-","k2":"-","imp":"erfordere","split":"-","flags":"-"},"ermöglichen":{"past":"ermöglichte","part":"ermöglicht","aux":"haben","du":"-","er":"-","k2":"-","imp":"ermöglich","split":"-","flags":"-"},"feststellen":{"past":"stellte","part":"festgestellt","aux":"haben","du":"-","er":"-","k2":"-","imp":"stell","split":"fest","flags":"-"},"fördern":{"past":"förderte","part":"gefördert","aux":"haben","du":"-","er":"-","k2":"-","imp":"fördere","split":"-","flags":"-"},"herstellen":{"past":"stellte","part":"hergestellt","aux":"haben","du":"-","er":"-","k2":"-","imp":"stell","split":"her","flags":"-"},"hinweisen":{"past":"wies","part":"hingewiesen","aux":"haben","du":"-","er":"-","k2":"wiese","imp":"weis","split":"hin","flags":"-"},"übernehmen":{"past":"übernahm","part":"übernommen","aux":"haben","du":"übernimmst","er":"übernimmt","k2":"übernähme","imp":"übernimm","split":"-","flags":"-"},"verhindern":{"past":"verhinderte","part":"verhindert","aux":"haben","du":"-","er":"-","k2":"-","imp":"verhindere","split":"-","flags":"-"},"vermeiden":{"past":"vermied","part":"vermieden","aux":"haben","du":"-","er":"-","k2":"vermiede","imp":"vermeide","split":"-","flags":"-"},"voraussetzen":{"past":"setzte","part":"vorausgesetzt","aux":"haben","du":"-","er":"-","k2":"-","imp":"setz","split":"voraus","flags":"-"},"wahrnehmen":{"past":"nahm","part":"wahrgenommen","aux":"haben","du":"nimmst","er":"nimmt","k2":"nähme","imp":"nimm","split":"wahr","flags":"-"},"zusammenfassen":{"past":"fasste","part":"zusammengefasst","aux":"haben","du":"-","er":"-","k2":"-","imp":"fass","split":"zusammen","flags":"-"},"zunehmen":{"past":"nahm","part":"zugenommen","aux":"haben","du":"nimmst","er":"nimmt","k2":"nähme","imp":"nimm","split":"zu","flags":"-"},"abnehmen":{"past":"nahm","part":"abgenommen","aux":"haben","du":"nimmst","er":"nimmt","k2":"nähme","imp":"nimm","split":"ab","flags":"-"},"enthalten":{"past":"enthielt","part":"enthalten","aux":"haben","du":"enthältst","er":"enthält","k2":"enthielte","imp":"enthalt","split":"-","flags":"-"},"abwickeln":{"past":"wickelte","part":"abgewickelt","aux":"haben","du":"-","er":"-","k2":"-","imp":"wickle","split":"ab","flags":"-"},"anstreben":{"past":"strebte","part":"angestrebt","aux":"haben","du":"-","er":"-","k2":"-","imp":"streb","split":"an","flags":"-"},"aufrechterhalten":{"past":"hielt","part":"aufrechterhalten","aux":"haben","du":"hältst","er":"hält","k2":"hielte","imp":"halt","split":"aufrecht:halten","flags":"-"},"auslösen":{"past":"löste","part":"ausgelöst","aux":"haben","du":"-","er":"-","k2":"-","imp":"lös","split":"aus","flags":"-"},"beabsichtigen":{"past":"beabsichtigte","part":"beabsichtigt","aux":"haben","du":"-","er":"-","k2":"-","imp":"beabsichtige","split":"-","flags":"-"},"beeinträchtigen":{"past":"beeinträchtigte","part":"beeinträchtigt","aux":"haben","du":"-","er":"-","k2":"-","imp":"beeinträchtige","split":"-","flags":"-"},"bewältigen":{"past":"bewältigte","part":"bewältigt","aux":"haben","du":"-","er":"-","k2":"-","imp":"bewältig","split":"-","flags":"-"},"einräumen":{"past":"räumte","part":"eingeräumt","aux":"haben","du":"-","er":"-","k2":"-","imp":"räum","split":"ein","flags":"-"},"einschränken":{"past":"schränkte","part":"eingeschränkt","aux":"haben","du":"-","er":"-","k2":"-","imp":"schränk","split":"ein","flags":"-"},"entfallen":{"past":"entfiel","part":"entfallen","aux":"sein","du":"entfällst","er":"entfällt","k2":"entfiele","imp":"-","split":"-","flags":"third"},"entsprechen":{"past":"entsprach","part":"entsprochen","aux":"haben","du":"entsprichst","er":"entspricht","k2":"entspräche","imp":"entsprich","split":"-","flags":"-"},"hervorheben":{"past":"hob","part":"hervorgehoben","aux":"haben","du":"-","er":"-","k2":"höbe","imp":"heb","split":"hervor","flags":"-"},"nachvollziehen":{"past":"vollzog","part":"nachvollzogen","aux":"haben","du":"-","er":"-","k2":"vollzöge","imp":"vollzieh","split":"nach:vollziehen","flags":"-"},"sicherstellen":{"past":"stellte","part":"sichergestellt","aux":"haben","du":"-","er":"-","k2":"-","imp":"stell","split":"sicher","flags":"-"},"überwinden":{"past":"überwand","part":"überwunden","aux":"haben","du":"-","er":"-","k2":"überwände","imp":"überwinde","split":"-","flags":"-"},"unterliegen":{"past":"unterlag","part":"unterlegen","aux":"haben","du":"-","er":"-","k2":"unterläge","imp":"unterlieg","split":"-","flags":"-"},"veranlassen":{"past":"veranlasste","part":"veranlasst","aux":"haben","du":"-","er":"-","k2":"-","imp":"veranlass","split":"-","flags":"-"},"veranschaulichen":{"past":"veranschaulichte","part":"veranschaulicht","aux":"haben","du":"-","er":"-","k2":"-","imp":"veranschaulich","split":"-","flags":"-"},"verschaffen":{"past":"verschaffte","part":"verschafft","aux":"haben","du":"-","er":"-","k2":"-","imp":"verschaff","split":"-","flags":"-"},"vorausgehen":{"past":"ging","part":"vorausgegangen","aux":"sein","du":"-","er":"-","k2":"ginge","imp":"geh","split":"voraus","flags":"-"},"widersprechen":{"past":"widersprach","part":"widersprochen","aux":"haben","du":"widersprichst","er":"widerspricht","k2":"widerspräche","imp":"widersprich","split":"-","flags":"-"},"zurückgreifen":{"past":"griff","part":"zurückgegriffen","aux":"haben","du":"-","er":"-","k2":"griffe","imp":"greif","split":"zurück","flags":"-"},"zugrunde liegen":{"past":"lag","part":"zugrunde gelegen","aux":"haben","du":"-","er":"-","k2":"läge","imp":"-","split":"zugrunde:liegen","flags":"noimp"},"zustimmen":{"past":"stimmte","part":"zugestimmt","aux":"haben","du":"-","er":"-","k2":"-","imp":"stimm","split":"zu","flags":"-"},"gewährleisten":{"past":"gewährleistete","part":"gewährleistet","aux":"haben","du":"-","er":"-","k2":"-","imp":"gewährleiste","split":"-","flags":"-"},"abwegig erscheinen":{"past":"erschien","part":"erschienen","aux":"sein","du":"-","er":"-","k2":"erschiene","imp":"erschein","split":"-","flags":"adj"},"beherzigen":{"past":"beherzigte","part":"beherzigt","aux":"haben","du":"-","er":"-","k2":"-","imp":"beherzig","split":"-","flags":"-"},"befürworten":{"past":"befürwortete","part":"befürwortet","aux":"haben","du":"-","er":"-","k2":"-","imp":"befürworte","split":"-","flags":"-"},"bekräftigen":{"past":"bekräftigte","part":"bekräftigt","aux":"haben","du":"-","er":"-","k2":"-","imp":"bekräftig","split":"-","flags":"-"},"bemängeln":{"past":"bemängelte","part":"bemängelt","aux":"haben","du":"-","er":"-","k2":"-","imp":"bemängle","split":"-","flags":"-"},"berücksichtigen":{"past":"berücksichtigte","part":"berücksichtigt","aux":"haben","du":"-","er":"-","k2":"-","imp":"berücksichtig","split":"-","flags":"-"},"durchdringen":{"past":"durchdrang","part":"durchdrungen","aux":"haben","du":"-","er":"-","k2":"durchdränge","imp":"durchdring","split":"-","flags":"-"},"einhergehen":{"past":"ging","part":"einhergegangen","aux":"sein","du":"-","er":"-","k2":"ginge","imp":"geh","split":"einher","flags":"-"},"entgegenwirken":{"past":"wirkte","part":"entgegengewirkt","aux":"haben","du":"-","er":"-","k2":"-","imp":"wirk","split":"entgegen","flags":"-"},"entkräften":{"past":"entkräftete","part":"entkräftet","aux":"haben","du":"-","er":"-","k2":"-","imp":"entkräfte","split":"-","flags":"-"},"erschließen":{"past":"erschloss","part":"erschlossen","aux":"haben","du":"-","er":"-","k2":"erschlösse","imp":"erschließ","split":"-","flags":"-"},"hervorgehen":{"past":"ging","part":"hervorgegangen","aux":"sein","du":"-","er":"-","k2":"ginge","imp":"geh","split":"hervor","flags":"-"},"innewohnen":{"past":"wohnte","part":"innegewohnt","aux":"haben","du":"-","er":"-","k2":"-","imp":"-","split":"inne","flags":"third"},"obliegen":{"past":"oblag","part":"oblegen","aux":"haben","du":"-","er":"-","k2":"obläge","imp":"-","split":"-","flags":"third"},"preisgeben":{"past":"gab","part":"preisgegeben","aux":"haben","du":"gibst","er":"gibt","k2":"gäbe","imp":"gib","split":"preis","flags":"-"},"sich erschöpfen":{"past":"erschöpfte","part":"erschöpft","aux":"haben","du":"-","er":"-","k2":"-","imp":"erschöpf","split":"-","flags":"reflexive"},"sich zutragen":{"past":"trug","part":"zugetragen","aux":"haben","du":"trägst","er":"trägt","k2":"trüge","imp":"-","split":"zu","flags":"thirdref"},"unterbinden":{"past":"unterband","part":"unterbunden","aux":"haben","du":"-","er":"-","k2":"unterbände","imp":"unterbinde","split":"-","flags":"-"},"vergegenwärtigen":{"past":"vergegenwärtigte","part":"vergegenwärtigt","aux":"haben","du":"-","er":"-","k2":"-","imp":"vergegenwärtig","split":"-","flags":"-"},"verkennen":{"past":"verkannte","part":"verkannt","aux":"haben","du":"-","er":"-","k2":"verkennte","imp":"verkenn","split":"-","flags":"-"},"vermitteln":{"past":"vermittelte","part":"vermittelt","aux":"haben","du":"-","er":"-","k2":"-","imp":"vermittle","split":"-","flags":"-"},"verschleiern":{"past":"verschleierte","part":"verschleiert","aux":"haben","du":"-","er":"-","k2":"-","imp":"verschleier","split":"-","flags":"-"},"verzichten":{"past":"verzichtete","part":"verzichtet","aux":"haben","du":"-","er":"-","k2":"-","imp":"verzichte","split":"-","flags":"-"},"widerlegen":{"past":"widerlegte","part":"widerlegt","aux":"haben","du":"-","er":"-","k2":"-","imp":"widerleg","split":"-","flags":"-"},"zuwiderlaufen":{"past":"lief","part":"zuwidergelaufen","aux":"sein","du":"läufst","er":"läuft","k2":"liefe","imp":"lauf","split":"zuwider","flags":"-"}};
const AUDIT_HABEN = ['habe','hast','hat','haben','habt','haben'];
const AUDIT_SEIN = ['bin','bist','ist','sind','seid','sind'];
const AUDIT_HATTE = ['hatte','hattest','hatte','hatten','hattet','hatten'];
const AUDIT_WAR = ['war','warst','war','waren','wart','waren'];
const AUDIT_FUTURE = ['werde','wirst','wird','werden','werdet','werden'];
const AUDIT_WUERDE = ['würde','würdest','würde','würden','würdet','würden'];
const AUDIT_REFLEXIVE = ['mich','dich','sich','uns','euch','sich'];
const AUDIT_SIMPLE_SPECIAL = {
  sein: ['bin','bist','ist','sind','seid','sind'],
  haben: ['habe','hast','hat','haben','habt','haben'],
  werden: ['werde','wirst','wird','werden','werdet','werden'],
  wissen: ['weiß','weißt','weiß','wissen','wisst','wissen']
};
const AUDIT_K1_SPECIAL = {sein: ['sei','seiest','sei','seien','seiet','seien']};
const AUDIT_K2_SPECIAL = {
  sein: ['wäre','wärst','wäre','wären','wärt','wären'],
  haben: ['hätte','hättest','hätte','hätten','hättet','hätten'],
  werden: AUDIT_WUERDE
};
// -eln: ich entwickle, ich vermittle; -ern: ich fördere.
function auditedCoreStem(inf) {return inf.replace(/en$|n$/, '');}
function auditedPresent(inf, row) {
  if (AUDIT_SIMPLE_SPECIAL[inf]) return AUDIT_SIMPLE_SPECIAL[inf].slice();
  const s=auditedCoreStem(inf);
  const insert=/[td]$/.test(s)||/(?:[fgkptd]n|[dt]m)$/.test(s);
  const ich=inf.endsWith('eln')? s.slice(0,-2)+'le' : inf.endsWith('ern')?s+'e':s+'e';
  const du=row.du!=='-' ? row.du : s+(insert?'est':/[sßzx]$/.test(s)?'t':'st');
  const er=row.er!=='-' ? row.er : s+(insert?'et':'t');
  const ihr=s+(insert?'et':'t');
  return [ich,du,er,inf,ihr,inf];
}
function auditedPast(past) {
  if(past==='wurde') return ['wurde','wurdest','wurde','wurden','wurdet','wurden'];
  // Weak and mixed verbs have -te/-ete in the ich form.
  if(past.endsWith('te')) {const base=past.slice(0,-1);return [past,base+'est',past,base+'en',base+'et',base+'en'];}
  const needsE=/[dt]$/.test(past);
  const du=past+(needsE||/[sßz]$/.test(past)?'est':'st');
  return [past,du,past,past+'en',past+(needsE?'et':'t'),past+'en'];
}
function auditedKonjI(inf){
  if (AUDIT_K1_SPECIAL[inf]) return AUDIT_K1_SPECIAL[inf].slice();
  const s=auditedCoreStem(inf);
  // German -eln/-ern verbs retain indicative du/ihr forms in Konjunktiv I.
  if(inf.endsWith('eln') || inf.endsWith('ern')) {
    const indicative=auditedPresent(inf,{du:'-',er:'-'});
    return [indicative[0],indicative[1],indicative[0],inf,indicative[4],inf];
  }
  return [s+'e',s+'est',s+'e',inf,s+'et',inf];
}
function auditedKonjII(ich){
  const base=ich.slice(0,-1);
  return [ich,base+'est',ich,base+'en',base+'et',base+'en'];
}
function auditedRecord(verb){
  const row=AUDITED_VERB_LEXICON[verb];
  if (!row) return null;
  const prefixRule=row.split==='-'?null:row.split;
  const reflexive=verb.startsWith('sich ');
  const bare=reflexive?verb.slice(5):verb;
  const adj=row.flags==='adj';
  const prefix=prefixRule?(prefixRule.includes(':')?prefixRule.split(':')[0]:prefixRule):'';
  const core=adj?'erscheinen':prefixRule?(prefixRule.includes(':')?prefixRule.split(':')[1]:bare.slice(prefix.length)):bare;
  const present=auditedPresent(core,row);
  const past=auditedPast(row.past);
  const k1=auditedKonjI(core);
  const k2=AUDIT_K2_SPECIAL[verb]|| (row.k2!=='-'?auditedKonjII(row.k2):null);
  return {row,core,prefix,reflexive,bare,adj,present,past,k1,k2};
}
function auditedConjugateForm(verb,tense,person){
  const rec=auditedRecord(verb);
  if(!rec) return null; // user-created verbs keep the legacy fallback
  const {row,core,prefix,reflexive,adj,present,past,k1,k2}=rec;
  const p=person===6?5:person;
  const thirdOnly=['third','thirdref'].includes(row.flags);
  if(thirdOnly && p!==2 && p!==5) return '—';
  if(tense==='Imperativ') {
    if([0,2,5].includes(person)||thirdOnly||row.flags==='noimp'||row.imp==='-') return '—';
    const refl=reflexive?(' '+AUDIT_REFLEXIVE[p]):'';
    if(core==='sein')return person===1?'sei':person===3?'seien wir':person===4?'seid':'seien Sie';
    if(person===1)return row.imp+refl+(prefix?' '+prefix:'')+(adj?' abwegig':'');
    if(person===3)return core+' wir'+(reflexive?' uns':'')+(prefix?' '+prefix:'')+(adj?' abwegig':'');
    if(person===4)return present[4]+refl+(prefix?' '+prefix:'')+(adj?' abwegig':'');
    if(person===6)return core+' Sie'+(reflexive?' sich':'')+(prefix?' '+prefix:'')+(adj?' abwegig':'');
    return '—';
  }
  const refl=reflexive?' '+AUDIT_REFLEXIVE[p]:'';
  const tail=prefix?' '+prefix:'';
  const finite=(f)=>f+refl+tail+(adj?' abwegig':'');
  const aux=row.aux==='sein'?AUDIT_SEIN:AUDIT_HABEN;
  const pastAux=row.aux==='sein'?AUDIT_WAR:AUDIT_HATTE;
  const participle=(adj?'abwegig ':'')+row.part;
  if(tense==='Präsens')return finite(present[p]);
  if(tense==='Präteritum')return finite(past[p]);
  if(tense==='Konjunktiv I')return finite(k1[p]);
  if(tense==='Konjunktiv II')return k2?finite(k2[p]):AUDIT_WUERDE[p]+refl+' '+verb.replace(/^sich /,'') ;
  if(tense==='Perfekt')return aux[p]+refl+' '+participle;
  if(tense==='Plusquamperfekt')return pastAux[p]+refl+' '+participle;
  if(tense==='Futur I')return AUDIT_FUTURE[p]+refl+' '+(reflexive?verb.slice(5):verb);
  if(tense==='Futur II')return AUDIT_FUTURE[p]+refl+' '+participle+' '+row.aux;
  return '';
}
const previousConjugateBeforeFullAudit=conjugate;
conjugate=function(verb,tense,person){
  return auditedConjugateForm(verb,tense,person) ?? previousConjugateBeforeFullAudit(verb,tense,person);
};
function auditedAcceptedAnswers(verb,tense,person){
  const primary=conjugate(verb,tense,person);
  const answers=[primary];
  const row=AUDITED_VERB_LEXICON[verb];
  if(!row||primary==='—')return answers;
  const i=person===6?5:person;
  // Valid analytic Konjunktiv II alternatives.
  if(tense==='Konjunktiv II'&&row.k2!=='-'&&row.flags!=='adj'){
    answers.push(AUDIT_WUERDE[i]+(verb.startsWith('sich ')?' '+AUDIT_REFLEXIVE[i]:'')+' '+verb.replace(/^sich /,''));
  }
  // The synthetic Konjunktiv II of weak verbs matches their Präteritum.
  if(tense==='Konjunktiv II'&&row.k2==='-'&&row.past.endsWith('te')){
    const rec=auditedRecord(verb);
    answers.push(rec.past[i]+(rec.reflexive?' '+AUDIT_REFLEXIVE[i]:'')+(rec.prefix?' '+rec.prefix:'')+(rec.adj?' abwegig':''));
  }
  // Accepted short/long variants for verbs in -eln, e.g. vermittle / vermittele.
  const rec=auditedRecord(verb);
  if(rec.core.endsWith('eln')){
    if((tense==='Präsens'&&i===0)||(tense==='Konjunktiv I'&&(i===0||i===2))){
      answers.push(rec.core.slice(0,-1)+'e'+(rec.prefix?' '+rec.prefix:''));
    }
    if(tense==='Imperativ'&&person===1){
      const longBase=rec.core.slice(0,-1);
      answers.push(longBase+(rec.prefix?' '+rec.prefix:''));
      answers.push(longBase+'e'+(rec.prefix?' '+rec.prefix:''));
    }
  }
  if(tense==='Imperativ' && person===1 && row.imp!=='-' && !['iss','gib','nimm','sprich','hilf','triff','vergiss','lies','empfiehl','übernimm','unternimm','widersprich','entsprich','betriff'].includes(row.imp) && /[bcdfghjklmnpqrstvwxzß]$/.test(row.imp) && !/[td]$/.test(row.imp)) {
    const alt=primary.replace(row.imp,row.imp+'e');
    if(alt!==primary)answers.push(alt);
  }
  // Depending on meaning, pulling/dragging (ziehen) can use haben or sein.
  if(['ziehen','fahren','fliegen','laufen'].includes(verb)&&['Perfekt','Plusquamperfekt','Futur II'].includes(tense)){
    if(tense==='Perfekt')answers.push((row.aux==='haben'?AUDIT_SEIN[i]:AUDIT_HABEN[i])+' '+row.part);
    if(tense==='Plusquamperfekt')answers.push((row.aux==='haben'?AUDIT_WAR[i]:AUDIT_HATTE[i])+' '+row.part);
    if(tense==='Futur II')answers.push(AUDIT_FUTURE[i]+' '+row.part+' '+(row.aux==='haben'?'sein':'haben'));
  }
  return [...new Set(answers)];
}
function auditedNormalize(s){return s.normalize('NFC').toLocaleLowerCase('de-DE').replace(/[.!]+$/,'').replace(/\s+/g,' ').trim();}
function auditedAnswerMatches(verb,tense,person,answer){
  return auditedAcceptedAnswers(verb,tense,person).some(x=>auditedNormalize(x)===auditedNormalize(answer));
}
// Defective verbs: do not prompt for impossible persons.
const previousRenderCurrentVerbForFullAudit=renderCurrentVerb;
renderCurrentVerb=function(){
  // Preserve the physical keyboard element before the base renderer clears #exercise.
  const exerciseRoot=document.getElementById('exercise');
  const germanKeyboard=document.getElementById('specialLetters');
  if(germanKeyboard && exerciseRoot.contains(germanKeyboard)){
    exerciseRoot.before(germanKeyboard);
  }
  previousRenderCurrentVerbForFullAudit();
  // Put umlaut keys immediately before the first answer, within the tense card.
  const firstAnswerRow=exerciseRoot.querySelector('.exercise-tense .exercise-row');
  if(germanKeyboard && firstAnswerRow){firstAnswerRow.before(germanKeyboard);}
  currentExercises=currentExercises.filter(item=>{
    if(conjugate(item.verb,item.tense,item.index)!=='—')return true;
    item.input.disabled=true;
    item.input.placeholder='Not used with this pronoun';
    item.input.closest('.exercise-row').style.opacity='.38';
    item.status.textContent='—';
    return false;
  });
  // Rebind Enter navigation after removing inapplicable pronouns.
  currentExercises.forEach((item,index)=>{
    item.input.addEventListener('keydown',event=>{
      if(event.key!=='Enter'||event.isComposing)return;
      event.preventDefault();event.stopImmediatePropagation();
      const next=currentExercises.slice(index+1).find(x=>!x.input.disabled);
      if(next)next.input.focus();
      else {item.input.blur();checkCurrentVerb();}
    },true);
  });
  if(!currentExercises.length && practiceVerbs.length && currentVerbIndex < practiceVerbs.length){
    document.getElementById('answerActions').classList.add('hidden');
    document.getElementById('verbNavigation').classList.remove('hidden');
    document.getElementById('result').textContent='No applicable forms for the selected pronouns.';
    document.getElementById('result').classList.remove('hidden');
  }
};
// Grade known acceptable variants, rather than marking grammatical alternatives wrong.
checkCurrentVerb=function(){
  if(!currentExercises.length)return;
  let score=0;
  for(const item of currentExercises){
    if(item.input.dataset.inkAnswer==='true'){
      item.status.textContent='✎ Compare with: '+conjugate(item.verb,item.tense,item.index);
      item.status.className='status';
    }else if(auditedAnswerMatches(item.verb,item.tense,item.index,item.input.value)){
      score++;item.status.textContent='✓';item.status.className='status correct';
    }else{
      item.status.textContent='✗ '+conjugate(item.verb,item.tense,item.index);
      item.status.className='status wrong';
    }
    item.input.disabled=true;
  }
  document.getElementById('result').textContent=`Result: ${score} / ${currentExercises.length} correct`;
  document.getElementById('result').classList.remove('hidden');
  document.getElementById('answerActions').classList.add('hidden');
  document.getElementById('verbNavigation').classList.remove('hidden');
  showMotivation();
};
document.getElementById('checkAll').onclick=checkCurrentVerb;
showMotivation=function(){
  const element=document.getElementById('handwrittenMotivation');
  const correct=currentExercises.filter(x=>auditedAnswerMatches(x.verb,x.tense,x.index,x.input.value)).length;
  const ratio=currentExercises.length?correct/currentExercises.length:0;
  const message=appPhrase(ratio>=.83?'great':ratio>=.4?'good':'keepGoing');
  element.replaceChildren(document.createTextNode(message));
  const sig=document.createElement('span');sig.className='signature';sig.textContent=appPhrase('signature');
  element.append(sig);element.classList.remove('hidden');
};

// Keep the completed exercise and its navigation at the bottom of the page
// after checking answers, whether submitted by the button or the Enter key.
const checkCurrentVerbBeforeBottomScroll = checkCurrentVerb;
checkCurrentVerb = function (...args) {
  const result = checkCurrentVerbBeforeBottomScroll.apply(this, args);
  const navigation = document.getElementById('verbNavigation');
  if (navigation && !navigation.classList.contains('hidden')) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: Math.max(document.documentElement.scrollHeight, document.body.scrollHeight),
          behavior: 'instant'
        });
      });
    });
  }
  return result;
};
document.getElementById('checkAll').onclick = checkCurrentVerb;


// =========================================================
// PERSISTENT PRACTICE LIST + ERROR NOTIFICATIONS + BUG REPORTS
// =========================================================
(function enablePracticeListAndBugReports(){
  const PRACTICE_NAME='Practice';
  const allVerbs=[...new Set(Object.values(database).flat())].sort((a,b)=>a.localeCompare(b,'de'));
  const manager=document.getElementById('practiceListManager');
  const input=document.getElementById('practiceVerbInput');
  const options=document.getElementById('practiceVerbOptions');
  const selected=document.getElementById('practiceSelectedVerbs');
  const feedback=document.getElementById('practiceInputMessage');
  const toast=document.getElementById('practiceToast');
  let toastTimeout=null;

  allVerbs.forEach(verb=>{
    const option=document.createElement('option');
    option.value=verb;
    options.appendChild(option);
  });
  function textFor(s){return typeof uiTranslate==='function'?uiTranslate(s):s;}
  function announce(message){
    clearTimeout(toastTimeout);
    toast.textContent=message;
    toast.hidden=false;
    toastTimeout=setTimeout(()=>{toast.hidden=true;},5000);
  }
  function updatePracticeUI(){
    renderCustomLists();
    if(activeCustomList===PRACTICE_NAME)renderCustomListSettings();
  }
  function addPracticeVerb(verb,notify=false){
    if(!customLists[PRACTICE_NAME])customLists[PRACTICE_NAME]=[];
    if(customLists[PRACTICE_NAME].includes(verb))return false;
    customLists[PRACTICE_NAME].push(verb);
    saveCustomLists();
    updatePracticeUI();
    if(notify)announce(textFor('Added to Practice list')+': '+verb);
    return true;
  }
  function removePracticeVerb(verb){
    customLists[PRACTICE_NAME]=customLists[PRACTICE_NAME].filter(v=>v!==verb);
    saveCustomLists();
    updatePracticeUI();
    feedback.textContent=textFor('Removed from Practice list')+': '+verb;
  }
  function renderPracticeManager(){
    const visible=activeCustomList===PRACTICE_NAME;
    manager.classList.toggle('hidden',!visible);
    if(!visible)return;
    selected.replaceChildren();
    const verbs=customLists[PRACTICE_NAME]||[];
    if(!verbs.length){
      const empty=document.createElement('p');
      empty.className='practice-empty';
      empty.textContent=textFor('This list is empty. Mistakes will appear here.');
      selected.appendChild(empty);
    }
    verbs.forEach(verb=>{
      const item=document.createElement('span');item.className='practice-verb-chip';
      const name=document.createElement('span');name.textContent=verb;
      const remove=document.createElement('button');
      remove.type='button';remove.textContent='×';
      remove.title=textFor('Remove verb')+': '+verb;
      remove.setAttribute('aria-label',textFor('Remove verb')+': '+verb);
      remove.addEventListener('click',()=>removePracticeVerb(verb));
      item.append(name,remove);selected.appendChild(item);
    });
  }
  // Re-render the dedicated quick manager whenever any list's
  // selection controls change. The existing full-level checkboxes work too.
  const renderCustomSettingsBeforePractice=renderCustomListSettings;
  renderCustomListSettings=function(...args){
    const result=renderCustomSettingsBeforePractice.apply(this,args);
    renderPracticeManager();
    return result;
  };
  document.getElementById('practiceAddVerb').addEventListener('click',()=>{
    const requested=input.value.trim();
    const verb=allVerbs.find(v=>v.toLocaleLowerCase('de')===requested.toLocaleLowerCase('de'));
    if(!verb){feedback.textContent=textFor('Choose a verb from the suggestions.');return;}
    if(!addPracticeVerb(verb)){
      feedback.textContent=textFor('Already in Practice list')+': '+verb;
      return;
    }
    input.value='';feedback.textContent=textFor('Added to Practice list')+': '+verb;
  });
  input.addEventListener('keydown',event=>{
    if(event.key==='Enter'){
      event.preventDefault();
      document.getElementById('practiceAddVerb').click();
    }
  });

  // Inspect the final grading statuses (including legitimate alternate
  // conjugations) only on the first check for an exercise.
  const checkBeforePracticeList=checkCurrentVerb;
  checkCurrentVerb=function(...args){
    const actions=document.getElementById('answerActions');
    const pending=!actions.classList.contains('hidden') && currentExercises.length>0;
    const result=checkBeforePracticeList.apply(this,args);
    if(pending && currentExercises.some(item=>item.status.classList.contains('wrong'))){
      const wrongVerb=currentExercises.find(item=>item.status.classList.contains('wrong')).verb;
      addPracticeVerb(wrongVerb,true);
    }
    return result;
  };
  document.getElementById('checkAll').onclick=checkCurrentVerb;

  const dialog=document.getElementById('bugReportDialog');
  const description=document.getElementById('bugDescription');
  const steps=document.getElementById('bugSteps');
  const category=document.getElementById('bugCategory');
  const status=document.getElementById('bugReportStatus');
  const trigger=document.getElementById('openBugReport');
  let previousFocus=null;

  function openBugReport(){
    // Close settings before opening the modal.
    document.getElementById('closeSettings').click();
    previousFocus=trigger;
    status.textContent='';
    dialog.classList.remove('hidden');
    dialog.setAttribute('aria-hidden','false');
    description.focus();
  }
  function closeBugReport(){
    dialog.classList.add('hidden');
    dialog.setAttribute('aria-hidden','true');
    trigger.focus();
  }
  trigger.addEventListener('click',openBugReport);
  document.getElementById('closeBugReport').addEventListener('click',closeBugReport);
  dialog.addEventListener('pointerdown',event=>{
    if(event.target===dialog)closeBugReport();
  });
  document.addEventListener('keydown',event=>{
    if(dialog.classList.contains('hidden'))return;
    if(event.key==='Escape'){
      event.preventDefault();event.stopPropagation();closeBugReport();
    }
    if(event.key==='Tab'){
      const active=[...dialog.querySelectorAll('input,textarea,select,button')]
        .filter(el=>!el.disabled&&!el.hidden);
      if(event.shiftKey&&document.activeElement===active[0]){
        event.preventDefault();active.at(-1).focus();
      }else if(!event.shiftKey&&document.activeElement===active.at(-1)){
        event.preventDefault();active[0].focus();
      }
    }
  },true);
  function formatBugReport(){
    const onPractice=!document.getElementById('page3').classList.contains('hidden');
    const verb=onPractice?practiceVerbs[currentVerbIndex]||'—':'—';
    const tense=onPractice?selectedTenses[currentTenseIndex]||'—':'—';
    return [
      'GERMAN VERB TRAINER — BUG REPORT',
      'Category: '+category.value,
      'Details: '+description.value.trim(),
      'Steps to reproduce: '+(steps.value.trim()||'Not provided'),
      'Current verb: '+verb,
      'Current tense: '+tense,
      'Interface language: '+interfaceLocale,
      'Reported at: '+new Date().toISOString()
    ].join('\n');
  }
  function validateReport(){
    if(description.value.trim())return true;
    status.textContent=textFor('Please describe the bug first.');
    description.focus();
    return false;
  }
  const bugReportForm=document.getElementById('bugReportForm');
  // A browser-native POST avoids AJAX/CORS failures and displays FormSubmit's
  // actual success/activation/error page. It does NOT guarantee inbox delivery;
  // the FormSubmit form must first be activated by the recipient.
  bugReportForm.addEventListener('submit',event=>{
    if(!validateReport()){
      event.preventDefault();
      return;
    }
    if(window.location.protocol==='file:'){
      event.preventDefault();
      status.textContent=textFor('To send reports, publish the site or use a local web server. Opening index.html directly will not work.');
      return;
    }
    const onPractice=!document.getElementById('page3').classList.contains('hidden');
    document.getElementById('bugCurrentVerb').value=onPractice?practiceVerbs[currentVerbIndex]||'—':'—';
    document.getElementById('bugCurrentTense').value=onPractice?selectedTenses[currentTenseIndex]||'—':'—';
    document.getElementById('bugInterfaceLanguage').value=interfaceLocale;
    document.getElementById('bugPageUrl').value=window.location.href;
    document.getElementById('bugReportedAt').value=new Date().toISOString();
    document.getElementById('bugSubject').value='German Verb Trainer — '+category.value+' bug';
    status.textContent=textFor('Check the FormSubmit tab for confirmation or activation instructions.');
    // Intentionally do not preventDefault(): let the browser send the native form.
  });
  document.getElementById('copyBugReport').addEventListener('click',async()=>{
    if(!validateReport())return;
    const content=formatBugReport();
    try{
      if(navigator.clipboard?.writeText)await navigator.clipboard.writeText(content);
      else throw new Error('Clipboard API unavailable');
      status.textContent=textFor('Report copied. Share it with the developer.');
    }catch(error){
      const hidden=document.createElement('textarea');
      hidden.value=content;
      hidden.style.position='fixed';hidden.style.opacity='0';
      document.body.appendChild(hidden);hidden.select();
      const copied=!!document.execCommand?.('copy');
      hidden.remove();
      status.textContent=copied?textFor('Report copied. Share it with the developer.'):
        textFor('Copy unavailable. Use Email report instead.');
    }
  });
})();

// New feature labels follow the trainer's existing interface localization.
Object.assign(UI_LANGUAGES, {
  'Manage & practise':{ar:'إدارة القائمة والتدرّب',fr:'Gérer et s’entraîner',de:'Verwalten und üben',es:'Gestionar y practicar'},
  'Verbs you miss are saved here automatically.':{ar:'تُحفظ هنا الأفعال التي تخطئ فيها تلقائيًا.',fr:'Les verbes ratés sont enregistrés ici automatiquement.',de:'Falsch beantwortete Verben werden hier automatisch gespeichert.',es:'Los verbos que respondas mal se guardan aquí automáticamente.'},
  'Your Practice list':{ar:'قائمة التمرين الخاصة بك',fr:'Votre liste de révision',de:'Deine Übungsliste',es:'Tu lista de práctica'},
  'Any verb you get wrong is saved here automatically. Add or remove verbs whenever you like.':{ar:'يُحفظ أي فعل تخطئ فيه هنا تلقائيًا. يمكنك إضافة الأفعال أو حذفها متى شئت.',fr:'Chaque verbe raté est enregistré automatiquement. Ajoutez ou retirez des verbes à tout moment.',de:'Falsch beantwortete Verben werden automatisch gespeichert. Du kannst jederzeit Verben hinzufügen oder entfernen.',es:'Los verbos que falles se guardarán automáticamente. Puedes añadir o quitar verbos cuando quieras.'},
  'Add a verb':{ar:'أضف فعلًا',fr:'Ajouter un verbe',de:'Verb hinzufügen',es:'Añadir verbo'},
  'Search for a German verb':{ar:'ابحث عن فعل ألماني',fr:'Rechercher un verbe allemand',de:'Deutsches Verb suchen',es:'Buscar un verbo alemán'},
  '＋ Add':{ar:'＋ إضافة',fr:'＋ Ajouter',de:'＋ Hinzufügen',es:'＋ Añadir'},
  'Added to Practice list':{ar:'أُضيف إلى قائمة التمرين',fr:'Ajouté à la liste de révision',de:'Zur Übungsliste hinzugefügt',es:'Añadido a la lista de práctica'},
  'Removed from Practice list':{ar:'أُزيل من قائمة التمرين',fr:'Retiré de la liste de révision',de:'Aus der Übungsliste entfernt',es:'Quitado de la lista de práctica'},
  'Already in Practice list':{ar:'موجود بالفعل في قائمة التمرين',fr:'Déjà dans la liste de révision',de:'Bereits in der Übungsliste',es:'Ya está en la lista de práctica'},
  'Remove verb':{ar:'إزالة الفعل',fr:'Retirer le verbe',de:'Verb entfernen',es:'Quitar verbo'},
  'Choose a verb from the suggestions.':{ar:'اختر فعلًا من الاقتراحات.',fr:'Choisissez un verbe parmi les suggestions.',de:'Bitte ein Verb aus den Vorschlägen wählen.',es:'Elige un verbo de las sugerencias.'},
  'This list is empty. Mistakes will appear here.':{ar:'هذه القائمة فارغة. ستظهر هنا الأفعال التي تخطئ فيها.',fr:'Cette liste est vide. Les erreurs apparaîtront ici.',de:'Diese Liste ist leer. Fehler erscheinen hier.',es:'Esta lista está vacía. Los errores aparecerán aquí.'},
  'Help & feedback':{ar:'المساعدة والملاحظات',fr:'Aide et retours',de:'Hilfe & Feedback',es:'Ayuda y comentarios'},
  'Found a problem with a verb, translation or the website?':{ar:'هل وجدت مشكلة في فعل أو ترجمة أو الموقع؟',fr:'Un problème avec un verbe, une traduction ou le site ?',de:'Ein Problem mit einem Verb, einer Übersetzung oder der Website?',es:'¿Encontraste algún problema con un verbo, una traducción o la web?'},
  'Report a bug':{ar:'الإبلاغ عن خطأ',fr:'Signaler un problème',de:'Fehler melden',es:'Informar de un error'},
  'Describe the problem. You can copy the report or open an email draft to share it.':{ar:'صف المشكلة. يمكنك نسخ البلاغ أو فتح مسودة بريد لمشاركته.',fr:'Décrivez le problème. Copiez le signalement ou ouvrez un brouillon d’e-mail.',de:'Beschreibe das Problem. Kopiere die Meldung oder öffne einen E-Mail-Entwurf.',es:'Describe el problema. Copia el informe o abre un borrador de correo.'},
  'Type of issue':{ar:'نوع المشكلة',fr:'Type de problème',de:'Art des Problems',es:'Tipo de problema'},
  'What went wrong?':{ar:'ما الخطأ الذي حدث؟',fr:'Que s’est-il passé ?',de:'Was ist schiefgelaufen?',es:'¿Qué ha fallado?'},
  'Describe the bug...':{ar:'صف الخطأ...',fr:'Décrivez le problème...',de:'Beschreibe den Fehler...',es:'Describe el error...'},
  'How can we reproduce it? (optional)':{ar:'كيف يمكن إعادة ظهور الخطأ؟ (اختياري)',fr:'Comment reproduire le problème ? (facultatif)',de:'Wie lässt sich der Fehler reproduzieren? (optional)',es:'¿Cómo podemos reproducirlo? (opcional)'},
  'Steps to reproduce the problem...':{ar:'خطوات إعادة ظهور المشكلة...',fr:'Étapes pour reproduire le problème...',de:'Schritte zum Reproduzieren...',es:'Pasos para reproducir el problema...'},
  'Reports include the current verb, tense and app language. Nothing is sent automatically.':{ar:'يتضمن البلاغ الفعل والزمن ولغة التطبيق الحالية. لا يُرسل شيء تلقائيًا.',fr:'Le signalement inclut le verbe, le temps et la langue de l’application. Aucun envoi automatique.',de:'Die Meldung enthält Verb, Zeitform und App-Sprache. Nichts wird automatisch gesendet.',es:'El informe incluye el verbo, tiempo e idioma de la aplicación. Nada se envía automáticamente.'},
  'Send a bug report directly to the support team without opening an email app.':{ar:'أرسل بلاغ الخطأ مباشرة إلى فريق الدعم دون فتح تطبيق البريد.',fr:'Envoyez le signalement directement à l’équipe sans ouvrir votre messagerie.',de:'Sende einen Fehlerbericht direkt an das Team, ohne eine E-Mail-App zu öffnen.',es:'Envía el informe directamente al equipo sin abrir una app de correo.'},
  'Reports include the current verb, tense and app language. Sent to contact@studyzone.tech only when you press Send report.':{ar:'يتضمن البلاغ الفعل والزمن ولغة التطبيق. يُرسل إلى contact@studyzone.tech فقط عند الضغط على إرسال.',fr:'Le rapport inclut le verbe, le temps et la langue. Envoi à contact@studyzone.tech seulement après confirmation.',de:'Der Bericht enthält Verb, Zeitform und Sprache. Versand an contact@studyzone.tech nur nach Klick auf Senden.',es:'El informe incluye verbo, tiempo e idioma. Se envía a contact@studyzone.tech solo al pulsar Enviar.'},
  'Send report':{ar:'إرسال البلاغ',fr:'Envoyer le signalement',de:'Bericht senden',es:'Enviar informe'},
  'Sending…':{ar:'جارٍ الإرسال…',fr:'Envoi en cours…',de:'Wird gesendet…',es:'Enviando…'},
  'Report submitted for delivery to contact@studyzone.tech.':{ar:'تم تقديم البلاغ لإرساله إلى contact@studyzone.tech.',fr:'Rapport soumis pour transmission à contact@studyzone.tech.',de:'Bericht zur Zustellung an contact@studyzone.tech eingereicht.',es:'Informe presentado para su entrega a contact@studyzone.tech.'},
  'Could not send the report. Try again, or copy the report.':{ar:'تعذّر إرسال البلاغ. أعد المحاولة أو انسخه.',fr:'Envoi impossible. Réessayez ou copiez le rapport.',de:'Senden fehlgeschlagen. Versuche es erneut oder kopiere den Bericht.',es:'No se pudo enviar. Inténtalo de nuevo o copia el informe.'},
  'Publish the website online to enable direct bug reports.':{ar:'انشر الموقع على الإنترنت لتفعيل إرسال البلاغات مباشرة.',fr:'Publiez le site en ligne pour activer l’envoi des rapports.',de:'Veröffentliche die Website online, um Berichte direkt zu senden.',es:'Publica el sitio web para activar el envío directo.'},
  'Copy report':{ar:'نسخ البلاغ',fr:'Copier le signalement',de:'Meldung kopieren',es:'Copiar informe'},
  'Email report':{ar:'إرسال عبر البريد',fr:'Envoyer par e-mail',de:'Per E-Mail senden',es:'Enviar por correo'},
  'Close bug report':{ar:'إغلاق البلاغ',fr:'Fermer le signalement',de:'Meldung schließen',es:'Cerrar informe'},
  'Please describe the bug first.':{ar:'يرجى وصف الخطأ أولًا.',fr:'Veuillez d’abord décrire le problème.',de:'Bitte beschreibe zuerst den Fehler.',es:'Describe el error primero.'},
  'Report copied. Share it with the developer.':{ar:'نُسخ البلاغ. شاركه مع المطوّر.',fr:'Signalement copié. Partagez-le avec le développeur.',de:'Meldung kopiert. Teile sie mit dem Entwickler.',es:'Informe copiado. Compártelo con el desarrollador.'},
  'Copy unavailable. Use Email report instead.':{ar:'تعذّر النسخ. استخدم البريد بدلًا منه.',fr:'Copie impossible. Utilisez plutôt l’e-mail.',de:'Kopieren nicht möglich. Verwende die E-Mail-Option.',es:'No se pudo copiar. Usa la opción de correo.'},
  'Email draft opened. Choose a recipient and send it.':{ar:'تم طلب فتح مسودة بريد. اختر المستلم وأرسلها.',fr:'Ouverture du brouillon demandée. Choisissez un destinataire et envoyez-le.',de:'E-Mail-Entwurf angefordert. Empfänger auswählen und senden.',es:'Se ha solicitado abrir el borrador. Elige destinatario y envíalo.'}
});
uiTranslateTree(document.body);

// Additional reporting-status translations.
Object.assign(UI_LANGUAGES, {
 'Inbox activation required: check contact@studyzone.tech for the FormSubmit activation email, then try again.': {
  ar:'يلزم تفعيل العنوان: افتح بريد contact@studyzone.tech وأكّد رسالة FormSubmit ثم أعد المحاولة.',
  fr:'Activation requise : confirmez le lien FormSubmit envoyé à contact@studyzone.tech, puis réessayez.',
  de:'Aktivierung nötig: Den FormSubmit-Link im Postfach contact@studyzone.tech bestätigen und erneut senden.',
  es:'Activación necesaria: confirma el correo de FormSubmit en contact@studyzone.tech y vuelve a intentarlo.'},
 'Direct sending failed. Use the secure form below (no email login needed).': {
  ar:'تعذّر الإرسال المباشر. استخدم النموذج الآمن أدناه دون تسجيل الدخول للبريد.',
  fr:'Envoi direct impossible. Utilisez le formulaire sécurisé ci-dessous, sans connexion e-mail.',
  de:'Direktversand fehlgeschlagen. Nutze das sichere Formular unten, ohne E-Mail-Anmeldung.',
  es:'Falló el envío directo. Usa el formulario seguro de abajo, sin iniciar sesión en el correo.'},
 'Send via secure form': {ar:'إرسال عبر نموذج آمن',fr:'Envoyer via le formulaire sécurisé',de:'Über sicheres Formular senden',es:'Enviar mediante formulario seguro'},
 'Check the newly opened FormSubmit page to confirm the result.': {
  ar:'تحقّق من صفحة FormSubmit التي فُتحت لتأكيد نتيجة الإرسال.',
  fr:'Vérifiez la page FormSubmit ouverte pour confirmer le résultat.',
  de:'Prüfe die geöffnete FormSubmit-Seite, um den Versand zu bestätigen.',
  es:'Revisa la página FormSubmit abierta para confirmar el envío.'}
});

// Strings for the native report submission flow.
Object.assign(UI_LANGUAGES,{
  'Reports include the verb, tense and interface language. Sending opens a FormSubmit confirmation page (no email login required).': {ar:'يتضمن البلاغ الفعل والزمن ولغة الواجهة. تفتح صفحة تأكيد FormSubmit دون تسجيل الدخول إلى البريد.',fr:'Le rapport inclut le verbe, le temps et la langue. Une page de confirmation FormSubmit s’ouvre sans connexion e-mail.',de:'Der Bericht enthält Verb, Zeitform und Sprache. Eine FormSubmit-Bestätigungsseite öffnet sich ohne E-Mail-Anmeldung.',es:'El informe incluye verbo, tiempo e idioma. Se abre una página de confirmación de FormSubmit sin iniciar sesión en el correo.'},
  'To send reports, publish the site or use a local web server. Opening index.html directly will not work.': {ar:'لإرسال البلاغات، انشر الموقع أو شغّله بخادم ويب محلي. فتح index.html مباشرةً لن يعمل.',fr:'Publiez le site ou utilisez un serveur local. Ouvrir index.html directement ne fonctionne pas.',de:'Bitte die Website veröffentlichen oder einen lokalen Webserver nutzen. Direktes Öffnen von index.html funktioniert nicht.',es:'Publica el sitio o usa un servidor local. Abrir index.html directamente no funciona.'},
  'Check the FormSubmit tab for confirmation or activation instructions.': {ar:'تحقق من تبويب FormSubmit للتأكيد أو تعليمات التفعيل.',fr:'Consultez l’onglet FormSubmit pour la confirmation ou les instructions d’activation.',de:'Prüfe den FormSubmit-Tab auf Bestätigung oder Aktivierungsanweisungen.',es:'Consulta la pestaña de FormSubmit para ver la confirmación o instrucciones de activación.'}
});
uiTranslateTree(document.body);


// =========================================================
// COMPLETE INTERFACE LOCALIZATION
// Every visible page, settings section and newer Practice/bug-report UI.
// German verb forms and tense names intentionally remain German study content.
// =========================================================
const COMPLETE_UI_TRANSLATIONS = {"PERSONALISE YOUR STUDY":{"ar":"خصّص دراستك","kab":"SEGGEM ALMMUD-IK","fr":"PERSONNALISEZ VOTRE APPRENTISSAGE","de":"DEIN LERNEN ANPASSEN","es":"PERSONALIZA TU ESTUDIO","it":"PERSONALIZZA IL TUO STUDIO","pt":"PERSONALIZE SEU ESTUDO","tr":"ÇALIŞMANI ÖZELLEŞTİR","nl":"PAS JE STUDIE AAN","ru":"НАСТРОЙТЕ ОБУЧЕНИЕ"},"Settings":{"ar":"الإعدادات","kab":"Iɣewwaṛen","fr":"Paramètres","de":"Einstellungen","es":"Ajustes","it":"Impostazioni","pt":"Configurações","tr":"Ayarlar","nl":"Instellingen","ru":"Настройки"},"Appearance":{"ar":"المظهر","kab":"Udem","fr":"Apparence","de":"Darstellung","es":"Apariencia","it":"Aspetto","pt":"Aparência","tr":"Görünüm","nl":"Weergave","ru":"Внешний вид"},"Choose how your notebook looks.":{"ar":"اختر مظهر دفتر التعلّم.","kab":"Fren amek ara d-yettban uɣmis-ik n ulmmud.","fr":"Choisissez l’apparence de votre carnet.","de":"Wähle das Aussehen deines Lernhefts.","es":"Elige el aspecto de tu cuaderno.","it":"Scegli l’aspetto del tuo quaderno.","pt":"Escolha a aparência do seu caderno.","tr":"Defterinin görünümünü seç.","nl":"Kies hoe je schrift eruitziet.","ru":"Выберите оформление тетради."},"Theme":{"ar":"السمة","kab":"Asentel","fr":"Thème","de":"Design","es":"Tema","it":"Tema","pt":"Tema","tr":"Tema","nl":"Thema","ru":"Тема"},"Choose theme":{"ar":"اختر السمة","kab":"Fren asentel","fr":"Choisir le thème","de":"Design wählen","es":"Elegir tema","it":"Scegli tema","pt":"Escolher tema","tr":"Tema seç","nl":"Thema kiezen","ru":"Выбрать тему"},"Notebook":{"ar":"دفتر","kab":"Aɣmis","fr":"Carnet","de":"Notizbuch","es":"Cuaderno","it":"Quaderno","pt":"Caderno","tr":"Defter","nl":"Schrift","ru":"Тетрадь"},"Midnight":{"ar":"منتصف الليل","kab":"Talemmast n yiḍ","fr":"Minuit","de":"Mitternacht","es":"Medianoche","it":"Mezzanotte","pt":"Meia-noite","tr":"Gece yarısı","nl":"Middernacht","ru":"Полночь"},"Ocean":{"ar":"محيط","kab":"Agraw","fr":"Océan","de":"Ozean","es":"Océano","it":"Oceano","pt":"Oceano","tr":"Okyanus","nl":"Oceaan","ru":"Океан"},"Rose":{"ar":"وردي","kab":"Rose","fr":"Rose","de":"Rosa","es":"Rosa","it":"Rosa","pt":"Rosa","tr":"Pembe","nl":"Roze","ru":"Розовый"},"Minimal":{"ar":"بسيط","kab":"Aḥerfi","fr":"Minimal","de":"Minimal","es":"Minimal","it":"Minimal","pt":"Minimal","tr":"Sade","nl":"Minimaal","ru":"Минимализм"},"Change the interface and verb meanings.":{"ar":"غيّر لغة الواجهة ومعاني الأفعال.","kab":"Beddel tutlayt n ugrudem d unamek n yimyagen.","fr":"Changez la langue de l’interface et le sens des verbes.","de":"Ändere die Sprache der Oberfläche und die Verb-Bedeutungen.","es":"Cambia el idioma de la interfaz y los significados de los verbos.","it":"Cambia la lingua dell’interfaccia e i significati dei verbi.","pt":"Altere o idioma da interface e os significados dos verbos.","tr":"Arayüz dilini ve fiil anlamlarını değiştir.","nl":"Wijzig de interfacetaal en betekenissen van werkwoorden.","ru":"Измените язык интерфейса и значения глаголов."},"Interface language":{"ar":"لغة الواجهة","kab":"Tutlayt n ugrudem","fr":"Langue de l’interface","de":"Oberflächensprache","es":"Idioma de la interfaz","it":"Lingua dell’interfaccia","pt":"Idioma da interface","tr":"Arayüz dili","nl":"Interfacetaal","ru":"Язык интерфейса"},"Practice":{"ar":"التدريب","kab":"Aɛraḍ","fr":"Entraînement","de":"Übung","es":"Práctica","it":"Pratica","pt":"Prática","tr":"Alıştırma","nl":"Oefenen","ru":"Практика"},"Adjust your exercises during a session.":{"ar":"عدّل تمارينك أثناء الجلسة.","kab":"Seggem iɛraḍen-ik deg temẓla.","fr":"Ajustez vos exercices pendant la session.","de":"Passe deine Übungen während einer Sitzung an.","es":"Ajusta tus ejercicios durante la sesión.","it":"Modifica gli esercizi durante la sessione.","pt":"Ajuste os exercícios durante a sessão.","tr":"Oturum sırasında alıştırmalarını düzenle.","nl":"Pas je oefeningen tijdens een sessie aan.","ru":"Настраивайте упражнения во время занятия."},"Writing":{"ar":"الكتابة","kab":"Tira","fr":"Écriture","de":"Schreiben","es":"Escritura","it":"Scrittura","pt":"Escrita","tr":"Yazma","nl":"Schrijven","ru":"Ввод текста"},"Show German character keyboard":{"ar":"إظهار لوحة الأحرف الألمانية","kab":"Sken tanarit n yisekkilen n talmanit","fr":"Afficher le clavier de caractères allemands","de":"Tastatur für deutsche Zeichen anzeigen","es":"Mostrar teclado de caracteres alemanes","it":"Mostra la tastiera dei caratteri tedeschi","pt":"Mostrar teclado de caracteres alemães","tr":"Almanca karakter klavyesini göster","nl":"Toon toetsenbord met Duitse tekens","ru":"Показывать клавиатуру немецких символов"},"Large answer text":{"ar":"نص إجابة كبير","kab":"Aḍris n tiririt meqqren","fr":"Texte de réponse agrandi","de":"Großer Antworttext","es":"Texto de respuesta grande","it":"Testo risposta grande","pt":"Texto de resposta grande","tr":"Büyük cevap metni","nl":"Grote antwoordtekst","ru":"Крупный текст ответа"},"Help & feedback":{"ar":"المساعدة والملاحظات","kab":"Tallalt d tmuɣli","fr":"Aide et retours","de":"Hilfe & Feedback","es":"Ayuda y comentarios","it":"Aiuto e feedback","pt":"Ajuda e comentários","tr":"Yardım ve geri bildirim","nl":"Hulp en feedback","ru":"Помощь и обратная связь"},"Found a problem with a verb, translation or the website?":{"ar":"هل وجدت مشكلة في فعل أو ترجمة أو الموقع؟","kab":"Tufiḍ ugur deg umyag, tasuqilt neɣ asmel?","fr":"Un problème avec un verbe, une traduction ou le site ?","de":"Ein Problem mit einem Verb, einer Übersetzung oder der Website?","es":"¿Encontraste algún problema con un verbo, una traducción o la web?","it":"Hai trovato un problema con un verbo, una traduzione o il sito?","pt":"Encontrou um problema com um verbo, uma tradução ou o site?","tr":"Bir fiil, çeviri veya sitede sorun mu buldun?","nl":"Een probleem gevonden met een werkwoord, vertaling of de website?","ru":"Нашли проблему с глаголом, переводом или сайтом?"},"Preferences":{"ar":"التفضيلات","kab":"Ismenyifen","fr":"Préférences","de":"Voreinstellungen","es":"Preferencias","it":"Preferenze","pt":"Preferências","tr":"Tercihler","nl":"Voorkeuren","ru":"Предпочтения"},"Restore default settings":{"ar":"استعادة الإعدادات الافتراضية","kab":"Err-d iɣewwaṛen n lexṣas","fr":"Rétablir les paramètres par défaut","de":"Standardeinstellungen wiederherstellen","es":"Restaurar ajustes predeterminados","it":"Ripristina impostazioni predefinite","pt":"Restaurar configurações padrão","tr":"Varsayılan ayarları geri yükle","nl":"Standaardinstellingen herstellen","ru":"Восстановить настройки по умолчанию"},"Open settings":{"ar":"فتح الإعدادات","kab":"Ldi iɣewwaṛen","fr":"Ouvrir les paramètres","de":"Einstellungen öffnen","es":"Abrir ajustes","it":"Apri impostazioni","pt":"Abrir configurações","tr":"Ayarları aç","nl":"Instellingen openen","ru":"Открыть настройки"},"Close settings":{"ar":"إغلاق الإعدادات","kab":"Mdel iɣewwaṛen","fr":"Fermer les paramètres","de":"Einstellungen schließen","es":"Cerrar ajustes","it":"Chiudi impostazioni","pt":"Fechar configurações","tr":"Ayarları kapat","nl":"Instellingen sluiten","ru":"Закрыть настройки"},"Quick language selection":{"ar":"اختيار سريع للغة","kab":"Afran arurad n tutlayt","fr":"Sélection rapide de la langue","de":"Schnelle Sprachauswahl","es":"Selección rápida de idioma","it":"Selezione rapida della lingua","pt":"Seleção rápida de idioma","tr":"Hızlı dil seçimi","nl":"Snelle taalkeuze","ru":"Быстрый выбор языка"},"Your saved verb lists":{"ar":"قوائم الأفعال المحفوظة","kab":"Tibdarin-ik n yimyagen yettwakelsen","fr":"Vos listes de verbes enregistrées","de":"Deine gespeicherten Verblisten","es":"Tus listas de verbos guardadas","it":"Le tue liste di verbi salvate","pt":"Suas listas de verbos salvas","tr":"Kaydedilmiş fiil listelerin","nl":"Je opgeslagen werkwoordenlijsten","ru":"Ваши сохранённые списки глаголов"},"Practice list manager":{"ar":"إدارة قائمة التدريب","kab":"Amsefrak n tebdart n uɛraḍ","fr":"Gestionnaire de la liste de révision","de":"Verwaltung der Übungsliste","es":"Gestor de la lista de práctica","it":"Gestione lista di pratica","pt":"Gerenciador da lista de prática","tr":"Alıştırma listesi yöneticisi","nl":"Beheer van de oefenlijst","ru":"Управление списком практики"},"Saved practice verbs":{"ar":"أفعال التدريب المحفوظة","kab":"Imyagen n uɛraḍ yettwakelsen","fr":"Verbes de révision enregistrés","de":"Gespeicherte Übungsverben","es":"Verbos de práctica guardados","it":"Verbi di pratica salvati","pt":"Verbos de prática salvos","tr":"Kaydedilmiş alıştırma fiilleri","nl":"Opgeslagen oefenwerkwoorden","ru":"Сохранённые глаголы для практики"},"German special characters":{"ar":"الأحرف الألمانية الخاصة","kab":"Isekkilen n talmanit","fr":"Caractères spéciaux allemands","de":"Deutsche Sonderzeichen","es":"Caracteres especiales alemanes","it":"Caratteri speciali tedeschi","pt":"Caracteres especiais alemães","tr":"Almanca özel karakterler","nl":"Duitse speciale tekens","ru":"Специальные немецкие символы"},"⌂ Home":{"ar":"⌂ الرئيسية","kab":"⌂ Agejdan","fr":"⌂ Accueil","de":"⌂ Startseite","es":"⌂ Inicio","it":"⌂ Home","pt":"⌂ Início","tr":"⌂ Ana sayfa","nl":"⌂ Start","ru":"⌂ Главная"},"Manage & practise":{"ar":"إدارة القائمة والتدرّب","kab":"Sefrek u ɛreḍ","fr":"Gérer et s’entraîner","de":"Verwalten und üben","es":"Gestionar y practicar","it":"Gestisci e pratica","pt":"Gerenciar e praticar","tr":"Yönet ve çalış","nl":"Beheren en oefenen","ru":"Управлять и практиковаться"},"Verbs you miss are saved here automatically.":{"ar":"تُحفظ هنا الأفعال التي تخطئ فيها تلقائيًا.","kab":"Imyagen i teskecmeḍ s tuccḍa ttwaklasen dagi s wudem awurman.","fr":"Les verbes ratés sont enregistrés ici automatiquement.","de":"Falsch beantwortete Verben werden hier automatisch gespeichert.","es":"Los verbos que respondas mal se guardan aquí automáticamente.","it":"I verbi sbagliati vengono salvati qui automaticamente.","pt":"Os verbos errados são salvos aqui automaticamente.","tr":"Yanlış yaptığın fiiller buraya otomatik kaydedilir.","nl":"Werkwoorden die je fout hebt worden hier automatisch opgeslagen.","ru":"Глаголы с ошибками автоматически сохраняются здесь."},"Your Practice list":{"ar":"قائمة التمرين الخاصة بك","kab":"Tabdart-ik n uɛraḍ","fr":"Votre liste de révision","de":"Deine Übungsliste","es":"Tu lista de práctica","it":"La tua lista di pratica","pt":"Sua lista de prática","tr":"Alıştırma listen","nl":"Je oefenlijst","ru":"Ваш список практики"},"Any verb you get wrong is saved here automatically. Add or remove verbs whenever you like.":{"ar":"يُحفظ أي فعل تخطئ فيه هنا تلقائيًا. يمكنك إضافة الأفعال أو حذفها متى شئت.","kab":"Yal amyag i teskecmeḍ s tuccḍa ad yettwakles dagi s wudem awurman. Rnu neɣ kkes imyagen melmi tebɣiḍ.","fr":"Chaque verbe raté est enregistré automatiquement. Ajoutez ou retirez des verbes à tout moment.","de":"Falsch beantwortete Verben werden automatisch gespeichert. Du kannst jederzeit Verben hinzufügen oder entfernen.","es":"Los verbos que falles se guardarán automáticamente. Puedes añadir o quitar verbos cuando quieras.","it":"Ogni verbo sbagliato viene salvato automaticamente. Puoi aggiungere o rimuovere verbi quando vuoi.","pt":"Todo verbo errado é salvo automaticamente. Você pode adicionar ou remover verbos quando quiser.","tr":"Yanlış yaptığın her fiil otomatik kaydedilir. İstediğin zaman fiil ekleyebilir veya kaldırabilirsin.","nl":"Elk fout werkwoord wordt automatisch opgeslagen. Voeg of verwijder werkwoorden wanneer je wilt.","ru":"Каждый глагол с ошибкой сохраняется автоматически. Добавляйте или удаляйте глаголы в любое время."},"Add a verb":{"ar":"أضف فعلًا","kab":"Rnu amyag","fr":"Ajouter un verbe","de":"Verb hinzufügen","es":"Añadir verbo","it":"Aggiungi un verbo","pt":"Adicionar um verbo","tr":"Fiil ekle","nl":"Werkwoord toevoegen","ru":"Добавить глагол"},"Search for a German verb":{"ar":"ابحث عن فعل ألماني","kab":"Nadi amyag n talmanit","fr":"Rechercher un verbe allemand","de":"Deutsches Verb suchen","es":"Buscar un verbo alemán","it":"Cerca un verbo tedesco","pt":"Buscar um verbo alemão","tr":"Almanca fiil ara","nl":"Zoek een Duits werkwoord","ru":"Найти немецкий глагол"},"＋ Add":{"ar":"＋ إضافة","kab":"＋ Rnu","fr":"＋ Ajouter","de":"＋ Hinzufügen","es":"＋ Añadir","it":"＋ Aggiungi","pt":"＋ Adicionar","tr":"＋ Ekle","nl":"＋ Toevoegen","ru":"＋ Добавить"},"Added to Practice list":{"ar":"أُضيف إلى قائمة التمرين","kab":"Yettwarna ɣer tebdart n uɛraḍ","fr":"Ajouté à la liste de révision","de":"Zur Übungsliste hinzugefügt","es":"Añadido a la lista de práctica","it":"Aggiunto alla lista di pratica","pt":"Adicionado à lista de prática","tr":"Alıştırma listesine eklendi","nl":"Toegevoegd aan de oefenlijst","ru":"Добавлено в список практики"},"Removed from Practice list":{"ar":"أُزيل من قائمة التمرين","kab":"Yettwakkes seg tebdart n uɛraḍ","fr":"Retiré de la liste de révision","de":"Aus der Übungsliste entfernt","es":"Quitado de la lista de práctica","it":"Rimosso dalla lista di pratica","pt":"Removido da lista de prática","tr":"Alıştırma listesinden kaldırıldı","nl":"Verwijderd uit de oefenlijst","ru":"Удалено из списка практики"},"Already in Practice list":{"ar":"موجود بالفعل في قائمة التمرين","kab":"Yella yakan deg tebdart n uɛraḍ","fr":"Déjà dans la liste de révision","de":"Bereits in der Übungsliste","es":"Ya está en la lista de práctica","it":"È già nella lista di pratica","pt":"Já está na lista de prática","tr":"Zaten alıştırma listesinde","nl":"Staat al in de oefenlijst","ru":"Уже есть в списке практики"},"Remove verb":{"ar":"إزالة الفعل","kab":"Kkes amyag","fr":"Retirer le verbe","de":"Verb entfernen","es":"Quitar verbo","it":"Rimuovi verbo","pt":"Remover verbo","tr":"Fiili kaldır","nl":"Werkwoord verwijderen","ru":"Удалить глагол"},"Choose a verb from the suggestions.":{"ar":"اختر فعلًا من الاقتراحات.","kab":"Fren amyag seg isumar.","fr":"Choisissez un verbe parmi les suggestions.","de":"Bitte ein Verb aus den Vorschlägen wählen.","es":"Elige un verbo de las sugerencias.","it":"Scegli un verbo dai suggerimenti.","pt":"Escolha um verbo das sugestões.","tr":"Önerilerden bir fiil seç.","nl":"Kies een werkwoord uit de suggesties.","ru":"Выберите глагол из предложенных."},"This list is empty. Mistakes will appear here.":{"ar":"هذه القائمة فارغة. ستظهر هنا الأفعال التي تخطئ فيها.","kab":"Tabdart-a d tilemt. Tuccḍiwin ad d-banent dagi.","fr":"Cette liste est vide. Les erreurs apparaîtront ici.","de":"Diese Liste ist leer. Fehler erscheinen hier.","es":"Esta lista está vacía. Los errores aparecerán aquí.","it":"Questa lista è vuota. Gli errori appariranno qui.","pt":"Esta lista está vazia. Os erros aparecerão aqui.","tr":"Bu liste boş. Hatalar burada görünecek.","nl":"Deze lijst is leeg. Fouten verschijnen hier.","ru":"Этот список пуст. Ошибки появятся здесь."},"Report a bug":{"ar":"الإبلاغ عن خطأ","kab":"Azen aneqqis n tuccḍa","fr":"Signaler un problème","de":"Fehler melden","es":"Informar de un error","it":"Segnala un bug","pt":"Reportar um erro","tr":"Hata bildir","nl":"Bug melden","ru":"Сообщить об ошибке"},"Close bug report":{"ar":"إغلاق البلاغ","kab":"Mdel aneqqis n tuccḍa","fr":"Fermer le signalement","de":"Meldung schließen","es":"Cerrar informe","it":"Chiudi segnalazione","pt":"Fechar relatório","tr":"Hata bildirimini kapat","nl":"Bugmelding sluiten","ru":"Закрыть отчёт об ошибке"},"Send a bug report directly to the support team without opening an email app.":{"ar":"أرسل بلاغ الخطأ مباشرة إلى فريق الدعم دون فتح تطبيق البريد.","kab":"Azen aneqqis n tuccḍa srid i terbaɛt n tallalt war ma teldiḍ asnas n yimayl.","fr":"Envoyez le signalement directement à l’équipe sans ouvrir votre messagerie.","de":"Sende einen Fehlerbericht direkt an das Team, ohne eine E-Mail-App zu öffnen.","es":"Envía el informe directamente al equipo sin abrir una app de correo.","it":"Invia la segnalazione direttamente al supporto senza aprire un’app di posta.","pt":"Envie o relatório diretamente ao suporte sem abrir um aplicativo de e-mail.","tr":"Bir e-posta uygulaması açmadan hata raporunu doğrudan destek ekibine gönder.","nl":"Stuur een bugmelding rechtstreeks naar support zonder een e-mailapp te openen.","ru":"Отправьте отчёт об ошибке напрямую в поддержку, не открывая почтовое приложение."},"Type of issue":{"ar":"نوع المشكلة","kab":"Anaw n wugur","fr":"Type de problème","de":"Art des Problems","es":"Tipo de problema","it":"Tipo di problema","pt":"Tipo de problema","tr":"Sorun türü","nl":"Soort probleem","ru":"Тип проблемы"},"Conjugation":{"ar":"التصريف","kab":"Tasleɣt","fr":"Conjugaison","de":"Konjugation","es":"Conjugación","it":"Coniugazione","pt":"Conjugação","tr":"Fiil çekimi","nl":"Vervoeging","ru":"Спряжение"},"Translation or pronunciation":{"ar":"الترجمة أو النطق","kab":"Tasuqilt neɣ amesli","fr":"Traduction ou prononciation","de":"Übersetzung oder Aussprache","es":"Traducción o pronunciación","it":"Traduzione o pronuncia","pt":"Tradução ou pronúncia","tr":"Çeviri veya telaffuz","nl":"Vertaling of uitspraak","ru":"Перевод или произношение"},"Design or controls":{"ar":"التصميم أو عناصر التحكم","kab":"Afeṣṣel neɣ isenqaden","fr":"Design ou commandes","de":"Design oder Bedienelemente","es":"Diseño o controles","it":"Design o controlli","pt":"Design ou controles","tr":"Tasarım veya kontroller","nl":"Ontwerp of bediening","ru":"Дизайн или элементы управления"},"Other":{"ar":"أخرى","kab":"Ayen-nniḍen","fr":"Autre","de":"Sonstiges","es":"Otro","it":"Altro","pt":"Outro","tr":"Diğer","nl":"Overig","ru":"Другое"},"What went wrong?":{"ar":"ما الخطأ الذي حدث؟","kab":"D acu i yeḍran?","fr":"Que s’est-il passé ?","de":"Was ist schiefgelaufen?","es":"¿Qué ha fallado?","it":"Cosa non ha funzionato?","pt":"O que deu errado?","tr":"Ne yanlış gitti?","nl":"Wat ging er mis?","ru":"Что пошло не так?"},"Describe the bug...":{"ar":"صف الخطأ...","kab":"Glem tuccḍa...","fr":"Décrivez le problème...","de":"Beschreibe den Fehler...","es":"Describe el error...","it":"Descrivi il bug...","pt":"Descreva o erro...","tr":"Hatayı açıkla...","nl":"Beschrijf de bug...","ru":"Опишите ошибку..."},"How can we reproduce it? (optional)":{"ar":"كيف يمكن إعادة ظهور الخطأ؟ (اختياري)","kab":"Amek ara d-nales tuccḍa? (d afrayan)","fr":"Comment reproduire le problème ? (facultatif)","de":"Wie lässt sich der Fehler reproduzieren? (optional)","es":"¿Cómo podemos reproducirlo? (opcional)","it":"Come possiamo riprodurlo? (facoltativo)","pt":"Como podemos reproduzir? (opcional)","tr":"Nasıl yeniden oluşturabiliriz? (isteğe bağlı)","nl":"Hoe kunnen we dit reproduceren? (optioneel)","ru":"Как воспроизвести ошибку? (необязательно)"},"Steps to reproduce the problem...":{"ar":"خطوات إعادة ظهور المشكلة...","kab":"Imecwaṛen i wallus n wugur...","fr":"Étapes pour reproduire le problème...","de":"Schritte zum Reproduzieren...","es":"Pasos para reproducir el problema...","it":"Passaggi per riprodurre il problema...","pt":"Passos para reproduzir o problema...","tr":"Sorunu yeniden oluşturma adımları...","nl":"Stappen om het probleem te reproduceren...","ru":"Шаги для воспроизведения проблемы..."},"Reports include the verb, tense and interface language. Sending opens a FormSubmit confirmation page (no email login required).":{"ar":"يتضمن البلاغ الفعل والزمن ولغة الواجهة. تفتح صفحة تأكيد FormSubmit دون تسجيل الدخول إلى البريد.","kab":"Aneqqis yesɛa amyag, akud d tutlayt n ugrudem. Tuṭṭfa ad teldi asebter n usentem FormSubmit war tuqqna ɣer yimayl.","fr":"Le rapport inclut le verbe, le temps et la langue. Une page de confirmation FormSubmit s’ouvre sans connexion e-mail.","de":"Der Bericht enthält Verb, Zeitform und Sprache. Eine FormSubmit-Bestätigungsseite öffnet sich ohne E-Mail-Anmeldung.","es":"El informe incluye verbo, tiempo e idioma. Se abre una página de confirmación de FormSubmit sin iniciar sesión en el correo.","it":"Il rapporto include verbo, tempo e lingua dell’interfaccia. Si apre una pagina di conferma FormSubmit senza accesso e-mail.","pt":"O relatório inclui verbo, tempo e idioma da interface. Uma página de confirmação do FormSubmit será aberta sem login de e-mail.","tr":"Rapor fiil, zaman ve arayüz dilini içerir. E-posta girişi gerektirmeden bir FormSubmit onay sayfası açılır.","nl":"Het rapport bevat werkwoord, tijd en interfacetaal. Er opent een FormSubmit-bevestigingspagina zonder e-maillogin.","ru":"Отчёт включает глагол, время и язык интерфейса. Откроется страница подтверждения FormSubmit без входа в почту."},"Copy report":{"ar":"نسخ البلاغ","kab":"Nɣel aneqqis","fr":"Copier le signalement","de":"Meldung kopieren","es":"Copiar informe","it":"Copia rapporto","pt":"Copiar relatório","tr":"Raporu kopyala","nl":"Rapport kopiëren","ru":"Скопировать отчёт"},"Send report":{"ar":"إرسال البلاغ","kab":"Azen aneqqis","fr":"Envoyer le signalement","de":"Bericht senden","es":"Enviar informe","it":"Invia rapporto","pt":"Enviar relatório","tr":"Raporu gönder","nl":"Rapport verzenden","ru":"Отправить отчёт"},"Please describe the bug first.":{"ar":"يرجى وصف الخطأ أولًا.","kab":"Glem tuccḍa uqbel.","fr":"Veuillez d’abord décrire le problème.","de":"Bitte beschreibe zuerst den Fehler.","es":"Describe el error primero.","it":"Descrivi prima il bug.","pt":"Descreva o erro primeiro.","tr":"Önce hatayı açıkla.","nl":"Beschrijf eerst de bug.","ru":"Сначала опишите ошибку."},"Report copied. Share it with the developer.":{"ar":"نُسخ البلاغ. شاركه مع المطوّر.","kab":"Aneqqis yettwanɣel. Bḍu-t akked uneflay.","fr":"Signalement copié. Partagez-le avec le développeur.","de":"Meldung kopiert. Teile sie mit dem Entwickler.","es":"Informe copiado. Compártelo con el desarrollador.","it":"Rapporto copiato. Condividilo con lo sviluppatore.","pt":"Relatório copiado. Compartilhe com o desenvolvedor.","tr":"Rapor kopyalandı. Geliştiriciyle paylaş.","nl":"Rapport gekopieerd. Deel het met de ontwikkelaar.","ru":"Отчёт скопирован. Поделитесь им с разработчиком."},"Copy unavailable. Use Email report instead.":{"ar":"تعذّر النسخ. استخدم البريد بدلًا منه.","kab":"Anɣal ur yeddi ara. Seqdec yimayl deg umḍiq-is.","fr":"Copie impossible. Utilisez plutôt l’e-mail.","de":"Kopieren nicht möglich. Verwende die E-Mail-Option.","es":"No se pudo copiar. Usa la opción de correo.","it":"Copia non disponibile. Usa invece l’e-mail.","pt":"Não foi possível copiar. Use o e-mail.","tr":"Kopyalama kullanılamıyor. Bunun yerine e-postayı kullan.","nl":"Kopiëren niet beschikbaar. Gebruik e-mail.","ru":"Копирование недоступно. Используйте e-mail."},"To send reports, publish the site or use a local web server. Opening index.html directly will not work.":{"ar":"لإرسال البلاغات، انشر الموقع أو شغّله بخادم ويب محلي. فتح index.html مباشرةً لن يعمل.","kab":"I tuzna n yineqqisen, suffeɣ asmel ɣer Internet neɣ seqdec aqeddac adigan. Alday n index.html srid ur iteddu ara.","fr":"Publiez le site ou utilisez un serveur local. Ouvrir index.html directement ne fonctionne pas.","de":"Bitte die Website veröffentlichen oder einen lokalen Webserver nutzen. Direktes Öffnen von index.html funktioniert nicht.","es":"Publica el sitio o usa un servidor local. Abrir index.html directamente no funciona.","it":"Pubblica il sito o usa un server web locale. Aprire direttamente index.html non funziona.","pt":"Publique o site ou use um servidor local. Abrir index.html diretamente não funciona.","tr":"Rapor göndermek için siteyi yayınla veya yerel web sunucusu kullan. index.html dosyasını doğrudan açmak çalışmaz.","nl":"Publiceer de site of gebruik een lokale webserver. index.html rechtstreeks openen werkt niet.","ru":"Для отправки отчётов опубликуйте сайт или используйте локальный веб-сервер. Прямое открытие index.html не работает."},"Check the FormSubmit tab for confirmation or activation instructions.":{"ar":"تحقق من تبويب FormSubmit للتأكيد أو تعليمات التفعيل.","kab":"Senqed iccer n FormSubmit i usentem neɣ iwellihen n urmad.","fr":"Consultez l’onglet FormSubmit pour la confirmation ou les instructions d’activation.","de":"Prüfe den FormSubmit-Tab auf Bestätigung oder Aktivierungsanweisungen.","es":"Consulta la pestaña de FormSubmit para ver la confirmación o instrucciones de activación.","it":"Controlla la scheda FormSubmit per la conferma o le istruzioni di attivazione.","pt":"Confira a aba do FormSubmit para confirmação ou instruções de ativação.","tr":"Onay veya etkinleştirme talimatları için FormSubmit sekmesini kontrol et.","nl":"Controleer het FormSubmit-tabblad voor bevestiging of activatie-instructies.","ru":"Проверьте вкладку FormSubmit для подтверждения или инструкций по активации."},"Sending…":{"ar":"جارٍ الإرسال…","kab":"Tuzna…","fr":"Envoi en cours…","de":"Wird gesendet…","es":"Enviando…","it":"Invio…","pt":"Enviando…","tr":"Gönderiliyor…","nl":"Verzenden…","ru":"Отправка…"},"Report submitted for delivery to contact@studyzone.tech.":{"ar":"تم تقديم البلاغ لإرساله إلى contact@studyzone.tech.","kab":"Aneqqis yettwazen i tuzna ɣer contact@studyzone.tech.","fr":"Rapport soumis pour transmission à contact@studyzone.tech.","de":"Bericht zur Zustellung an contact@studyzone.tech eingereicht.","es":"Informe presentado para su entrega a contact@studyzone.tech.","it":"Rapporto inviato per la consegna a contact@studyzone.tech.","pt":"Relatório enviado para contact@studyzone.tech.","tr":"Rapor contact@studyzone.tech adresine gönderilmek üzere iletildi.","nl":"Rapport ingediend voor levering aan contact@studyzone.tech.","ru":"Отчёт отправлен для доставки на contact@studyzone.tech."},"Could not send the report. Try again, or copy the report.":{"ar":"تعذّر إرسال البلاغ. أعد المحاولة أو انسخه.","kab":"Tuzna n uneqqis ur teddi ara. Ɛreḍ tikelt-nniḍen neɣ nɣel-it.","fr":"Envoi impossible. Réessayez ou copiez le rapport.","de":"Senden fehlgeschlagen. Versuche es erneut oder kopiere den Bericht.","es":"No se pudo enviar. Inténtalo de nuevo o copia el informe.","it":"Impossibile inviare il rapporto. Riprova o copialo.","pt":"Não foi possível enviar. Tente novamente ou copie o relatório.","tr":"Rapor gönderilemedi. Tekrar dene veya raporu kopyala.","nl":"Rapport kon niet worden verzonden. Probeer opnieuw of kopieer het.","ru":"Не удалось отправить отчёт. Повторите попытку или скопируйте его."},"✦ Practice":{"ar":"✦ التدريب","kab":"✦ Aɛraḍ","fr":"✦ Révision","de":"✦ Übung","es":"✦ Práctica","it":"✦ Pratica","pt":"✦ Prática","tr":"✦ Alıştırma","nl":"✦ Oefenen","ru":"✦ Практика"},"Listen to the verb in German":{"ar":"استمع إلى الفعل بالألمانية","kab":"Sel i umyag s talmanit","fr":"Écouter le verbe en allemand","de":"Verb auf Deutsch anhören","es":"Escuchar el verbo en alemán","it":"Ascolta il verbo in tedesco","pt":"Ouvir o verbo em alemão","tr":"Fiili Almanca dinle","nl":"Luister naar het werkwoord in het Duits","ru":"Прослушать глагол на немецком"},"Space":{"ar":"مسافة","kab":"Tallunt","fr":"Espace","de":"Leerzeichen","es":"Espacio","it":"Spazio","pt":"Espaço","tr":"Boşluk","nl":"Spatie","ru":"Пробел"},"Not used with this pronoun":{"ar":"لا يُستخدم مع هذا الضمير","kab":"Ur yettuseqdac ara akked umqim-a","fr":"Non utilisé avec ce pronom","de":"Mit diesem Pronomen nicht verwendet","es":"No se usa con este pronombre","it":"Non usato con questo pronome","pt":"Não usado com este pronome","tr":"Bu zamirle kullanılmaz","nl":"Niet gebruikt met dit voornaamwoord","ru":"Не используется с этим местоимением"},"No applicable forms for the selected pronouns.":{"ar":"لا توجد صيغ مناسبة للضمائر المحددة.","kab":"Ulac talɣiwin i iwulmen i yimqimen yettwafren.","fr":"Aucune forme applicable aux pronoms sélectionnés.","de":"Keine passenden Formen für die ausgewählten Pronomen.","es":"No hay formas aplicables para los pronombres seleccionados.","it":"Nessuna forma applicabile ai pronomi selezionati.","pt":"Não há formas aplicáveis aos pronomes selecionados.","tr":"Seçilen zamirler için uygun biçim yok.","nl":"Geen toepasselijke vormen voor de geselecteerde voornaamwoorden.","ru":"Для выбранных местоимений нет подходящих форм."},"Compare with":{"ar":"قارن مع","kab":"Serwes akked","fr":"Comparer avec","de":"Vergleiche mit","es":"Compara con","it":"Confronta con","pt":"Compare com","tr":"Şununla karşılaştır","nl":"Vergelijk met","ru":"Сравните с"},"Describe the problem. You can copy the report or open an email draft to share it.":{"ar":"صف المشكلة. يمكنك نسخ البلاغ أو فتح مسودة بريد لمشاركته.","kab":"Glem ugur. Tzemreḍ ad tenɣleḍ aneqqis neɣ ad teldiḍ tasnawt n yimayl.","fr":"Décrivez le problème. Copiez le signalement ou ouvrez un brouillon d’e-mail.","de":"Beschreibe das Problem. Kopiere die Meldung oder öffne einen E-Mail-Entwurf.","es":"Describe el problema. Copia el informe o abre un borrador de correo.","it":"Descrivi il problema. Puoi copiare il rapporto o aprire una bozza e-mail.","pt":"Descreva o problema. Você pode copiar o relatório ou abrir um rascunho de e-mail.","tr":"Sorunu açıkla. Raporu kopyalayabilir veya bir e-posta taslağı açabilirsin.","nl":"Beschrijf het probleem. Kopieer het rapport of open een e-mailconcept.","ru":"Опишите проблему. Можно скопировать отчёт или открыть черновик письма."},"Reports include the current verb, tense and app language. Nothing is sent automatically.":{"ar":"يتضمن البلاغ الفعل والزمن ولغة التطبيق الحالية. لا يُرسل شيء تلقائيًا.","kab":"Ineqqisen sɛan amyag, akud d tutlayt n usnas. Ulac acu ara yettwaznen s wudem awurman.","fr":"Le signalement inclut le verbe, le temps et la langue de l’application. Aucun envoi automatique.","de":"Die Meldung enthält Verb, Zeitform und App-Sprache. Nichts wird automatisch gesendet.","es":"El informe incluye el verbo, tiempo e idioma de la aplicación. Nada se envía automáticamente.","it":"Il rapporto include verbo, tempo e lingua dell’app. Nulla viene inviato automaticamente.","pt":"O relatório inclui verbo, tempo e idioma do app. Nada é enviado automaticamente.","tr":"Rapor mevcut fiil, zaman ve uygulama dilini içerir. Hiçbir şey otomatik gönderilmez.","nl":"Het rapport bevat het huidige werkwoord, de tijd en de app-taal. Er wordt niets automatisch verzonden.","ru":"Отчёт включает текущий глагол, время и язык приложения. Ничего не отправляется автоматически."},"Reports include the current verb, tense and app language. Sent to contact@studyzone.tech only when you press Send report.":{"ar":"يتضمن البلاغ الفعل والزمن ولغة التطبيق. يُرسل إلى contact@studyzone.tech فقط عند الضغط على إرسال.","kab":"Aneqqis yesɛa amyag, akud d tutlayt n usnas. Ad yettwazen ɣer contact@studyzone.tech kan mi ara ttekkiḍ ɣef Azen aneqqis.","fr":"Le rapport inclut le verbe, le temps et la langue. Envoi à contact@studyzone.tech seulement après confirmation.","de":"Der Bericht enthält Verb, Zeitform und Sprache. Versand an contact@studyzone.tech nur nach Klick auf Senden.","es":"El informe incluye verbo, tiempo e idioma. Se envía a contact@studyzone.tech solo al pulsar Enviar.","it":"Il rapporto include verbo, tempo e lingua. Viene inviato a contact@studyzone.tech solo quando premi Invia rapporto.","pt":"O relatório inclui verbo, tempo e idioma. É enviado a contact@studyzone.tech somente ao pressionar Enviar relatório.","tr":"Rapor fiil, zaman ve dili içerir. Yalnızca Raporu gönder düğmesine bastığında contact@studyzone.tech adresine gönderilir.","nl":"Het rapport bevat werkwoord, tijd en taal. Het wordt alleen naar contact@studyzone.tech gestuurd wanneer je op Rapport verzenden drukt.","ru":"Отчёт включает глагол, время и язык. Он отправляется на contact@studyzone.tech только после нажатия «Отправить отчёт»."},"Publish the website online to enable direct bug reports.":{"ar":"انشر الموقع على الإنترنت لتفعيل إرسال البلاغات مباشرة.","kab":"Suffeɣ asmel ɣer Internet akken ad tremdeḍ tuzna srid n yineqqisen.","fr":"Publiez le site en ligne pour activer l’envoi des rapports.","de":"Veröffentliche die Website online, um Berichte direkt zu senden.","es":"Publica el sitio web para activar el envío directo.","it":"Pubblica il sito online per abilitare l’invio diretto dei bug.","pt":"Publique o site online para habilitar relatórios diretos.","tr":"Doğrudan hata raporlarını etkinleştirmek için siteyi çevrimiçi yayınla.","nl":"Publiceer de website online om directe bugmeldingen mogelijk te maken.","ru":"Опубликуйте сайт в интернете, чтобы включить прямую отправку отчётов."},"Email report":{"ar":"إرسال عبر البريد","kab":"Azen aneqqis s yimayl","fr":"Envoyer par e-mail","de":"Per E-Mail senden","es":"Enviar por correo","it":"Invia via e-mail","pt":"Enviar por e-mail","tr":"E-postayla gönder","nl":"Per e-mail verzenden","ru":"Отправить по e-mail"},"Email draft opened. Choose a recipient and send it.":{"ar":"تم فتح مسودة بريد. اختر المستلم وأرسلها.","kab":"Teldi-d tasnawt n yimayl. Fren anermas sakin azen-itt.","fr":"Brouillon d’e-mail ouvert. Choisissez un destinataire et envoyez-le.","de":"E-Mail-Entwurf geöffnet. Empfänger auswählen und senden.","es":"Borrador de correo abierto. Elige destinatario y envíalo.","it":"Bozza e-mail aperta. Scegli un destinatario e inviala.","pt":"Rascunho de e-mail aberto. Escolha o destinatário e envie.","tr":"E-posta taslağı açıldı. Alıcıyı seçip gönder.","nl":"E-mailconcept geopend. Kies een ontvanger en verzend het.","ru":"Черновик письма открыт. Выберите получателя и отправьте."},"Inbox activation required: check contact@studyzone.tech for the FormSubmit activation email, then try again.":{"ar":"يلزم تفعيل العنوان: افتح بريد contact@studyzone.tech وأكّد رسالة FormSubmit ثم أعد المحاولة.","kab":"Asentem n tebwaṭ n yimayl ilaq: senqed contact@studyzone.tech i yizen n urmad FormSubmit, sakin ɛreḍ tikkelt-nniḍen.","fr":"Activation requise : confirmez le lien FormSubmit envoyé à contact@studyzone.tech, puis réessayez.","de":"Aktivierung nötig: Den FormSubmit-Link im Postfach contact@studyzone.tech bestätigen und erneut senden.","es":"Activación necesaria: confirma el correo de FormSubmit en contact@studyzone.tech y vuelve a intentarlo.","it":"Attivazione necessaria: controlla contact@studyzone.tech per l’e-mail di attivazione FormSubmit e riprova.","pt":"Ativação necessária: verifique contact@studyzone.tech para o e-mail de ativação do FormSubmit e tente novamente.","tr":"Gelen kutusu etkinleştirmesi gerekli: contact@studyzone.tech adresindeki FormSubmit etkinleştirme e-postasını onaylayıp tekrar dene.","nl":"Inboxactivatie vereist: controleer contact@studyzone.tech voor de FormSubmit-activatiemail en probeer opnieuw.","ru":"Требуется активация: проверьте contact@studyzone.tech, подтвердите письмо FormSubmit и повторите попытку."},"Direct sending failed. Use the secure form below (no email login needed).":{"ar":"تعذّر الإرسال المباشر. استخدم النموذج الآمن أدناه دون تسجيل الدخول للبريد.","kab":"Tuzna srid ur teddi ara. Seqdec tiferkit taɣelsant ukessar war tuqqna ɣer yimayl.","fr":"Envoi direct impossible. Utilisez le formulaire sécurisé ci-dessous, sans connexion e-mail.","de":"Direktversand fehlgeschlagen. Nutze das sichere Formular unten, ohne E-Mail-Anmeldung.","es":"Falló el envío directo. Usa el formulario seguro de abajo, sin iniciar sesión en el correo.","it":"Invio diretto non riuscito. Usa il modulo sicuro qui sotto senza accesso e-mail.","pt":"O envio direto falhou. Use o formulário seguro abaixo sem login de e-mail.","tr":"Doğrudan gönderim başarısız. E-posta girişi gerektirmeyen güvenli formu kullan.","nl":"Direct verzenden mislukt. Gebruik het beveiligde formulier hieronder zonder e-maillogin.","ru":"Прямая отправка не удалась. Используйте безопасную форму ниже без входа в почту."},"Send via secure form":{"ar":"إرسال عبر نموذج آمن","kab":"Azen s tiferkit taɣelsant","fr":"Envoyer via le formulaire sécurisé","de":"Über sicheres Formular senden","es":"Enviar mediante formulario seguro","it":"Invia tramite modulo sicuro","pt":"Enviar pelo formulário seguro","tr":"Güvenli formla gönder","nl":"Via beveiligd formulier verzenden","ru":"Отправить через безопасную форму"},"Check the newly opened FormSubmit page to confirm the result.":{"ar":"تحقّق من صفحة FormSubmit التي فُتحت لتأكيد نتيجة الإرسال.","kab":"Senqed asebter FormSubmit i d-yeldin i usentem n ugmuḍ.","fr":"Vérifiez la page FormSubmit ouverte pour confirmer le résultat.","de":"Prüfe die geöffnete FormSubmit-Seite, um den Versand zu bestätigen.","es":"Revisa la página FormSubmit abierta para confirmar el envío.","it":"Controlla la pagina FormSubmit appena aperta per confermare il risultato.","pt":"Confira a página do FormSubmit aberta para confirmar o resultado.","tr":"Sonucu doğrulamak için açılan FormSubmit sayfasını kontrol et.","nl":"Controleer de geopende FormSubmit-pagina om het resultaat te bevestigen.","ru":"Проверьте открытую страницу FormSubmit, чтобы подтвердить результат."}};
for (const [source, translations] of Object.entries(COMPLETE_UI_TRANSLATIONS)) {
  UI_LANGUAGES[source] = Object.assign(UI_LANGUAGES[source] || {}, translations);
}

UI_PATTERNS.unshift(
  [/^(\d+) verb selected$/, {"ar": "$1 فعل محدد", "kab": "$1 amyag yettwafren", "fr": "$1 verbe sélectionné", "de": "$1 Verb ausgewählt", "es": "$1 verbo seleccionado", "it": "$1 verbo selezionato", "pt": "$1 verbo selecionado", "tr": "$1 fiil seçildi", "nl": "$1 werkwoord geselecteerd", "ru": "$1 глагол выбран"}],
  [/^(\d+) verb$/, {"ar": "$1 فعل", "kab": "$1 amyag", "fr": "$1 verbe", "de": "$1 Verb", "es": "$1 verbo", "it": "$1 verbo", "pt": "$1 verbo", "tr": "$1 fiil", "nl": "$1 werkwoord", "ru": "$1 глагол"}],
  [/^✎ Compare with: (.+)$/, {"ar": "✎ قارن مع: $1", "kab": "✎ Serwes akked: $1", "fr": "✎ Comparer avec : $1", "de": "✎ Vergleiche mit: $1", "es": "✎ Compara con: $1", "it": "✎ Confronta con: $1", "pt": "✎ Compare com: $1", "tr": "✎ Şununla karşılaştır: $1", "nl": "✎ Vergelijk met: $1", "ru": "✎ Сравните с: $1"}]
);

setInterfaceLanguage(interfaceLocale);
uiTranslateTree(document.body);


// =========================================================
// STUDY FEATURES: DAILY CHALLENGE, PROGRESS, STREAK, QUIZ,
// SCORE SHARING, LOCAL LEADERBOARD, FRIEND CHALLENGES & PWA
// =========================================================
(function enableStudyFeatures(){
  const storage={
    get(key,fallback){try{const raw=localStorage.getItem(key);return raw===null?fallback:JSON.parse(raw)}catch{return fallback}},
    set(key,value){try{localStorage.setItem(key,JSON.stringify(value))}catch{}}
  };
  const allVerbs=[...new Set(Object.values(database).flat())];
  const totalVerbs=allVerbs.length;
  const $=id=>document.getElementById(id);
  const todayKey=()=>new Date().toLocaleDateString('en-CA');
  let session={type:'practice',correct:0,total:0,checked:new Set(),started:false};
  let featureLaunching=false;
  const buildExercisesBeforeFeatures=buildExercises;
  buildExercises=function(...args){
    if(!featureLaunching)session={type:'practice',correct:0,total:0,checked:new Set(),started:true};
    return buildExercisesBeforeFeatures.apply(this,args);
  };
  let pendingChallenge=null;
  let deferredInstallPrompt=null;

  function tr(s){return typeof uiTranslate==='function'?uiTranslate(s):s;}
  function safeSetText(id,value){const el=$(id);if(el)el.textContent=value;}
  function getCompleted(){return new Set(storage.get('gvt-completed-verbs',[]));}
  function saveCompleted(set){storage.set('gvt-completed-verbs',[...set]);updateProgressUI();}
  function markCompleted(verb){if(!verb)return;const set=getCompleted();set.add(verb);saveCompleted(set);}

  function dateFromKey(k){const [y,m,d]=k.split('-').map(Number);return new Date(y,m-1,d);}
  function daysBetween(a,b){return Math.round((dateFromKey(b)-dateFromKey(a))/86400000);}
  function recordPracticeDay(){
    const today=todayKey();
    let days=storage.get('gvt-practice-days',[]).filter(x=>/^\d{4}-\d{2}-\d{2}$/.test(x));
    if(!days.includes(today))days.push(today);
    days=[...new Set(days)].sort().slice(-400);storage.set('gvt-practice-days',days);updateStreakUI();
  }
  function streakValue(){
    const days=storage.get('gvt-practice-days',[]).sort();if(!days.length)return 0;
    const today=todayKey();const yesterday=new Date();yesterday.setDate(yesterday.getDate()-1);const yKey=yesterday.toLocaleDateString('en-CA');
    let cursor=days.includes(today)?today:days.includes(yKey)?yKey:null;if(!cursor)return 0;
    let count=1;for(let i=days.indexOf(cursor)-1;i>=0;i--){if(daysBetween(days[i],cursor)===1){count++;cursor=days[i];}else break;}return count;
  }
  function progressPercentValue(){
    const done=getCompleted().size;
    return totalVerbs?Math.round(done/totalVerbs*100):0;
  }
  function progressMessage(percent){
    if(percent>=100)return tr('Complete');
    if(percent>=75)return tr('Almost there');
    if(percent>=40)return tr('Great progress');
    if(percent>0)return tr('Keep going');
    return tr('Start your first verb');
  }
  function trackingGoalValue(){
    let value=Number(storage.get('gvt-progress-goal',totalVerbs));
    if(!Number.isFinite(value)||value<1)value=totalVerbs;
    value=Math.min(totalVerbs,Math.max(1,Math.round(value)));
    return value;
  }
  function updateGoalCalculator(){
    const done=getCompleted().size;
    const goal=trackingGoalValue();
    const percent=goal?Math.round(done/goal*100):0;
    const remaining=Math.max(0,goal-done);
    const completedInput=$('trackingCompleted');if(completedInput)completedInput.value=done;
    const goalInput=$('trackingGoal');if(goalInput&&document.activeElement!==goalInput)goalInput.value=goal;
    safeSetText('goalProgressPercent',percent+'%');
    safeSetText('goalRemaining',`${remaining} ${tr('verbs remaining to reach your goal')}`);
  }
  function updateProgressUI(){
    const done=getCompleted().size;
    const percent=progressPercentValue();
    safeSetText('completedVerbCount',done);safeSetText('totalVerbCount',totalVerbs);
    safeSetText('progressPercent',percent+'%');safeSetText('dashboardPercent',percent+'%');
    safeSetText('remainingVerbCount',`${Math.max(0,totalVerbs-done)} ${tr('verbs remaining')}`);
    safeSetText('progressMotivation',progressMessage(percent));
    const fill=$('progressFill');if(fill)fill.style.width=percent+'%';
    const ring=$('progressRing');if(ring)ring.style.setProperty('--progress-angle',(Math.min(100,Math.max(0,percent))*3.6)+'deg');
    updateGoalCalculator();
  }
  function updateStreakUI(){safeSetText('streakCount',streakValue());}

  function dailyVerb(){
    const key=todayKey();let hash=0;for(const ch of key)hash=(hash*31+ch.charCodeAt(0))>>>0;return allVerbs[hash%allVerbs.length];
  }
  function updateDailyUI(){
    const verb=dailyVerb();safeSetText('dailyVerbName',verb);
    const saved=typeof storedMeaning==='function'?storedMeaning(verb,interfaceLocale):null;
    const meaning=saved?.text||'';
    safeSetText('dailyVerbMeaning',meaning||tr('One new verb every day.'));
  }
  function beginFeatureSession(type,verbs,tensesToUse){
    selectedVerbs=[...new Set(verbs)].filter(v=>allVerbs.includes(v));
    selectedTenses=[...new Set(tensesToUse)].filter(t=>tenses.includes(t));
    if(!selectedVerbs.length)return;
    if(!selectedTenses.length)selectedTenses=['Präsens'];
    selectedPeople=[...people];
    session={type,correct:0,total:0,checked:new Set(),started:true};
    featureLaunching=true;
    try{buildExercises();}finally{featureLaunching=false;}
  }
  $('startDailyChallenge')?.addEventListener('click',()=>beginFeatureSession('daily',[dailyVerb()],['Präsens','Präteritum','Perfekt']));
  $('startRandomQuiz')?.addEventListener('click',()=>{
    const shuffled=[...allVerbs].sort(()=>Math.random()-.5).slice(0,5);
    beginFeatureSession('random',shuffled,['Präsens','Präteritum','Perfekt']);
  });

  function currentExerciseKey(){return [currentVerbIndex,currentTenseIndex,practiceVerbs[currentVerbIndex],selectedTenses[currentTenseIndex]].join('|');}
  const beforeStudyCheck=checkCurrentVerb;
  checkCurrentVerb=function(...args){
    const actions=$('answerActions');
    const pending=actions && !actions.classList.contains('hidden') && currentExercises.length>0;
    const key=currentExerciseKey();
    const out=beforeStudyCheck.apply(this,args);
    if(pending && !session.checked.has(key)){
      let correct=0;currentExercises.forEach(item=>{if(item.status.classList.contains('correct'))correct++;});
      session.correct+=correct;session.total+=currentExercises.length;session.checked.add(key);recordPracticeDay();
      $('scoreShareActions')?.classList.remove('hidden');
    }
    return out;
  };
  $('checkAll').onclick=checkCurrentVerb;

  $('nextVerb')?.addEventListener('click',()=>{
    const verb=practiceVerbs[currentVerbIndex];
    const wasLastTense=currentTenseIndex===selectedTenses.length-1;
    if(wasLastTense && session.checked.size)markCompleted(verb);
    const wasFinal=wasLastTense && currentVerbIndex===practiceVerbs.length-1;
    if(wasFinal && session.total>0){saveLeaderboardScore();session.started=false;setTimeout(renderLeaderboard,0);}
    setTimeout(()=>{if(!$('page3').classList.contains('hidden'))$('scoreShareActions')?.classList.add('hidden');},0);
  },true);

  function scorePercent(){return session.total?Math.round(session.correct/session.total*100):0;}
  function scoreText(){return `${session.correct}/${session.total} (${scorePercent()}%)`;}
  function playerName(){return ($('leaderboardName')?.value||storage.get('gvt-player-name','Learner')||'Learner').trim().slice(0,24)||'Learner';}
  function saveLeaderboardScore(){
    const entries=storage.get('gvt-leaderboard',[]);entries.push({name:playerName(),correct:session.correct,total:session.total,percent:scorePercent(),type:session.type,date:new Date().toISOString()});
    entries.sort((a,b)=>b.percent-a.percent||b.correct-a.correct||new Date(b.date)-new Date(a.date));storage.set('gvt-leaderboard',entries.slice(0,10));
  }
  function renderLeaderboard(){
    const list=$('leaderboardList');if(!list)return;list.replaceChildren();
    const entries=storage.get('gvt-leaderboard',[]);
    if(!entries.length){const p=document.createElement('p');p.className='leaderboard-empty';p.textContent=tr('No scores yet. Finish a quiz to appear here.');list.appendChild(p);return;}
    entries.forEach(entry=>{const li=document.createElement('li');const name=document.createElement('span');name.textContent=entry.name;const meta=document.createElement('small');meta.textContent=tr(entry.type==='random'?'Random quiz':entry.type==='daily'?'Daily challenge':'Practice');name.appendChild(document.createElement('br'));name.appendChild(meta);const score=document.createElement('span');score.className='leaderboard-score';score.textContent=`${entry.percent}% · ${entry.correct}/${entry.total}`;li.append(name,score);list.appendChild(li);});
  }
  const nameInput=$('leaderboardName');if(nameInput){nameInput.value=storage.get('gvt-player-name','');nameInput.addEventListener('change',()=>storage.set('gvt-player-name',nameInput.value.trim().slice(0,24)));}
  const goalInput=$('trackingGoal');if(goalInput){
    goalInput.max=String(totalVerbs);goalInput.value=trackingGoalValue();
    const saveGoal=()=>{let value=Math.round(Number(goalInput.value)||totalVerbs);value=Math.min(totalVerbs,Math.max(1,value));storage.set('gvt-progress-goal',value);goalInput.value=value;updateGoalCalculator();};
    goalInput.addEventListener('input',()=>{let value=Math.round(Number(goalInput.value)||1);value=Math.min(totalVerbs,Math.max(1,value));const done=getCompleted().size;safeSetText('goalProgressPercent',Math.round(done/value*100)+'%');safeSetText('goalRemaining',`${Math.max(0,value-done)} ${tr('verbs remaining to reach your goal')}`);});
    goalInput.addEventListener('change',saveGoal);goalInput.addEventListener('blur',saveGoal);
  }

  async function sharePayload(title,text,url=location.href){
    try{if(navigator.share){await navigator.share({title,text,url});return true;}const value=`${text}\n${url}`;if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(value);if(typeof showDialog==='function')showDialog(tr('Copied to clipboard.'));return true;}}catch(error){if(error?.name==='AbortError')return false;}
    if(typeof showDialog==='function')showDialog(tr('Sharing is not available in this browser.'));return false;
  }
  $('shareScore')?.addEventListener('click',()=>sharePayload('German Verb Trainer',`${tr('My German verb score')}: ${scoreText()} · ${tr('Streak')}: ${streakValue()} 🔥`));
  $('shareProgress')?.addEventListener('click',()=>sharePayload('German Verb Trainer',`${tr('I completed')} ${getCompleted().size}/${totalVerbs} ${tr('German verbs')} (${progressPercentValue()}%) · ${tr('Streak')}: ${streakValue()} 🔥`));

  function challengeURL(){
    const verbs=(practiceVerbs?.length?practiceVerbs:[...allVerbs].sort(()=>Math.random()-.5).slice(0,5)).slice(0,8);
    const ts=(selectedTenses?.length?selectedTenses:['Präsens','Präteritum','Perfekt']).slice(0,4);
    const u=new URL(location.href);u.search='';u.hash='';u.searchParams.set('challenge','1');u.searchParams.set('v',verbs.join(','));u.searchParams.set('t',ts.join(','));if(session.total)u.searchParams.set('target',String(scorePercent()));return u.toString();
  }
  async function challengeFriends(){const target=session.total?` ${tr('Can you beat')} ${scorePercent()}%?`:'';await sharePayload(tr('German verb challenge'),`${tr('I challenge you to this German verb quiz!')}${target}`,challengeURL());}
  $('challengeFriends')?.addEventListener('click',challengeFriends);$('challengeFriendsHome')?.addEventListener('click',challengeFriends);

  function parseChallenge(){
    const q=new URLSearchParams(location.search);if(q.get('challenge')!=='1')return;
    const verbs=(q.get('v')||'').split(',').filter(v=>allVerbs.includes(v)).slice(0,8);
    const ts=(q.get('t')||'').split(',').filter(t=>tenses.includes(t)).slice(0,4);if(!verbs.length)return;
    pendingChallenge={verbs,tenses:ts.length?ts:['Präsens'],target:Math.max(0,Math.min(100,Number(q.get('target'))||0))};
    $('friendChallengeBanner')?.classList.remove('hidden');
    safeSetText('friendChallengeText',pendingChallenge.target?`${tr('Beat the target score')}: ${pendingChallenge.target}%`:`${verbs.length} ${tr('verbs are waiting for you.')}`);
  }
  $('startFriendChallenge')?.addEventListener('click',()=>{if(pendingChallenge)beginFeatureSession('challenge',pendingChallenge.verbs,pendingChallenge.tenses);});

  // Explicit dark-mode switch, synchronized with the existing theme selector.
  const darkToggle=$('darkModeToggle'),themeSelect=$('themeSelect');
  function syncDarkToggle(){if(darkToggle&&themeSelect)darkToggle.checked=themeSelect.value==='dark';}
  if(darkToggle&&themeSelect){darkToggle.addEventListener('change',()=>{themeSelect.value=darkToggle.checked?'dark':'notebook';themeSelect.dispatchEvent(new Event('change',{bubbles:true}));});themeSelect.addEventListener('change',syncDarkToggle);syncDarkToggle();}

  // PWA install prompt. The button appears only when the browser says installation is available.
  window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();deferredInstallPrompt=event;const btn=$('installApp');if(btn)btn.hidden=false;});
  $('installApp')?.addEventListener('click',async()=>{if(!deferredInstallPrompt)return;deferredInstallPrompt.prompt();await deferredInstallPrompt.userChoice;deferredInstallPrompt=null;$('installApp').hidden=true;});
  window.addEventListener('appinstalled',()=>{deferredInstallPrompt=null;if($('installApp'))$('installApp').hidden=true;});
  if('serviceWorker' in navigator && /^https?:$/.test(location.protocol))window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));

  // Re-translate dynamic feature text when interface language changes.
  const previousSetLanguage=setInterfaceLanguage;
  setInterfaceLanguage=function(locale){const out=previousSetLanguage(locale);setTimeout(()=>{updateDailyUI();updateProgressUI();updateStreakUI();renderLeaderboard();if(pendingChallenge){safeSetText('friendChallengeText',pendingChallenge.target?`${tr('Beat the target score')}: ${pendingChallenge.target}%`:`${pendingChallenge.verbs.length} ${tr('verbs are waiting for you.')}`);}},0);return out;};

  updateProgressUI();updateStreakUI();updateDailyUI();renderLeaderboard();parseChallenge();
})();

// Feature translations across every supported interface language.
Object.assign(UI_LANGUAGES, {
  'Dark mode':{ar:'الوضع الداكن',kab:'Askar aberkan',fr:'Mode sombre',de:'Dunkelmodus',es:'Modo oscuro',it:'Modalità scura',pt:'Modo escuro',tr:'Karanlık mod',nl:'Donkere modus',ru:'Тёмный режим'},
  'Install app':{ar:'تثبيت التطبيق',kab:'Sebded asnas',fr:'Installer l’application',de:'App installieren',es:'Instalar aplicación',it:'Installa app',pt:'Instalar aplicativo',tr:'Uygulamayı yükle',nl:'App installeren',ru:'Установить приложение'},
  'YOUR PROGRESS':{ar:'تقدمك',kab:'Asfari-ik',fr:'VOTRE PROGRESSION',de:'DEIN FORTSCHRITT',es:'TU PROGRESO',it:'I TUOI PROGRESSI',pt:'SEU PROGRESSO',tr:'İLERLEMEN',nl:'JE VOORTGANG',ru:'ВАШ ПРОГРЕСС'},
  'Study dashboard':{ar:'لوحة التعلّم',kab:'Tafelwit n ulmad',fr:'Tableau de progression',de:'Lernübersicht',es:'Panel de estudio',it:'Dashboard di studio',pt:'Painel de estudo',tr:'Çalışma paneli',nl:'Studiedashboard',ru:'Панель обучения'},
  'Daily Verb Challenge':{ar:'تحدي فعل اليوم',kab:'Amzizel n umyag n wass',fr:'Défi du verbe du jour',de:'Tägliche Verb-Challenge',es:'Reto diario de verbos',it:'Sfida verbo del giorno',pt:'Desafio diário de verbos',tr:'Günlük fiil görevi',nl:'Dagelijkse werkwoordchallenge',ru:'Глагол дня'},
  'One new verb every day.':{ar:'فعل جديد كل يوم.',kab:'Amyag amaynut yal ass.',fr:'Un nouveau verbe chaque jour.',de:'Jeden Tag ein neues Verb.',es:'Un verbo nuevo cada día.',it:'Un nuovo verbo ogni giorno.',pt:'Um novo verbo por dia.',tr:'Her gün yeni bir fiil.',nl:'Elke dag een nieuw werkwoord.',ru:'Новый глагол каждый день.'},
  'Start daily challenge':{ar:'ابدأ تحدي اليوم',kab:'Bdu amzizel n wass',fr:'Commencer le défi du jour',de:'Tages-Challenge starten',es:'Empezar reto diario',it:'Inizia sfida giornaliera',pt:'Iniciar desafio diário',tr:'Günlük görevi başlat',nl:'Start dagelijkse challenge',ru:'Начать ежедневное задание'},
  'Progress tracker':{ar:'متتبع التقدم',kab:'Aḍfar n usfari',fr:'Suivi des progrès',de:'Fortschrittsanzeige',es:'Seguimiento del progreso',it:'Monitor progressi',pt:'Rastreador de progresso',tr:'İlerleme takibi',nl:'Voortgang bijhouden',ru:'Отслеживание прогресса'},
  'Completed verbs':{ar:'الأفعال المكتملة',kab:'Imyagen ikemlen',fr:'Verbes terminés',de:'Abgeschlossene Verben',es:'Verbos completados',it:'Verbi completati',pt:'Verbos concluídos',tr:'Tamamlanan fiiller',nl:'Voltooide werkwoorden',ru:'Завершённые глаголы'},
  'Streak counter':{ar:'عداد الاستمرارية',kab:'Amsiḍen n usdukel',fr:'Série quotidienne',de:'Streak-Zähler',es:'Contador de racha',it:'Contatore serie',pt:'Contador de sequência',tr:'Seri sayacı',nl:'Reeksenteller',ru:'Счётчик серии'},
  'Daily practice streak':{ar:'سلسلة التدريب اليومية',kab:'Asdukel n ulmad n yal ass',fr:'Série de pratique quotidienne',de:'Tägliche Übungsserie',es:'Racha diaria de práctica',it:'Serie di pratica giornaliera',pt:'Sequência diária de prática',tr:'Günlük çalışma serisi',nl:'Dagelijkse oefenreeks',ru:'Серия ежедневных занятий'},
  'Random quiz':{ar:'اختبار عشوائي',kab:'Akyad agacuran',fr:'Quiz aléatoire',de:'Zufallsquiz',es:'Quiz aleatorio',it:'Quiz casuale',pt:'Quiz aleatório',tr:'Rastgele test',nl:'Willekeurige quiz',ru:'Случайный тест'},
  '5 random verbs':{ar:'5 أفعال عشوائية',kab:'5 imyagen igacuranen',fr:'5 verbes aléatoires',de:'5 zufällige Verben',es:'5 verbos aleatorios',it:'5 verbi casuali',pt:'5 verbos aleatórios',tr:'5 rastgele fiil',nl:'5 willekeurige werkwoorden',ru:'5 случайных глаголов'},
  'Test your knowledge.':{ar:'اختبر معرفتك.',kab:'Sekyed tamusni-k.',fr:'Testez vos connaissances.',de:'Teste dein Wissen.',es:'Pon a prueba tus conocimientos.',it:'Metti alla prova le tue conoscenze.',pt:'Teste seus conhecimentos.',tr:'Bilgini test et.',nl:'Test je kennis.',ru:'Проверьте свои знания.'},
  'Start random quiz':{ar:'ابدأ اختبارًا عشوائيًا',kab:'Bdu akyad agacuran',fr:'Commencer le quiz',de:'Zufallsquiz starten',es:'Empezar quiz aleatorio',it:'Avvia quiz casuale',pt:'Iniciar quiz aleatório',tr:'Rastgele testi başlat',nl:'Start willekeurige quiz',ru:'Начать случайный тест'},
  'Share progress':{ar:'مشاركة التقدم',kab:'Bḍu asfari',fr:'Partager les progrès',de:'Fortschritt teilen',es:'Compartir progreso',it:'Condividi progressi',pt:'Compartilhar progresso',tr:'İlerlemeyi paylaş',nl:'Voortgang delen',ru:'Поделиться прогрессом'},
  'Challenge friends':{ar:'تحدي الأصدقاء',kab:'Ɛreḍ imdukal',fr:'Défier des amis',de:'Freunde herausfordern',es:'Desafiar a amigos',it:'Sfida gli amici',pt:'Desafiar amigos',tr:'Arkadaşlarına meydan oku',nl:'Daag vrienden uit',ru:'Бросить вызов друзьям'},
  'Friend challenge received':{ar:'وصل تحدي من صديق',kab:'Yewweḍ-d umzizel seg umeddakwel',fr:'Défi d’un ami reçu',de:'Challenge von einem Freund',es:'Reto de un amigo recibido',it:'Sfida di un amico ricevuta',pt:'Desafio de amigo recebido',tr:'Arkadaş meydan okuması geldi',nl:'Vriendenchallenge ontvangen',ru:'Получен вызов от друга'},
  'A friend challenged you to a German verb quiz.':{ar:'تحداك صديق في اختبار للأفعال الألمانية.',kab:'Ameddakwel inek iɛreḍ-ik ɣer ukayad n yimyagen n talmanit.',fr:'Un ami vous défie à un quiz de verbes allemands.',de:'Ein Freund fordert dich zu einem deutschen Verbquiz heraus.',es:'Un amigo te ha retado a un quiz de verbos alemanes.',it:'Un amico ti ha sfidato a un quiz di verbi tedeschi.',pt:'Um amigo desafiou você para um quiz de verbos alemães.',tr:'Bir arkadaşın seni Almanca fiil testine davet etti.',nl:'Een vriend daagt je uit voor een Duitse werkwoordenquiz.',ru:'Друг бросил вам вызов в тесте по немецким глаголам.'},
  'Start challenge':{ar:'ابدأ التحدي',kab:'Bdu amzizel',fr:'Commencer le défi',de:'Challenge starten',es:'Empezar reto',it:'Inizia sfida',pt:'Iniciar desafio',tr:'Meydan okumayı başlat',nl:'Start challenge',ru:'Начать вызов'},
  'Beat the target score':{ar:'تجاوز النتيجة المستهدفة',kab:'Ɛeddi agmuḍ n iswi',fr:'Dépassez le score cible',de:'Schlage die Zielpunktzahl',es:'Supera la puntuación objetivo',it:'Supera il punteggio obiettivo',pt:'Supere a pontuação-alvo',tr:'Hedef puanı geç',nl:'Versla de doelscore',ru:'Побейте целевой результат'},
  'verbs are waiting for you.':{ar:'أفعال بانتظارك.',kab:'imyagen ttraǧun-k.',fr:'verbes vous attendent.',de:'Verben warten auf dich.',es:'verbos te esperan.',it:'verbi ti aspettano.',pt:'verbos esperam por você.',tr:'fiil seni bekliyor.',nl:'werkwoorden wachten op je.',ru:'глаголов ждут вас.'},
  'YOUR BEST RESULTS':{ar:'أفضل نتائجك',kab:'Igmaḍ-ik ifazen',fr:'VOS MEILLEURS RÉSULTATS',de:'DEINE BESTEN ERGEBNISSE',es:'TUS MEJORES RESULTADOS',it:'I TUOI RISULTATI MIGLIORI',pt:'SEUS MELHORES RESULTADOS',tr:'EN İYİ SONUÇLARIN',nl:'JE BESTE RESULTATEN',ru:'ВАШИ ЛУЧШИЕ РЕЗУЛЬТАТЫ'},
  'Leaderboard':{ar:'لوحة الصدارة',kab:'Tafelwit n imezwura',fr:'Classement',de:'Bestenliste',es:'Clasificación',it:'Classifica',pt:'Ranking',tr:'Liderlik tablosu',nl:'Ranglijst',ru:'Таблица лидеров'},
  'Saved on this device':{ar:'محفوظ على هذا الجهاز',kab:'Yettwasekles deg yibenk-a',fr:'Enregistré sur cet appareil',de:'Auf diesem Gerät gespeichert',es:'Guardado en este dispositivo',it:'Salvato su questo dispositivo',pt:'Salvo neste dispositivo',tr:'Bu cihazda kaydedilir',nl:'Op dit apparaat opgeslagen',ru:'Сохранено на этом устройстве'},
  'Player name':{ar:'اسم اللاعب',kab:'Isem n umarir',fr:'Nom du joueur',de:'Spielername',es:'Nombre del jugador',it:'Nome giocatore',pt:'Nome do jogador',tr:'Oyuncu adı',nl:'Spelersnaam',ru:'Имя игрока'},
  'Your name':{ar:'اسمك',kab:'Isem-ik',fr:'Votre nom',de:'Dein Name',es:'Tu nombre',it:'Il tuo nome',pt:'Seu nome',tr:'Adın',nl:'Je naam',ru:'Ваше имя'},
  'No scores yet. Finish a quiz to appear here.':{ar:'لا توجد نتائج بعد. أكمل اختبارًا لتظهر هنا.',kab:'Ulac igmaḍ yakan. Fak akayad akken ad tbanḍ dagi.',fr:'Aucun score pour le moment. Terminez un quiz pour apparaître ici.',de:'Noch keine Ergebnisse. Beende ein Quiz, um hier zu erscheinen.',es:'Aún no hay resultados. Termina un quiz para aparecer aquí.',it:'Nessun punteggio. Completa un quiz per apparire qui.',pt:'Ainda não há pontuações. Conclua um quiz para aparecer aqui.',tr:'Henüz puan yok. Burada görünmek için bir testi bitir.',nl:'Nog geen scores. Rond een quiz af om hier te verschijnen.',ru:'Пока нет результатов. Завершите тест, чтобы появиться здесь.'},
  'Practice':{ar:'تدريب',kab:'Aselmed',fr:'Pratique',de:'Übung',es:'Práctica',it:'Pratica',pt:'Prática',tr:'Pratik',nl:'Oefening',ru:'Практика'},
  'Daily challenge':{ar:'التحدي اليومي',kab:'Amzizel n wass',fr:'Défi quotidien',de:'Tages-Challenge',es:'Reto diario',it:'Sfida giornaliera',pt:'Desafio diário',tr:'Günlük görev',nl:'Dagelijkse challenge',ru:'Ежедневное задание'},
  'Share score':{ar:'مشاركة النتيجة',kab:'Bḍu agmuḍ',fr:'Partager le score',de:'Ergebnis teilen',es:'Compartir puntuación',it:'Condividi punteggio',pt:'Compartilhar pontuação',tr:'Puanı paylaş',nl:'Score delen',ru:'Поделиться результатом'},
  'My German verb score':{ar:'نتيجتي في الأفعال الألمانية',kab:'Agmuḍ-iw n yimyagen n talmanit',fr:'Mon score en verbes allemands',de:'Mein Ergebnis bei deutschen Verben',es:'Mi puntuación de verbos alemanes',it:'Il mio punteggio sui verbi tedeschi',pt:'Minha pontuação de verbos alemães',tr:'Almanca fiil puanım',nl:'Mijn score voor Duitse werkwoorden',ru:'Мой результат по немецким глаголам'},
  'Streak':{ar:'سلسلة',kab:'Asdukel',fr:'Série',de:'Serie',es:'Racha',it:'Serie',pt:'Sequência',tr:'Seri',nl:'Reeks',ru:'Серия'},
  'I completed':{ar:'أكملت',kab:'Kemmleɣ',fr:'J’ai terminé',de:'Ich habe abgeschlossen',es:'He completado',it:'Ho completato',pt:'Concluí',tr:'Tamamladım',nl:'Ik voltooide',ru:'Я завершил(а)'},
  'German verbs':{ar:'فعلًا ألمانيًا',kab:'imyagen n talmanit',fr:'verbes allemands',de:'deutsche Verben',es:'verbos alemanes',it:'verbi tedeschi',pt:'verbos alemães',tr:'Almanca fiil',nl:'Duitse werkwoorden',ru:'немецких глаголов'},
  'German verb challenge':{ar:'تحدي الأفعال الألمانية',kab:'Amzizel n yimyagen n talmanit',fr:'Défi de verbes allemands',de:'Challenge für deutsche Verben',es:'Reto de verbos alemanes',it:'Sfida di verbi tedeschi',pt:'Desafio de verbos alemães',tr:'Almanca fiil meydan okuması',nl:'Duitse werkwoordenchallenge',ru:'Вызов по немецким глаголам'},
  'I challenge you to this German verb quiz!':{ar:'أتحداك في اختبار الأفعال الألمانية هذا!',kab:'Ɛerḍeɣ-k ɣer ukayad-a n yimyagen n talmanit!',fr:'Je te défie à ce quiz de verbes allemands !',de:'Ich fordere dich zu diesem deutschen Verbquiz heraus!',es:'¡Te reto a este quiz de verbos alemanes!',it:'Ti sfido a questo quiz di verbi tedeschi!',pt:'Desafio você neste quiz de verbos alemães!',tr:'Seni bu Almanca fiil testine davet ediyorum!',nl:'Ik daag je uit voor deze Duitse werkwoordenquiz!',ru:'Я бросаю тебе вызов в этом тесте по немецким глаголам!'},
  'Can you beat':{ar:'هل يمكنك تجاوز',kab:'Tzemreḍ ad tɛeddiḍ',fr:'Peux-tu dépasser',de:'Kannst du',es:'¿Puedes superar',it:'Riesci a superare',pt:'Você consegue superar',tr:'Geçebilir misin',nl:'Kun jij beter dan',ru:'Сможешь побить'},
  'Copied to clipboard.':{ar:'تم النسخ إلى الحافظة.',kab:'Yettwanɣel ɣer tecfawt.',fr:'Copié dans le presse-papiers.',de:'In die Zwischenablage kopiert.',es:'Copiado al portapapeles.',it:'Copiato negli appunti.',pt:'Copiado para a área de transferência.',tr:'Panoya kopyalandı.',nl:'Gekopieerd naar klembord.',ru:'Скопировано в буфер обмена.'},
  'Sharing is not available in this browser.':{ar:'المشاركة غير متاحة في هذا المتصفح.',kab:'Beṭṭu ur yermid ara deg iminig-a.',fr:'Le partage n’est pas disponible dans ce navigateur.',de:'Teilen ist in diesem Browser nicht verfügbar.',es:'Compartir no está disponible en este navegador.',it:'La condivisione non è disponibile in questo browser.',pt:'O compartilhamento não está disponível neste navegador.',tr:'Paylaşım bu tarayıcıda kullanılamıyor.',nl:'Delen is niet beschikbaar in deze browser.',ru:'Функция «Поделиться» недоступна в этом браузере.'},
  'GERMAN VERB GUIDE':{ar:'دليل الأفعال الألمانية',kab:'Amnir n yimyagen n talmanit',fr:'GUIDE DES VERBES ALLEMANDS',de:'LEITFADEN FÜR DEUTSCHE VERBEN',es:'GUÍA DE VERBOS ALEMANES',it:'GUIDA AI VERBI TEDESCHI',pt:'GUIA DE VERBOS ALEMÃES',tr:'ALMANCA FİİL REHBERİ',nl:'GIDS DUITSE WERKWOORDEN',ru:'СПРАВОЧНИК ПО НЕМЕЦКИМ ГЛАГОЛАМ'},
  'German conjugation from A1 to C2':{ar:'تصريف الأفعال الألمانية من A1 إلى C2',kab:'Asefti n yimyagen n talmanit seg A1 ar C2',fr:'Conjugaison allemande de A1 à C2',de:'Deutsche Konjugation von A1 bis C2',es:'Conjugación alemana de A1 a C2',it:'Coniugazione tedesca da A1 a C2',pt:'Conjugação alemã de A1 a C2',tr:'A1’den C2’ye Almanca çekim',nl:'Duitse vervoeging van A1 tot C2',ru:'Немецкое спряжение от A1 до C2'},
  'Build your German verb skills step by step. Each CEFR level adds more vocabulary, tense control and complex verb patterns.':{ar:'طوّر مهاراتك في الأفعال الألمانية خطوة بخطوة. يضيف كل مستوى من CEFR مفردات أكثر وتحكمًا أفضل بالأزمنة وأنماط أفعال أكثر تعقيدًا.',kab:'Snerni tizemmar-ik deg yimyagen n talmanit s ubrid n ubrid. Yal aswir CEFR irennu amawal, asenqed n wakuden d tɣessa n yimyagen.',fr:'Développez vos verbes allemands étape par étape. Chaque niveau CECR ajoute du vocabulaire, des temps et des structures plus complexes.',de:'Baue deine deutschen Verbkenntnisse Schritt für Schritt aus. Jede GER-Stufe erweitert Wortschatz, Zeitformen und komplexe Verbmuster.',es:'Mejora los verbos alemanes paso a paso. Cada nivel del MCER añade vocabulario, tiempos y patrones más complejos.',it:'Sviluppa i verbi tedeschi passo dopo passo. Ogni livello QCER aggiunge lessico, tempi e schemi più complessi.',pt:'Desenvolva seus verbos alemães passo a passo. Cada nível do CEFR acrescenta vocabulário, tempos e padrões mais complexos.',tr:'Almanca fiil becerilerini adım adım geliştir. Her CEFR seviyesi daha fazla kelime, zaman ve karmaşık kalıp ekler.',nl:'Bouw je Duitse werkwoordkennis stap voor stap op. Elk ERK-niveau voegt woordenschat, tijden en complexere patronen toe.',ru:'Развивайте знание немецких глаголов шаг за шагом. Каждый уровень CEFR добавляет лексику, времена и более сложные модели.'},
  'Master high-frequency verbs in the present tense and essential forms such as sein, haben and werden.':{ar:'أتقن الأفعال الأكثر استخدامًا في المضارع والأشكال الأساسية مثل sein وhaben وwerden.',kab:'Issin imyagen yettwasqedcen aṭas deg wurmir d talɣiwin tigejdanin am sein, haben d werden.',fr:'Maîtrisez les verbes fréquents au présent et les formes essentielles comme sein, haben et werden.',de:'Beherrsche häufige Verben im Präsens und Grundformen wie sein, haben und werden.',es:'Domina los verbos frecuentes en presente y formas esenciales como sein, haben y werden.',it:'Padroneggia i verbi frequenti al presente e forme essenziali come sein, haben e werden.',pt:'Domine verbos frequentes no presente e formas essenciais como sein, haben e werden.',tr:'Şimdiki zamanda sık kullanılan fiilleri ve sein, haben, werden gibi temel biçimleri öğren.',nl:'Beheers veelgebruikte werkwoorden in de tegenwoordige tijd en basisvormen zoals sein, haben en werden.',ru:'Освойте частотные глаголы в настоящем времени и основные формы sein, haben и werden.'},
  'Practise common irregular verbs, Perfekt and verbs used in everyday conversations.':{ar:'تدرّب على الأفعال الشاذة الشائعة وزمن Perfekt والأفعال المستخدمة في المحادثات اليومية.',kab:'Selmed imyagen irulagen yettwasnen, Perfekt d yimyagen n umeslay n yal ass.',fr:'Pratiquez les verbes irréguliers courants, le Perfekt et le vocabulaire du quotidien.',de:'Übe häufige unregelmäßige Verben, das Perfekt und Verben aus Alltagsgesprächen.',es:'Practica verbos irregulares comunes, el Perfekt y verbos de conversación diaria.',it:'Esercitati con verbi irregolari comuni, Perfekt e verbi quotidiani.',pt:'Pratique verbos irregulares comuns, Perfekt e verbos do cotidiano.',tr:'Yaygın düzensiz fiilleri, Perfekt’i ve günlük konuşma fiillerini çalış.',nl:'Oefen veelvoorkomende onregelmatige werkwoorden, het Perfekt en dagelijkse werkwoorden.',ru:'Практикуйте распространённые неправильные глаголы, Perfekt и повседневную лексику.'},
  'Work with separable verbs, narrative past forms and a wider range of irregular patterns.':{ar:'تدرّب على الأفعال المنفصلة وصيغ الماضي السردي ومجموعة أوسع من الأنماط الشاذة.',kab:'Xdem akked yimyagen yettemgaraden, talɣiwin n yizri d ugar n tɣessa tirulagin.',fr:'Travaillez les verbes séparables, le passé narratif et davantage de modèles irréguliers.',de:'Arbeite mit trennbaren Verben, Erzählformen der Vergangenheit und mehr unregelmäßigen Mustern.',es:'Trabaja verbos separables, formas narrativas del pasado y más patrones irregulares.',it:'Lavora con verbi separabili, passato narrativo e più schemi irregolari.',pt:'Trabalhe verbos separáveis, formas narrativas do passado e mais padrões irregulares.',tr:'Ayrılabilen fiiller, anlatı geçmişi ve daha geniş düzensiz kalıplarla çalış.',nl:'Werk met scheidbare werkwoorden, verhalende verleden tijd en meer onregelmatige patronen.',ru:'Работайте с отделяемыми глаголами, повествовательными формами прошлого и более широкими неправильными моделями.'},
  'Strengthen formal and abstract verbs while controlling compound tenses and subordinate-clause vocabulary.':{ar:'عزّز الأفعال الرسمية والمجردة مع إتقان الأزمنة المركبة ومفردات الجمل التابعة.',kab:'Snerni imyagen unṣiben d imadwanen, s usenqed n wakuden uddisen d umawal n tefyirt tanaddawt.',fr:'Renforcez les verbes formels et abstraits, les temps composés et le vocabulaire des subordonnées.',de:'Festige formelle und abstrakte Verben sowie zusammengesetzte Zeiten und Nebensatzwortschatz.',es:'Refuerza verbos formales y abstractos, tiempos compuestos y vocabulario de subordinadas.',it:'Rafforza verbi formali e astratti, tempi composti e lessico delle subordinate.',pt:'Fortaleça verbos formais e abstratos, tempos compostos e vocabulário de orações subordinadas.',tr:'Resmî ve soyut fiilleri, birleşik zamanları ve yan cümle kelimelerini güçlendir.',nl:'Versterk formele en abstracte werkwoorden, samengestelde tijden en bijzinswoordenschat.',ru:'Укрепляйте формальные и абстрактные глаголы, сложные времена и лексику придаточных предложений.'},
  'Practise precise academic and professional verbs, including complex prefixes and advanced mood forms.':{ar:'تدرّب على الأفعال الأكاديمية والمهنية الدقيقة، بما في ذلك السوابق المعقدة وصيغ الأسلوب المتقدمة.',kab:'Selmed imyagen n uselmed d uxeddim s telqayt, gar-asen izwiren uddisen d talɣiwin n tarrayt leqqayen.',fr:'Pratiquez des verbes académiques et professionnels précis, avec préfixes complexes et modes avancés.',de:'Übe präzise akademische und berufliche Verben mit komplexen Präfixen und fortgeschrittenen Modi.',es:'Practica verbos académicos y profesionales precisos, con prefijos complejos y modos avanzados.',it:'Esercitati con verbi accademici e professionali precisi, prefissi complessi e modi avanzati.',pt:'Pratique verbos acadêmicos e profissionais precisos, com prefixos complexos e modos avançados.',tr:'Karmaşık önekler ve ileri kiplerle akademik ve profesyonel fiilleri çalış.',nl:'Oefen precieze academische en professionele werkwoorden met complexe voorvoegsels en geavanceerde wijzen.',ru:'Практикуйте точные академические и профессиональные глаголы, сложные приставки и продвинутые наклонения.'},
  'Refine rare, idiomatic and highly nuanced verbs used in sophisticated written and spoken German.':{ar:'طوّر الأفعال النادرة والاصطلاحية والدقيقة المستخدمة في الألمانية المتقدمة كتابةً وحديثًا.',kab:'Sleq yimyagen i d-yettbanen drus, wid n yinzi d wid yesɛan anamek leqqay deg talmanit tusligt.',fr:'Affinez les verbes rares, idiomatiques et nuancés de l’allemand soutenu écrit et oral.',de:'Verfeinere seltene, idiomatische und stark nuancierte Verben in anspruchsvollem Deutsch.',es:'Perfecciona verbos raros, idiomáticos y muy matizados del alemán avanzado.',it:'Affina verbi rari, idiomatici e molto sfumati del tedesco avanzato.',pt:'Aprimore verbos raros, idiomáticos e muito sutis do alemão avançado.',tr:'İleri düzey yazılı ve sözlü Almancadaki nadir, deyimsel ve ince anlamlı fiilleri geliştir.',nl:'Verfijn zeldzame, idiomatische en genuanceerde werkwoorden in gevorderd Duits.',ru:'Оттачивайте редкие, идиоматические и тонко оттенённые глаголы продвинутого немецкого.'},
  'Example:':{ar:'مثال:',kab:'Amedya:',fr:'Exemple :',de:'Beispiel:',es:'Ejemplo:',it:'Esempio:',pt:'Exemplo:',tr:'Örnek:',nl:'Voorbeeld:',ru:'Пример:'}
});
setInterfaceLanguage(interfaceLocale);
uiTranslateTree(document.body);


// Organized dashboard + progress calculator translations.
Object.assign(UI_LANGUAGES, {
  'complete':{ar:'مكتمل',kab:'ikemmel',fr:'terminé',de:'erledigt',es:'completado',it:'completato',pt:'concluído',tr:'tamamlandı',nl:'voltooid',ru:'выполнено'},
  'Percentage calculator':{ar:'حاسبة النسبة المئوية',kab:'Amsiḍen n tfesna',fr:'Calculateur de pourcentage',de:'Prozentrechner',es:'Calculadora de porcentaje',it:'Calcolatore percentuale',pt:'Calculadora de porcentagem',tr:'Yüzde hesaplayıcı',nl:'Percentagecalculator',ru:'Калькулятор процентов'},
  'Track your progress toward a custom verb goal.':{ar:'تتبّع تقدمك نحو هدف مخصص لعدد الأفعال.',kab:'Ḍfer asfari-ik ɣer yiswi n yimyagen i tferneḍ.',fr:'Suivez votre progression vers un objectif personnalisé de verbes.',de:'Verfolge deinen Fortschritt zu einem eigenen Verbziel.',es:'Sigue tu progreso hacia un objetivo personalizado de verbos.',it:'Segui i progressi verso un obiettivo personalizzato di verbi.',pt:'Acompanhe seu progresso rumo a uma meta personalizada de verbos.',tr:'Özel fiil hedefine doğru ilerlemeni takip et.',nl:'Volg je voortgang naar een persoonlijk werkwoorddoel.',ru:'Отслеживайте прогресс к своей цели по глаголам.'},
  'Completed':{ar:'مكتمل',kab:'Ikemmel',fr:'Terminés',de:'Erledigt',es:'Completados',it:'Completati',pt:'Concluídos',tr:'Tamamlandı',nl:'Voltooid',ru:'Выполнено'},
  'Goal verbs':{ar:'هدف الأفعال',kab:'Iswi n yimyagen',fr:'Objectif de verbes',de:'Verbziel',es:'Meta de verbos',it:'Obiettivo verbi',pt:'Meta de verbos',tr:'Fiil hedefi',nl:'Werkwoorddoel',ru:'Цель по глаголам'},
  'verbs remaining':{ar:'فعل متبقٍ',kab:'imyagen i d-yeqqimen',fr:'verbes restants',de:'Verben übrig',es:'verbos restantes',it:'verbi rimanenti',pt:'verbos restantes',tr:'fiil kaldı',nl:'werkwoorden resterend',ru:'глаголов осталось'},
  'verbs remaining to reach your goal':{ar:'فعل متبقٍ للوصول إلى هدفك',kab:'imyagen i d-yeqqimen akken ad tawḍeḍ ɣer yiswi-k',fr:'verbes restants pour atteindre votre objectif',de:'Verben bis zu deinem Ziel',es:'verbos restantes para alcanzar tu meta',it:'verbi rimanenti per raggiungere il tuo obiettivo',pt:'verbos restantes para atingir sua meta',tr:'hedefine ulaşmak için fiil kaldı',nl:'werkwoorden resterend tot je doel',ru:'глаголов осталось до вашей цели'},
  'Keep going':{ar:'استمر',kab:'Kemmel',fr:'Continuez',de:'Weiter so',es:'Sigue así',it:'Continua così',pt:'Continue',tr:'Devam et',nl:'Ga door',ru:'Продолжайте'},
  'Great progress':{ar:'تقدم رائع',kab:'Asfari igerrzen',fr:'Très beaux progrès',de:'Toller Fortschritt',es:'Gran progreso',it:'Ottimi progressi',pt:'Ótimo progresso',tr:'Harika ilerleme',nl:'Goede voortgang',ru:'Отличный прогресс'},
  'Almost there':{ar:'أوشكت على الوصول',kab:'Qrib ad tawḍeḍ',fr:'Presque terminé',de:'Fast geschafft',es:'Ya casi está',it:'Ci sei quasi',pt:'Quase lá',tr:'Neredeyse bitti',nl:'Bijna klaar',ru:'Почти готово'},
  'Complete':{ar:'مكتمل',kab:'Ikemmel',fr:'Terminé',de:'Abgeschlossen',es:'Completado',it:'Completato',pt:'Concluído',tr:'Tamamlandı',nl:'Voltooid',ru:'Завершено'},
  'Start your first verb':{ar:'ابدأ بأول فعل',kab:'Bdu s umyag amezwaru',fr:'Commencez votre premier verbe',de:'Starte mit deinem ersten Verb',es:'Empieza tu primer verbo',it:'Inizia il tuo primo verbo',pt:'Comece seu primeiro verbo',tr:'İlk fiilinle başla',nl:'Start met je eerste werkwoord',ru:'Начните с первого глагола'},
  'days':{ar:'أيام',kab:'ussan',fr:'jours',de:'Tage',es:'días',it:'giorni',pt:'dias',tr:'gün',nl:'dagen',ru:'дней'},
  'Share your current percentage':{ar:'شارك نسبة تقدمك الحالية',kab:'Bḍu tafesna n usfari-ik',fr:'Partagez votre pourcentage actuel',de:'Teile deinen aktuellen Prozentsatz',es:'Comparte tu porcentaje actual',it:'Condividi la tua percentuale attuale',pt:'Compartilhe sua porcentagem atual',tr:'Mevcut yüzdesini paylaş',nl:'Deel je huidige percentage',ru:'Поделитесь текущим процентом'},
  'Send a quiz link':{ar:'أرسل رابط اختبار',kab:'Azen aseɣwen n ukayad',fr:'Envoyer un lien de quiz',de:'Quiz-Link senden',es:'Enviar un enlace de quiz',it:'Invia un link al quiz',pt:'Enviar um link de quiz',tr:'Test bağlantısı gönder',nl:'Stuur een quizlink',ru:'Отправить ссылку на тест'}
});
setInterfaceLanguage(interfaceLocale);
uiTranslateTree(document.body);
