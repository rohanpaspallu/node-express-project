const express = require("express");
const { logger } = require("./logger");
const authorize = require("./authorize");
const app = express();

// app.use("/api", logger);
app.use([authorize, logger]);

app.get("/", (req, res) => {
  res.send("home page");
  // logger(req, res);
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.get("/api/products", (req, res) => {
  res.send("products");
});

app.get("/api/items", (req, res) => {
  console.log("req user : ", req.user);
  res.send("items");
});

app.listen(5000, () => {
  console.log("Server running on 5000....");
});
