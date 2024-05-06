let inputCounter = 0;
let inputs = {}; // Objekt til at gemme inputfelterne
let person = "";
let person1 = "";
let selectedOption = 3;
let checkboxStatus = true; // Initial værdi er 'true' fordi checkboxen er markeret som checked i HTML

document
  .getElementById("createButton")
  .addEventListener("click", createInputField);

function createInputField() {
  // Opret et nyt inputfelt
  let input = document.createElement("input");
  input.type = "text";
  let variableName = "variable" + inputCounter;
  input.id = "input" + inputCounter; // Tildel et unikt ID til inputfeltet
  input.placeholder = "Spiller " + (inputCounter + 1); // Tilføj placeholder

  // Tilføj inputfeltet til DOM'en
  document.getElementById("container").appendChild(input);

  // Gem inputfeltet i objektet med variabelnavnet som nøgle{
    inputs[variableName] = input;

  // Opdater variablen med værdien fra det nye inputfelt
  input.addEventListener("input", function () {
    updateVariable(variableName);
  });

  // Øg tælleren for inputfelter
  inputCounter++;

  console.log(inputCounter);
}

// Tilføj en funktion til at fjerne inputfelter og de tilknyttede variabler
function removeInputField() {
  if (inputCounter >= 1) {
    // Kontroller, at der er mere end ét inputfelt
    inputCounter--; // Reducer antallet af inputfelter
    let variableName = "variable" + inputCounter; // Bestem navnet på variablen der skal fjernes
    let inputId = "input" + inputCounter; // Bestem ID'et for inputfeltet der skal fjernes
    let inputElement = document.getElementById(inputId); // Find inputfeltet i DOM'en

    document.getElementById("container").removeChild(inputElement); // Fjern inputfeltet fra DOM'en
    delete inputs[variableName]; // Slet inputfeltet fra objektet
    delete window[variableName]; // Slet den globale variabel

    console.log("Inputfelt og variabel fjernet: " + variableName); // Log fjernelsen
  }
}

// Funktion til at skifte synligheden af inputfelter og knapper
function toggleSettings() {
  // Samler elementerne for nem adgang
  const elements = [
    document.getElementById("container"),
    document.getElementById("fjerneknap"),
    document.getElementById("TJEKBOKS"),
    document.getElementById("valgmuligheder"),
  ];

  // Skifter synlighed baseret på nuværende tilstand af 'container'
  const displayStyle = elements[0].style.display === "block" ? "none" : "block";
  elements.forEach((element) => (element.style.display = displayStyle));
}

// Initialiserer elementernes synlighed til 'none' ved indlæsning
document.addEventListener("DOMContentLoaded", () => {
  toggleSettings();
});

// Tilføj en knap til at skjule og vise inputfelter

function updateVariable(variableName) {
  // Find det tilsvarende inputfelt baseret på variabelnavnet
  let inputId = variableName.replace("variable", "input");
  let inputValue = document.getElementById(inputId).value;

  // Opret den nye variabel med inputfeltets værdi
  window[variableName] = inputValue;

  console.log(
    "Variabel " + variableName + " er opdateret: " + window[variableName]
  );
}

function random() {
  return Math.floor(Math.random() * inputCounter);
}

function randomTåre(tal) {
  return Math.floor(Math.random() * tal + 1);
}

// Funktion til at opdatere padding baseret på tekstlængde
function updatePadding(tekst) {
  const ordAntal = tekst.split(" ").length; // Beregn antallet af ord
  const padding = ordAntal > 30 ? 60 : 40; // Juster værdierne som du ønsker
  document.getElementById("kortHolder").style.padding = `${padding}px`;
  const width = ordAntal > 30 ? 50 : 40; // Juster værdierne som du ønsker
  document.getElementById("kortHolder").style.width = `${width}vw`;
}

document
  .getElementById("optionsSelect")
  .addEventListener("change", function () {
    selectedOption = parseInt(this.value); // Henter og konverterer værdien af den valgte mulighed til en streng
    console.log("Valgt mulighed:", selectedOption); // Logger den valgte mulighed i konsollen som en streng
  });

function HåndterUdfordring() {
  let driktårer = selectedOption * randomTåre(2) + randomTåre(3);

  let tilfældigtIndex = random(inputCounter);
  let tilfældigtIndex1 = random(inputCounter);

  while (true) {
    if (inputCounter < 2) {
      alert("Du skal tilføje mindst to spillere");
      break;
    } else if (inputCounter === 2) {
      if (tilfældigtIndex === 1) {
        tilfældigtIndex1 = 0;
        break;
      } else {
        tilfældigtIndex1 = 1;
        break;
      }
    } else if (tilfældigtIndex === tilfældigtIndex1) {
      tilfældigtIndex1 = random(inputCounter);
    } else {
      break;
    }
  }

  let variabelNavn = "variable" + tilfældigtIndex;
  let variabelNavn1 = "variable" + tilfældigtIndex1;
  person = window[variabelNavn];
  person1 = window[variabelNavn1];

  console.log("Valgt person:", person);

  fetch("/hentUdfordringer")
    .then((response) => response.json())
    .then((data) => {
      if (data.type === "kort") {
        const kortHolder = document.getElementById("kortHolder");
        kortHolder.innerHTML = "";
        console.log(data);
        // Erstat "[person1]" med "Mikkel" i teksten
        let tekst = data.tekst.replace(/\[person1\]/g, person);
        tekst = tekst.replace(/\[person2\]/g, person1);
        tekst = tekst.replace(/\[driktårer\]/g, driktårer);
        data.tekst = tekst; // Opdater teksten i data-objektet
        console.log(data); // Log det opdaterede data-objekt
        const tekstHolder = document.createTextNode(data.tekst);
        kortHolder.appendChild(tekstHolder);
        updatePadding(data.tekst);
      } else if (data.type === "spil") {
        console.log("Her var et spil");
        HåndterSpil(data);
      } else {
        console.log("Fejl: hverken kort eller spil");
      }
    })

    .catch((error) => console.error("Error:", error));
  console.log(inputCounter);
}

// Tilføj en event listener til checkboxen for at håndtere ændringer
document
  .getElementById("toggleCheckbox")
  .addEventListener("change", function () {
    checkboxStatus = this.checked; // Ændrer værdien af checkboxStatus baseret på om checkboxen er checked eller ej
    console.log("Checkbox status:", checkboxStatus); // Logger den nye status i konsollen
  });

function HåndterSpil(data) {
  const spilActions = {
    hangMan: hangMan,
    flappyBird: flappyBird,
    spinWheel: spinWheel,
    talGeat: talGeat,
    WhackAMole: WhackAMole,
    huskeSpil: huskeSpil,
    blackJack: blackJack,
    stenSaksPapir: stenSaksPapir,
    reactionTest: reactionTest,
    wordScrable: wordScrable,
  };

  // Hent funktionen baseret på spillets navn, hvis den findes, og spillet er aktiveret
  const spilNavn = data.navn;
  const spilFunktion = spilActions[spilNavn];

  if (checkboxStatus && spilFunktion) {
    spilFunktion(); // Kører den relevante funktion hvis spillet er aktiveret
  }
}
