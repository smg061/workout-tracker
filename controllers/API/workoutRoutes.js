const Workout = require("../../models/workout");
const mongoose = require("mongoose");
const router = require("express").Router();
const db = require("../../models");
require("dotenv").config();

router.get("/", async (req, res) => {
  try {
    // remember: aggregate doesn't modify the original db
    const workoutData = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
          totalDistance: { $sum: "$exercises.distance" },
        },
      },
    ]);
    console.log("Function called!");
    res.status(200).json(workoutData);
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/range", async (req, res) => {
  try {
    //const workoutData = await Workout.find({}).sort({ _id: -1 }).limit(7);
    const workoutData = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ])
      .sort({ day: -1 }) // sort by latest workout
      .limit(7); // limit to the last 7 ones
    // console.log(workoutData);
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async ({ body }, res) => {
  try {
    const newWorkout = await Workout.create({
      day: new Date().setDate(new Date().getDate()),
    });
    console.log(newWorkout);
    res.status(200).json(newWorkout);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  try {
    const updatedWorkout = await Workout.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(req.params.id) },
      { $push: { exercises: req.body } }
    );
    res.status(200).json(updatedWorkout);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
