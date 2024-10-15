const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("This is MongoDB Learning class");
});

app.listen(port, () => {
  console.log(`the server is running on ${port}`);
});
