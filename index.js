const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

let visits = 0;

app.get("/", (req, res) => {
  visits++;
  res.send(`Visits: ${visits}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});