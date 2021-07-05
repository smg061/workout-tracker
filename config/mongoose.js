const mongoose = require("mongoose");
require("dotenv").config();

connectMongoose = async () => {
  await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
};

module.exports = connectMongoose;
