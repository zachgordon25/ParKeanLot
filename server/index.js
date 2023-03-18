const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

// MONGOOSE
mongoose.connect(MONGODB_URI).then(() => console.log("Connected!"));