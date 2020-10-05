// server.js
// where your node app starts

// init project
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

  console.log(__dirname)

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/src/index.html`);
});

app.get("/mscpref", (request, response) => {
  response.sendFile(`${__dirname}/views/mscpref.html`);
});

app.get("/suporte", (request, response) => {
  response.sendFile(`${__dirname}/views/suporte.html`);
});



// endpoint to clear dreams from the database

// helper function that prevents html/css/script malice
const cleanseString = function(string) {
  return string.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

// listen for requests :)
var listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});