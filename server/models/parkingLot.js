const mongoose = require("mongoos");

const parkinglotSchema = new mongoose.Schema({
  name: { type: String, required: true },
  zones: { type: Number, required: true },
  averageOccupancy: { type: Number, required: true },
});

const ParkingLot = mongoose.model("ParkingLot", parkinglotSchema);
module.exports = ParkingLot;
