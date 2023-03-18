const express = require("express");
const lots = express.Router();
const ParkingLot = require("../models/parkingLot.js");

// const newLot = require("../models/parkingLotSeed.js");
// ParkingLot.insertMany(newLot).then(() => console.log("seeded"));

lots.get("/:lotId", (req, res) => {
  ParkingLot.findOne({ lotId: req.params.lotId }).then((foundLot) =>
    res.json({
      foundLot: foundLot,
    })
  );
});

lots.put("/:lotId/add", (req, res) => {
  console.log("Request params:", req.params);
  console.log("Request body:", req.body);

  ParkingLot.findOneAndUpdate(
    { lotId: req.params.lotId },
    { $inc: { total: 1 } },
    {
      new: true,
      runValidators: true,
    }
  )
    .then((updatedLot) => {
      console.log("Updated lot:", updatedLot);

      if (!updatedLot) {
        return res.status(404).json({ error: "Parking lot not found" });
      }
      res.json({ updatedLot: updatedLot });
    })
    .catch((error) => {
      console.error("Error:", error);
      res.status(500).json({ error: error.message });
    });
});

module.exports = lots;
