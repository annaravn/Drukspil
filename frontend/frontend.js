


let inputCounter = 1;
let inputs = {}; // Objekt til at gemme inputfelterne
let person = "";
let person1 = "";

document.getElementById("createButton").addEventListener("click", createInputField);

function createInputField() {
    // Opret et nyt inputfelt
    let input = document.createElement("input");
    input.type = "text";
    let variableName = "variable" + inputCounter;
    input.id = "input" + inputCounter; // Tildel et unikt ID til inputfeltet
    input.placeholder = "Input " + inputCounter; // Tilføj placeholder

    // Tilføj inputfeltet til DOM'en
    document.getElementById("container").appendChild(input);

    // Gem inputfeltet i objektet med variabelnavnet som nøgle
    inputs[variableName] = input;

    // Opdater variablen med værdien fra det nye inputfelt
    input.addEventListener("input", function() {
        updateVariable(variableName);
    });

    // Øg tælleren for inputfelter
    inputCounter++;

    console.log(inputCounter)
}

function updateVariable(variableName) {
    // Find det tilsvarende inputfelt baseret på variabelnavnet
    let inputId = variableName.replace("variable", "input");
    let inputValue = document.getElementById(inputId).value;

    // Opret den nye variabel med inputfeltets værdi
    window[variableName] = inputValue;

    console.log("Variabel " + variableName + " er opdateret: " + window[variableName]);
   
}








let username = "Mikkel";
let Eksempel = "";

document.getElementById("mySubmit").onclick = function() {
  Eksempel = document.getElementById("myText").value;
  username = Eksempel;
 

}



function random() {
  return Math.floor(Math.floor(Math.random() * inputCounter) + 1);
}



function HåndterUdfordring() {

  let tilfældigtIndex = random();
  let tilfældigtIndex1 = random();
  let variabelNavn = "variable" + tilfældigtIndex;
  let variabelNavn1 = "variable" + tilfældigtIndex1;
  person = window[variabelNavn];
  person1 = window[variabelNavn1];
  
  console.log("Valgt person:", person);
 
  
  






  fetch("/kortTekst")
    .then((response) => response.json())
    .then((data) => {
      if (data.type === "kort") {
        const kortHolder = document.getElementById("kortHolder");
        kortHolder.innerHTML = "";
        console.log(data);
        // Erstat "[person1]" med "Mikkel" i teksten
        let tekst = data.tekst.replace(/\[person1\]/g, person);
        tekst = tekst.replace(/\[person2\]/g, person1);
        data.tekst = tekst; // Opdater teksten i data-objektet
        console.log(data); // Log det opdaterede data-objekt
        const tekstHolder = document.createTextNode(data.tekst);
        kortHolder.appendChild(tekstHolder);
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

function HåndterSpil(data) {
  const spil = data.navn;
  switch(spil) {
    case "testSpil":
      testSpil();
      break;
    case "russiskRulette":
      russiskRulette();
      break;
    case "spinWheel":
      spinWheel();
      break;
  }
  console.log(data.navn, "Yay, et spil!");
}