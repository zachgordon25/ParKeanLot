const mongoose = require('mongoose');

const parkinglotSchema = new mongoose.Schema(
  {
    lotId: { type: String, required: true },
    name: { type: String, required: true },
    total: { type: Number, required: true },
    numOfEntries: { type: Number, required: true, min: 1 },
    averageOccupancy: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const ParkingLot = mongoose.model('ParkingLot', parkinglotSchema);
module.exports = ParkingLot;
