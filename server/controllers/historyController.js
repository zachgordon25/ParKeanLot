const express = require("express");
const history = express.Router();
const History = require("../models/history.js");
const Entry = require("../models/entries.js");

history.post("/copy", async (req, res) => {
  try {
    const copiedData = await Entry.aggregate([
      {
        $out: History.collection.name,
      },
    ]);
    res.status(200).json({ message: "Data duplication complete." });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while duplicating data." });
  }
});

history.post("/", (req, res) => {
  History.create(req.body).then((createdHistory) => {
    res.status(200).json(createdHistory);
  });
});

history.delete("/", (req, res) => {
  History.deleteMany({}).then(() => {
    res.status(200).json({ message: "All data deleted." });
  });
});

module.exports = history;
