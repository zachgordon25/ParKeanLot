const express = require("express");
const lots = express.Router();
const ParkingLot = require("../models/parkingLot.js");

// const newLot = require("../models/parkingLotSeed.js");
// ParkingLot.insertMany(newLot).then(() => console.log("seeded"));

lots.get("/:lotId", (req, res) => {
  ParkingLot.findOne({ lotId: req.params.lotId }).then((foundLot) => {
    const { lotId, name, total, numOfEntries, averageOccupancy } = foundLot;
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

lots.put("/:lotId", (req, res) => {
  console.log("Req params:", req.params);
  console.log("Req body:", req.body);

  ParkingLot.findOneAndUpdate(
    { lotId: req.params.lotId },
    [
      {
        $set: {
          numOfEntries: { $add: ["$numOfEntries", 1] },
          total: { $add: ["$total", req.body.openScore] },
        },
      },
      {
        $set: {
          averageOccupancy: { $divide: ["$total", "$numOfEntries"] },
        },
      },
    ],
    {
      new: true,
      runValidators: true,
    }
  )
    .then((updatedLot) => {
      console.log("Updated lot:", updatedLot);
      console.log(updatedLot.averageOccupancy);
      if (!updatedLot) {
        return res.status(418).json({ error: "Parking lot is not found" });
      }
      res.json({ updatedLot: updatedLot });
    })
    .catch((error) => {
      console.error("Error:", error);
      res.status(500).json({ error: error.message });
    });
});

module.exports = lots;
