const db = require("../model");
const router = require("express").Router();

router.get("/workouts", (req,res)=>{
    db.Cardio.find({})
    .then(dbWorkouts => {
      res.json(dbWorkouts);
      console.log(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
    db.Resistance.find({})
    .then(dbWorkouts => {
      res.json(dbWorkouts);
      console.log(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
})




module.exports = router;