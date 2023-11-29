const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./public/index.html"));
// });

app.all("*", (req, res) => {
  res.status(404).send("resource not found!!! <a href='/'>Go back to home</a>");
});

app.listen(5001, () => {
  console.log(`server started on port !!!`);
});
