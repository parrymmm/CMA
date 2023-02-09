const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

const port = process.env.PORT;

//home page route
app.get("/", (req, res) => {
  res.send("Hello World");
});

//get all users route
app.get("/users", (req, res) => {
  res.send("All users");
});

// creating server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
