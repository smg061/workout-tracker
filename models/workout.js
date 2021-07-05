const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
    },

    totalDuration: Number,

    exercises: [
      {
        type: {
          type: String,
        },
        name: {
          type: String,
        },
        duration: {
          type: Number,
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
      },
    ],
  },
  {
    collection: "Workout",
  }
);

workoutSchema.methods.getTotalWorkoutTime = function() {
    let totalWorkoutTime = 0;
    this.exercises.forEach(exercise => {
        totalWorkoutTime+= exercise.duration
    })
    
    this.totalDuration = totalWorkoutTime;
    return this.totalDuration;
    
};
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
