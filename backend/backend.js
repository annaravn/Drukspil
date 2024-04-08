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

// Start the server
app.listen(port, () => {
    console.log(`Backend listening on port ${port}`);
});
