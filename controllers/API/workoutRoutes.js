const Workout = require("../../models/workout");
const router = require('express').Router();
require("dotenv").config();

router.get("/", async (req, res) => {
  const workoutData = await Workout.find({}).populate("exercises");
  workoutData.forEach(workout=> workout.getTotalWorkoutTime())
  console.log(workoutData)
  res.status(200).json(workoutData);
});

router.post("/create", async (req, res) => {});

module.exports = router;
