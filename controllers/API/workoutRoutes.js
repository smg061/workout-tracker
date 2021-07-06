const Workout = require("../../models/workout");
const router = require("express").Router();
const db = require("../../models");
require("dotenv").config();

router.get("/", async (req, res) => {
  const w = await Workout.aggregate([
    {
      $addFields: { totalDuration: { $sum: "$exercises.duration"} },
    },
  ]);
  console.log(w);
  res.status(200).json(w);
});

router.post("/:id");
router.post("/create", async (req, res) => {});

module.exports = router;
