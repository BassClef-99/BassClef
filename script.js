
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
  if(customLists[name]) return showDialog("This list already exists.");

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

  Object.keys(customLists).forEach(name=>{
    const box=document.createElement("div");
    box.className="custom-box";

    const title=document.createElement("h3");
    title.textContent=name;

    const count=document.createElement("p");
    count.className="custom-count";
    count.textContent=`${customLists[name].length} verbs`;

    const open=document.createElement("button");
    open.textContent="Open list";
    open.onclick=()=>openCustomList(name);

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

  Object.keys(database).forEach(lvl=>{
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

  document.getElementById("customVerbCount").textContent=`${customLists[name].length} verbs selected`;

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
    if (["SCRIPT","STYLE","OPTION"].includes(root.tagName)) return;
    for (const attribute of ["placeholder","title","aria-label"]) uiTranslateAttribute(root, attribute);
  }
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return node.parentElement && !["SCRIPT","STYLE","OPTION"].includes(node.parentElement.tagName)
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
 function open(){previousFocus=document.activeElement;backdrop.hidden=false;panel.classList.add('is-open');panel.setAttribute('aria-hidden','false');trigger.setAttribute('aria-expanded','true');document.body.classList.add('settings-open');close.focus();}
 function dismiss(){panel.classList.remove('is-open');panel.setAttribute('aria-hidden','true');trigger.setAttribute('aria-expanded','false');document.body.classList.remove('settings-open');backdrop.hidden=true;previousFocus?.focus();}
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
