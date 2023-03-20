const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const methodOverride = require("method-override");
const axios = require("axios");
const cron = require("node-cron");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI;

const parkingLotController = require("./controllers/parkingLotController.js");
const entriesController = require("./controllers/entriesController.js");
const historyController = require("./controllers/historyController.js");

app.use(cors());
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/parkinglot", parkingLotController);
app.use("/entries", entriesController);
app.use("/history", historyController);

const baseURL = `http://localhost:${PORT}`;

cron.schedule("0 1 * * *", async () => {
  try {
    const response = await axios.post(`${baseURL}/history/copy`);
    console.log("Data duplication completed:", response.data);
  } catch (error) {
    console.error("Data duplication failed:", error.message);
  }
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

// MONGOOSE
mongoose.connect(MONGODB_URI).then(() => console.log("Connected!"));
