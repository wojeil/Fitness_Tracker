const db = require("../model");
const router = require("express").Router();
const path = require("path");

//exercise route page

router.get("/exercise", (req, res) => res.sendFile(path.join(__dirname, "../public/exercise.html"))
);






module.exports = router;