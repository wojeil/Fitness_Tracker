const db = require("../model");
const router = require("express").Router();

//getting all workouts on page
router.get("/workouts", (req,res)=>{
    db.Workout.find({})
    .then(dbWorkouts => {
      res.json(dbWorkouts);
      console.log(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
})

//


module.exports = router;