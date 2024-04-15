
let username = "Mikkel";
let Eksempel = "";

document.getElementById("mySubmit").onclick = function() {
  Eksempel = document.getElementById("myText").value;
  username = Eksempel;
 

}





function HåndterUdfordring() {
  fetch("/kortTekst")
    .then((response) => response.json())
    .then((data) => {
      if (data.type === "kort") {
        const kortHolder = document.getElementById("kortHolder");
        kortHolder.innerHTML = "";
        console.log(data);
        // Erstat "[person1]" med "Mikkel" i teksten
        const tekst = data.tekst.replace(/\[person1\]/g, username);
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