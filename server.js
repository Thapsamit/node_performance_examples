const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    /*event loop will be blocked and server can't do anything here */
  } // loop will work till duration is completed
}

app.get("/", (req, res) => {
  res.send("Performance example");
});

// LEARNING :
// 1 - when some request made to the server it will wait for 10 seconds but if seome other request comes at same time then the event loop can't respond to that as it is blocked therefore the further requests will get delayed more and more
// 2 - And not only this it blockes the other API requests too.

app.get("/timer", (req, res) => {
  // delay the response here
  delay(10000); // will be blocked for 10 secons
  res.send("Your request completed");
});

app.listen(PORT, () => {
  console.log("server is listening on port " + PORT);
});
