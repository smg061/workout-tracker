const mongoose = require("mongoose");
const exerciseSchema = require("./exercise");
const workoutSchema = new mongoose.Schema(
  {
    day: {
      type: Date,
    },

    //totalDuration: Number,

    exercises: [exerciseSchema],
  },
  {
    collection: "Workout",
  }
);

// workoutSchema.methods.getTotalWorkoutTime = function() {
//     let totalWorkoutTime = 0;
//     this.exercises.forEach(exercise => {
//         totalWorkoutTime+= exercise.duration
//     })

//     this.totalDuration = totalWorkoutTime;
//     return this.totalDuration;

// };


const Workout = mongoose.model("Workout", workoutSchema);


aggregate.addFields({
  totalDuration: { $sum: "$exercises.duration" },
});

module.exports = Workout;
