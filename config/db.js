const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/mern");
    console.log("Database is connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = db;
