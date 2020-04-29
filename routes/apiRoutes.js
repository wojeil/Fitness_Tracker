const db = require("../model");
const router = require("express").Router();

//getting all workouts on page
router.get("/workouts", (req,res)=>{
  db.Workout.find({},(err, dbWorkouts) =>{
    if(err){
      console.log(err);
    }
    res.json(dbWorkouts);
    console.log(dbWorkouts);
  })
})

//creating new workouts
router.post("/workouts", ({body},res) => {
  db.Workout.create(body,(err,dbWorkouts) => {
    if(err){
      console.log(err);
    }
   
    res.json(dbWorkouts);
  }) 

});

//add new exercise
router.put("/workouts/:id", (req,res) => {
  db.Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, (err, dbWorkouts) =>{
    if(err) {
      console.log(err);
    }
    res.json(dbWorkouts)
  });
})


//placing all workouts in stats
router.get("/workouts/range", (req,res)=>{
  db.Workout.find({}).sort({day: -1}).then (dbWorkouts =>{

    res.json(dbWorkouts);
    console.log(dbWorkouts);
  })  .catch(err => {
    // If an error occurs, send the error to the client
    res.json(err);
  });
})

module.exports = router;