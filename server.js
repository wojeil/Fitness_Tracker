const express = require("express");
const logger = require("morgan");
const mongoose = require('mongoose');
//setting up Port
const PORT = process.env.PORT || 3000;

//Setting up app and model require
const Exercise = require("./exerciseModel.js");
const app = express();
//activate logger
app.use(logger("dev"));
//activate express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//seperate public js out
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });