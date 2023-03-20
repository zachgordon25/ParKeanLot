const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema(
  {
    lotId: { type: String, required: true },
    occupancyScore: { type: Number, required: true },
  },
  { timestamps: true }
);

const Entry = mongoose.model('Entry', entrySchema);
module.exports = Entry;
