const mongoose = require("mongoos");

const historySchema = new mongoose.Schema({
  parkingLotId: { type: String, required: true },
  name: { type: String, required: true },
  zone: { type: String, required: true },
  dateTime: { type: Date, default: Date.now },
});

const History = mongoose.model("History", historySchema);
module.exports = History;
