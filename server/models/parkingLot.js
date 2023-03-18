const mongoose = require("mongoose");

const parkinglotSchema = new mongoose.Schema({
  lotId: { type: String, required: true },
  name: { type: String, required: true },
  total: { type: Number, required: true },
  numOfEntries: { type: Number, required: true },
  averageOccupancy: { type: Number, default: 0, required: true },
});

parkinglotSchema.pre("save", (next) => {
  if (this.numOfEntries) {
    this.averageOccupancy = this.total / this.numOfEntries;
  }
  next();
});

const ParkingLot = mongoose.model("ParkingLot", parkinglotSchema);
module.exports = ParkingLot;
