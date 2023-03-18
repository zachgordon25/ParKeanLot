const express = require("express");
const lots = express.Router();
const ParkingLot = require("../models/parkingLot.js");

const newLot = require("../models/parkingLotSeed.js");
ParkingLot.insertMany(newLot).then(() => console.log("seeded"));

module.exports = lots;
