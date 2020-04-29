const mongoose = require("mongoose");

const Schema = mongoose.Schema;



const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },

  exercises: [{
    type: {
      type: String
    },
    name: {
    type: String
  },
    duration: {
    type: Number
  },
    weight: {
    type: Number
  },
    reps: {
    type: Number
  },
    sets: {
    type: Number
  },
    distance: {
    type: Number
  },
  }]
});

WorkoutSchema.methods.fullDuration = function(){
  for (let i = 0; index < exercises.length; i++) {
    this.totalDuration += this.exercises[i].duration 
    return this.totalDuration;
    
  }
  
};

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
