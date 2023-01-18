const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const db = require("./config/db");
const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.post("/test", (req, res) => {
  res.status(200).json(req.body);
});
app.listen(process.env.PORT, () => {
  db();
  console.log(`http://localhost:${process.env.PORT}`);
});
