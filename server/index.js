const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI;

const parkingLotController = require("./controllers/parkingLotController.js");

app.use(cors());
app.use("/parkinglot", parkingLotController);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

// MONGOOSE
mongoose.connect(MONGODB_URI).then(() => console.log("Connected!"));
