const mongoose = require("mongoos");

const historySchema = new mongoose.Schema({
  parkingLotId: { type: String, required: true },
  dateTime: { type: Date, default: Date.now },
  averageOccupancy: { type: Number, required: true },
});

const History = mongoose.model("History", historySchema);
module.exports = History;
