let currentIndex = 0;
let currentSor = [];

/* ===== ELEMENTEK ===== */
const container = document.getElementById("question-container");
const ellenorizBtn = document.getElementById("ellenoriz");
const elozoBtn = document.getElementById("elozo");
const tovabbBtn = document.getElementById("tovabb");
const startInput = document.getElementById("startIndex");
const startBtn = document.getElementById("startBtn");
const select = document.getElementById("kerdesSorSelect");
const loadBtn = document.getElementById("loadSorBtn");
const ujrakezdesBtn = document.getElementById("ujrakezdes");
const endBtn = document.getElementById("end_btn");
const startLabel = document.getElementById("startLabel");

/* ===== INIT ===== */
kerdesek.forEach((sor, i) => {
  const opt = document.createElement("option");
  opt.value = i;
  opt.textContent = sor[0];
  select.appendChild(opt);
});

/* ===== BETÖLTÉS ===== */
loadBtn.onclick = () => {
  currentSor = kerdesek[select.value].slice(1);
  currentIndex = 0;
  showQuestion(currentIndex);

  startInput.style.display = "inline-block";
  startBtn.style.display = "inline-block";
  startLabel.style.display = "inline-block";
  endBtn.style.display = "inline-block";

  ellenorizBtn.style.display = "inline-block";
  tovabbBtn.style.display = "inline-block";
  elozoBtn.style.display = "inline-block";

  startInput.max = currentSor.length;
  startInput.value = "";
  startBtn.disabled = true;
};

/* ===== SORSZÁM UGRÁS ===== */
startInput.addEventListener("input", () => {
  let v = parseInt(startInput.value);
  const max = currentSor.length;

  if (isNaN(v)) {
    startBtn.disabled = true;
    return;
  }

  if (v < 1) v = 1;
  if (v > max) v = max;

  startInput.value = v;
  startBtn.disabled = false;
});

startBtn.onclick = () => {
  currentIndex = parseInt(startInput.value) - 1;
  showQuestion(currentIndex);
};

/* ===== ENTER ===== */
document.addEventListener("keydown", e => {
  if (e.key === "Enter" && !ellenorizBtn.disabled) {
    e.preventDefault();
    ellenorizBtn.click();
  }
});

/* ===== NAV ===== */
ellenorizBtn.onclick = () => {
  evaluateCurrentQuestion();
  ellenorizBtn.disabled = true;
};

tovabbBtn.onclick = () => {
  currentIndex++;
  showQuestion(currentIndex);
};

elozoBtn.onclick = () => {
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion(currentIndex);
  }
};

ujrakezdesBtn.onclick = () => {
  currentIndex = 0;

  // Megjelenítjük a gombokat és inputokat
  ellenorizBtn.style.display = "inline-block";
  tovabbBtn.style.display = "inline-block";
  elozoBtn.style.display = "inline-block";

  startInput.style.display = "inline-block";
  startBtn.style.display = "inline-block";
  startLabel.style.display = "inline-block";
  endBtn.style.display = "inline-block";

  ujrakezdesBtn.style.display = "none";

  // Üres tartalom és új kérdés
  container.innerHTML = "";
  showQuestion(currentIndex);
};


/* ===== KÉRDÉS MEGJELENÍTÉS ===== */
function showQuestion(index) {
  container.innerHTML = "";
  ellenorizBtn.disabled = false;

  // Ha a kérdéssor vége
  if (index >= currentSor.length) {
    container.innerHTML = "<strong>A kérdéssor vége</strong>";

    ellenorizBtn.style.display = "none";
    tovabbBtn.style.display = "none";
    elozoBtn.style.display = "none";

    ujrakezdesBtn.style.display = "block";
    return;
  }

  const k = currentSor[index];
  const div = document.createElement("div");

  // Cím
  const title = document.createElement("h3");
  title.textContent = `${index + 1}. ${k.szoveg}`;
  div.appendChild(title);

  // Kép
  if (k.kep) {
    const img = document.createElement("img");
    img.src = "System/Images/" + k.kep;
    img.classList.add("question-image");
    div.appendChild(img);
  }

  /* ===== VÁLASZTÍPUSOK ===== */
  if (k.tipus === "checkbox" || k.tipus === "radio") {
    let vals = [...k.valaszok];
    shuffleArray(vals);

    vals.forEach(v => {
        const lbl = document.createElement("label");
        lbl.className = "input_design";

        const inp = document.createElement("input");
        inp.type = k.tipus;
        inp.name = k.tipus === "checkbox" ? `q${index}[]` : `q${index}`;
        inp.value = v.replace(/<[^>]+>/g, ''); // az értéket mindig tisztán tároljuk

        lbl.appendChild(inp);

        // A v-ben lehet HTML, ezt innerHTML-ként tesszük be
        const span = document.createElement("span");
        span.innerHTML = " " + v; 
        lbl.appendChild(span);

        div.appendChild(lbl);
    });
}

  else if (k.tipus === "text") {
    const inp = document.createElement("input");
    inp.type = "text";
    inp.name = `q${index}`;
    inp.className = "text_input";
    div.appendChild(inp);
  }
  else if (k.tipus === "dragdrop") {
    renderDragDrop(k, div);
  }

  container.appendChild(div);

  /* ===== GOMBOK ===== */
  ujrakezdesBtn.style.display = "none";
  ellenorizBtn.style.display = "inline-block";
  tovabbBtn.style.display = "inline-block";
  elozoBtn.style.display = "inline-block";

  elozoBtn.disabled = index === 0;
  tovabbBtn.textContent = index === currentSor.length - 1 ? "Befejezés" : "Tovább";
}

/* ===== DRAG & DROP ===== */
function renderDragDrop(k, parent) {
  const wrapper = document.createElement("div");
  wrapper.className = "dragdrop-wrapper";

  const dragRow = document.createElement("div");
  dragRow.className = "drag-items";

  const dropRow = document.createElement("div");
  dropRow.className = "drop-zones";

  const items = [...k.parok.map(p => p.bal), ...(k.kihagyhato || [])];
  shuffleArray(items);

  items.forEach(text => {
    const el = document.createElement("div");
    el.className = "drag-item";
    el.textContent = text;

    // Desktop drag
    el.draggable = true;
    el.ondragstart = e => e.dataTransfer.setData("text/plain", text);

    // Mobil / touch: toggle selection
    el.addEventListener("click", () => {
      if (el.classList.contains("selected")) {
        el.classList.remove("selected");
      } else {
        document.querySelectorAll(".drag-item.selected").forEach(d => d.classList.remove("selected"));
        el.classList.add("selected");
      }
    });

    dragRow.appendChild(el);
  });

  k.parok.forEach(p => {
    const zone = document.createElement("div");
    zone.className = "drop-zone";
    zone.dataset.helyes = p.bal;
    zone.dataset.valaszok = "[]";

    const label = document.createElement("span");
    label.textContent = p.jobb;
    zone.appendChild(label);

    // Desktop drop
    zone.ondragover = e => e.preventDefault();
    zone.ondrop = e => {
      e.preventDefault();
      moveToZone(zone, e.dataTransfer.getData("text/plain"));
    };

    // Mobil tap: ha van kijelölt elem
    zone.addEventListener("click", () => {
      const selected = document.querySelector(".drag-item.selected");
      if (selected) {
        moveToZone(zone, selected.textContent);
        selected.classList.remove("selected");
      }
    });

    dropRow.appendChild(zone);
  });

  wrapper.appendChild(dragRow);
  wrapper.appendChild(dropRow);
  parent.appendChild(wrapper);
}

function moveToZone(zone, val) {
  document.querySelectorAll(".drop-zone").forEach(z => {
    let l = JSON.parse(z.dataset.valaszok);
    if (l.includes(val)) {
      z.dataset.valaszok = JSON.stringify(l.filter(v => v !== val));
      renderZone(z);
    }
  });

  let lista = JSON.parse(zone.dataset.valaszok);
  lista.push(val);
  zone.dataset.valaszok = JSON.stringify(lista);
  renderZone(zone);
}

function renderZone(zone) {
  zone.querySelectorAll(".drop-value").forEach(e => e.remove());
  const lista = JSON.parse(zone.dataset.valaszok);

  lista.forEach(val => {
    const el = document.createElement("div");
    el.className = "drop-value";
    el.textContent = val;
    el.draggable = true;

    el.ondblclick = () => {
      zone.dataset.valaszok = JSON.stringify(lista.filter(v => v !== val));
      renderZone(zone);
    };

    el.ondragstart = e => {
      e.dataTransfer.setData("text/plain", val);
    };

    zone.appendChild(el);
  });
}

/* ===== KIÉRTÉKELÉS ===== */
function evaluateCurrentQuestion() {
  const k = currentSor[currentIndex];

  if (k.tipus === "checkbox") {
    document.querySelectorAll(`input[name="q${currentIndex}[]"]`).forEach(i => {
      if (k.helyes.includes(i.value)) i.parentElement.classList.add("helyes");
      else if (i.checked) i.parentElement.classList.add("helytelen");
    });
  }

  else if (k.tipus === "radio") {
    document.querySelectorAll(`input[name="q${currentIndex}"]`).forEach(i => {
      if (i.value === k.helyes) i.parentElement.classList.add("helyes");
      else if (i.checked) i.parentElement.classList.add("helytelen");
    });
  }

  else if (k.tipus === "text") {
    const inp = document.querySelector(`input[name="q${currentIndex}"]`);
    inp.classList.add(inp.value === k.helyes ? "helyes" : "helytelen");
  }

  else if (k.tipus === "dragdrop") {
    document.querySelectorAll(".drop-zone").forEach(z => {
      z.classList.remove("helyes", "helytelen");

      const lista = JSON.parse(z.dataset.valaszok);
      const helyes = z.dataset.helyes;

      if (lista.length === 0) {
        z.classList.add("helytelen");
        return;
      }

      const hibas = lista.some(v => v !== helyes);
      z.classList.add(hibas ? "helytelen" : "helyes");
    });
  }
}

/* ===== UTIL ===== */
function shuffleArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
}
