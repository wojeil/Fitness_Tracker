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

//creating new workouts
router.post("/workouts", (req,res) => {
  db.Workout.create(req.body)
  .then(dbWorkouts => {
    res.json(dbWorkouts);
  }) 
  .catch(err => {
    res.json(err);
  });
});

//add new exercise
router.put("/workouts/:id", (req,res) => {
  db.Workout.update(req.param.id)
  .then(dbWorkouts => {
    res.json(dbWorkouts);
  }) 
  .catch(err => {
    res.json(err);
  });
});



module.exports = router;