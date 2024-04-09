
const express = require("express"); // require Express module
const fs = require("fs"); // require File System module

// Create an instance of the Express application
const app = express();
const port = 3001;

// Serve static files from the "frontend" directory
app.use(
  express.static("frontend", {
    index: "index.html",
  })
);

class Udfordring {
  constructor(seed) {
    this.seed = seed;
  }
}

class Kort extends Udfordring {
  constructor(seed, tekst) {
    super(seed);
    this.tekst = tekst;
  }
}

class Spil extends Udfordring {
  constructor(seed, spil) {
    super(seed);
    this.spil = spil;
  }
}

function lavKort() {
    const kortArray = [];
  for (let i = 0; i < 10; i++) {
    let kort = new Kort(i, "Tekst"+i);
    console.log(kort);
    kortArray.push(kort);
  }
  return kortArray[1];
}
app.get('/kortTekst', (err, res) => {

  res.json(lavKort());
}); 

// Start the server
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
