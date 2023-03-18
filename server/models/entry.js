const mongoose = require("mongoos");

const entrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  zone: { type: String, required: true },
  dateTime: { type: Date, default: Date.now },
});

const Entry = mongoose.model("Entry", entrySchema);
module.exports = Entry;
