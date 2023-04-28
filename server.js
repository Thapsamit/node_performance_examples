const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Performance example");
});

app.listen(PORT, () => {
  console.log("server is listening on port " + PORT);
});
