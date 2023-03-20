const express = require("express");
const entries = express.Router();
const Entry = require("../models/entries.js");

entries.get("/:lotId", (req, res) => {
  Entry.find({
    lotId: req.params.lotId,
    createdAt: { $gte: new Date(Date.now() - 60 * 60 * 1000) },
  }).then((foundEntry) => {
    res.json(foundEntry);
  });
});

entries.post("/", (req, res) => {
  Entry.create(req.body).then((createdEntry) => {
    res.status(200).json(createdEntry);
  });
});

module.exports = entries;
