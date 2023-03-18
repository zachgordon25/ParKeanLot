const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  parkingLotId: { type: String, required: true },
  name: { type: String, required: true },
  value: { type: Number, required: true },
  dateTime: { type: Date, default: Date.now },
});

const Entry = mongoose.model("Entry", entrySchema);
module.exports = Entry;
