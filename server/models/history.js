const mongoose = require("mongoose");

const historySchema = new mongoose.Schema(
  {
    lotId: { type: String, required: true },
    occupancyScore: { type: Number, required: true },
  },
  { timestamps: true }
);

const History = mongoose.model("History", historySchema);
module.exports = History;
