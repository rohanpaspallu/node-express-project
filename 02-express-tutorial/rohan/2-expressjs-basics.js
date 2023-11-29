const express = require("express");
const app = express();

console.log("comes here :");

app.get("/", (req, res) => {
  console.log("user comes to the home page");
  // res.send();
  res.status(200).send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.status(200).write("about page reached");
  res.send();
});

app.all("*", (req, res) => {
  // res.write("<h1>This page doesnt work</h1>");
  res.status(404).write("<h1>This page doesnt work</h1>");
  res.send();
  // res.status(404).json({ error: "Not found" });
});

app.listen(5000, () => {
  console.log("server is listening");
});
