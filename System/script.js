let currentIndex = 0;
let currentSor = [];

const container = document.getElementById("question-container");
const ellenorizBtn = document.getElementById("ellenoriz");
const elozoBtn = document.getElementById("elozo");
const tovabbBtn = document.getElementById("tovabb");
const startInput = document.getElementById("startIndex");
const startBtn = document.getElementById("startBtn");
const select = document.getElementById("kerdesSorSelect");
const loadBtn = document.getElementById("loadSorBtn");
const ujrakezdesBtn = document.getElementById("ujrakezdes");

kerdesek.forEach((sor, i) => {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = sor[0];
  select.appendChild(option);
});

loadBtn.addEventListener("click", () => {
  const index = parseInt(select.value);
  currentSor = kerdesek[index].slice(1);
  currentIndex = 0;
  showQuestion(currentIndex);

  startInput.style.display = "inline-block";
  startBtn.style.display = "inline-block";
  document.getElementById("end_btn").style.display = "inline-block";

  ellenorizBtn.style.display = "inline-block";
  elozoBtn.style.display = "inline-block";
  tovabbBtn.style.display = "inline-block";

  startInput.max = currentSor.length;
  startInput.value = "";
  startBtn.disabled = true;
});

startInput.max = kerdesek.length;

startInput.addEventListener("input", () => {
  let value = parseInt(startInput.value);
  const maxIndex = currentSor.length;
  if (value > maxIndex) value = maxIndex;
  if (value < 1) value = 1;
  startInput.value = value;
  if (!isNaN(value) && value >= 1 && value <= maxIndex) startBtn.disabled = false;
  else startBtn.disabled = true;
});

startBtn.addEventListener("click", () => {
  let index = parseInt(startInput.value) - 1;
  currentIndex = index;
  showQuestion(currentIndex);
});

ellenorizBtn.addEventListener("click", () => {
  evaluateCurrentQuestion();
  ellenorizBtn.disabled = true;
});

tovabbBtn.addEventListener("click", () => {
  if (currentIndex === currentSor.length - 1) {
    currentIndex++;
    showQuestion(currentIndex);
  } else {
    currentIndex++;
    showQuestion(currentIndex);
    ellenorizBtn.disabled = false;
  }
});

elozoBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion(currentIndex);
    ellenorizBtn.disabled = false;
  }
});

ujrakezdesBtn.addEventListener("click", () => {
  container.innerHTML = "";
  currentIndex = 0;

  ellenorizBtn.style.display = "none";
  tovabbBtn.style.display = "none";
  elozoBtn.style.display = "none";
  ujrakezdesBtn.style.display = "none";

  startInput.style.display = "inline-block";
  startBtn.style.display = "inline-block";
  select.style.display = "inline-block";
  loadBtn.style.display = "inline-block";

  if (currentSor.length > 0) {
    showQuestion(currentIndex);
  }
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function showQuestion(index) {
  container.innerHTML = "";

  if (index >= currentSor.length) {
    container.innerHTML = "<strong>A kérdéssor végére értél! GG</strong>";

    ellenorizBtn.style.display = "none";
    tovabbBtn.style.display = "none";
    elozoBtn.style.display = "none";

    ujrakezdesBtn.style.display = "block";
    return;
  }

  ujrakezdesBtn.style.display = "none";
  const k = currentSor[index];
  const div = document.createElement("div");

  const label = document.createElement("label");
  label.textContent = `${index + 1}. ${k.szoveg}`;
  div.appendChild(label);

  if (k.kep) {
    const img = document.createElement("img");
    img.src = "System/Images/" + k.kep;
    div.appendChild(img);
  }

  if (k.tipus === "checkbox" || k.tipus === "radio") {
    let valaszok = [...k.valaszok];
    shuffleArray(valaszok);

    valaszok.forEach(v => {
      const inputLabel = document.createElement("label");
      inputLabel.style.display = "block";
      inputLabel.style.cursor = "pointer";
      inputLabel.classList.add("input_design")

      const input = document.createElement("input");
      input.type = k.tipus;
      input.name = k.tipus === "checkbox" ? `kerdes${index}[]` : `kerdes${index}`;
      input.value = v;

      inputLabel.appendChild(input);
      inputLabel.appendChild(document.createTextNode(" " + v));
      div.appendChild(inputLabel);
    });
  } else if (k.tipus === "text") {
    const input = document.createElement("input");
    input.type = "text";
    input.name = `kerdes${index}`;
    input.classList.add("text_input")
    div.appendChild(input);
  }

  container.appendChild(div);

  ellenorizBtn.style.display = "inline-block";
  tovabbBtn.style.display = "inline-block";
  elozoBtn.style.display = "inline-block";

  ellenorizBtn.disabled = false;
  elozoBtn.disabled = currentIndex === 0;

  if (currentIndex === currentSor.length - 1) {
    tovabbBtn.textContent = "Befejezés";
  } else {
    tovabbBtn.textContent = "Tovább";
  }
  tovabbBtn.disabled = false;
}

function evaluateCurrentQuestion() {
  const k = currentSor[currentIndex];

  if (k.tipus === "checkbox") {
    const inputs = Array.from(document.querySelectorAll(`input[name="kerdes${currentIndex}[]"]`));
    inputs.forEach(input => {
      if (k.helyes.includes(input.value)) input.parentElement.classList.add("helyes");
      if (input.checked && !k.helyes.includes(input.value)) input.parentElement.classList.add("helytelen");
    });
  }

  else if (k.tipus === "radio") {
    const inputs = Array.from(document.querySelectorAll(`input[name="kerdes${currentIndex}"]`));
    inputs.forEach(input => {
      if (input.value === k.helyes) input.parentElement.classList.add("helyes");
    });
    const valasztott = inputs.find(inp => inp.checked);
    if (valasztott && valasztott.value !== k.helyes)
      valasztott.parentElement.classList.add("helytelen");
  }

  else if (k.tipus === "text") {
    const input = document.querySelector(`input[name="kerdes${currentIndex}"]`);
    const prevMsg = input.nextElementSibling;
    if (prevMsg && prevMsg.classList.contains("helyes-valasz-msg")) prevMsg.remove();

    if (input.value === k.helyes) {
      input.classList.add("helyes");
    } else {
      input.classList.add("helytelen");
      const msg = document.createElement("p");
      msg.innerHTML = 'Helyes válasz: <strong>' + k.helyes + '</strong>';
      msg.className = "helyes-valasz-msg";
      msg.style.margin = "5px 0 0 0";
      msg.style.color = "green";
      input.parentElement.appendChild(msg);
    }
  }

  tovabbBtn.style.display = "block";
}