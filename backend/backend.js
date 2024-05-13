// Importér nødvendige moduler
const express = require("express");
const fs = require("fs");

// Opret en instans af Express-applikationen
const app = express();
const port = 3001;

// Server statiske filer fra mappen "frontend"
app.use(
  express.static("frontend", {
    index: "index.html",
  })
);

// Definér klasser
class Udfordring {
  constructor(id) {
    this.id = id;
    this.type = "";
    this.kategori = "";
  }
  præsenter() {
    console.log(`ID: ${this.id}, Type: ${this.type}`);
  }
}

class Kort extends Udfordring {
  constructor(id, tekst) {
    super(id);
    this.tekst = tekst;
    this.type = "kort";
  }
  præsenter() {
    super.præsenter(); // Kalder superklassens metode
    console.log(`Tekst: ${this.tekst}`); // Tilføjer underklassens specifikke information
  }
}

class Spil extends Udfordring {
  constructor(id, navn) {
    super(id);
    this.navn = navn;
    this.type = "spil";
  }
  præsenter() {
    super.præsenter(); // Kalder superklassens metode
    console.log(`Navn: ${this.navn}`); // Tilføjer underklassens specifikke information
  }
}

// Funktion til at læse og behandle JSON-fil for "kort" kortene
function lavKort(callback) {
  fs.readFile('backend/kort.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Fejl ved læsning af kort JSON-fil:', err);
      callback(err);
      return;
    }
    // Parser JSON-data
    console.log(data);
    const kortData = JSON.parse(data);
    console.log(kortData);
    const kortSamling = kortData.map(kortInfo => new Kort(kortInfo.id, kortInfo.tekst));
    callback(null, kortSamling);
  });
}

// Funktion til at læse og behandle JSON-fil for "spil" kortene
function lavSpil(callback) {
  fs.readFile('backend/spil.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Fejl ved læsning af spil JSON-fil:', err);
      callback(err);
      return;
    }
    // Parser JSON-data
    const spilData = JSON.parse(data);
    const spilSamling = spilData.map(spilInfo => new Spil(spilInfo.id, spilInfo.navn));
    callback(null, spilSamling);
  });
}

// Kald lavKort og lavSpil én gang når serveren starter
let kortSamling = [];
let spilSamling = [];
lavKort((err, kort) => {
  if (err) {
    console.error('Fejl ved oprettelse af kort:', err);
    return;
  }
  kortSamling = kort;
});

lavSpil((err, spil) => {
  if (err) {
    console.error('Fejl ved oprettelse af spil:', err);
    return;
  }
  spilSamling = spil;
});

// Endpoint for at hente en korttekst
app.get("/hentUdfordringer", (req, res) => {
  // Kombinér kortSamling og spilSamling til én array
  const combinedSamling = kortSamling.concat(spilSamling);
  // Sørg for, at 'i' ikke overskrider længden af combinedSamling
  const i = Math.floor(Math.random() * combinedSamling.length);
 //combinedSamling[i].præsenter();
  res.json(combinedSamling[i]);
});


// Start serveren
app.listen(port, () => {
  console.log(`Backend lytter på port ${port}`);
});
