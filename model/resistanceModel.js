const mongoose = require("mongoose");

const Schema = mongoose.Schema;



const ResistanceSchema = new Schema({
  type: {
    type: String,
  },

  name: {
    type: String,
  },

  weight: {
    type: Number,
  },

  sets: {
    type: Number,
  },

  reps: {
    type: Number,
  },

  duration: {
    type: Number,
  }
});

  
  const Resistance = mongoose.model("Resistance", ResistanceSchema);
  
  module.exports = Resistance;
  