// Import required modules
const express = require("express");
const fs = require("fs");

// Create an instance of the Express application
const app = express();
const port = 3001;

// Serve static files from the "frontend" directory
app.use(
  express.static("frontend", {
    index: "index.html",
  })
);

// Define classes
class Udfordring {
  constructor(id) {
    this.id = id;
    this.type = "";
  }
}

class Kort extends Udfordring {
  constructor(id, tekst) {
    super(id);
    this.tekst = tekst;
    this.type = "kort";
  }
}

class Spil extends Udfordring {
  constructor(id, navn) {
    super(id);
    this.navn = navn;
    this.type = "spil";
  }
}

// Function to read and process JSON file for "kort" cards
function lavKort(callback) {
  fs.readFile('backend/kort.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading kort JSON file:', err);
      callback(err);
      return;
    }
    // Parse JSON data
    const kortData = JSON.parse(data);
    const kortSamling = kortData.map(kortInfo => new Kort(kortInfo.id, kortInfo.tekst));
    callback(null, kortSamling);
  });
}

// Function to read and process JSON file for "spil" cards
function lavSpil(callback) {
  fs.readFile('backend/spil.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading spil JSON file:', err);
      callback(err);
      return;
    }
    // Parse JSON data
    const spilData = JSON.parse(data);
    const spilSamling = spilData.map(spilInfo => new Spil(spilInfo.id, spilInfo.navn));
    callback(null, spilSamling);
  });
}

// Call lavKort and lavSpil once when the server starts
let kortSamling = [];
let spilSamling = [];
lavKort((err, kort) => {
  if (err) {
    console.error('Error creating kort:', err);
    return;
  }
  kortSamling = kort;
});

lavSpil((err, spil) => {
  if (err) {
    console.error('Error creating spil:', err);
    return;
  }
  spilSamling = spil;
});

// Endpoint to get a card text
app.get("/kortTekst", (req, res) => {
  // Combine kortSamling and spilSamling into one array
  const combinedSamling = kortSamling.concat(spilSamling);
  // Ensure i doesn't exceed combinedSamling length
  const i = Math.floor(Math.random() * combinedSamling.length);
  res.json(combinedSamling[i]);
});


// Start the server
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
