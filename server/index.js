const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const methodOverride = require("method-override");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI;

const parkingLotController = require("./controllers/parkingLotController.js");

app.use("/parkinglot", parkingLotController);
app.use(cors());
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

// MONGOOSE
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.log("Connected!"));
