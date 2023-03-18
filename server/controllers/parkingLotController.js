const express = require("express");
const lots = express.Router();
const ParkingLot = require("../models/parkingLot.js");

// const newLot = require("../models/parkingLotSeed.js");
// ParkingLot.insertMany(newLot).then(() => console.log("seeded"));

lots.get("/:lotId", (req, res) => {
  ParkingLot.findOne({ lotId: req.params.lotId }).then((foundLot) => {
    const { _id, lotId, name, total, numOfEntries, averageOccupancy } =
      foundLot;
    const parkingLotObj = {
      lotId,
      name,
      total,
      numOfEntries,
      averageOccupancy,
    };
    res.send(parkingLotObj);
  });
});
module.exports = lots;
