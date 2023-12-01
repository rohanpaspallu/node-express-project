const express = require("express");
// const { people } = require("./data");
const people = require("./routes/people");
const auth = require("./routes/auth");
const app = express();

// app.use(express.static("./methods-public"));
//parse form
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

app.use("/api/people", people);
app.use("/login", auth);

app.get("/", (req, res) => {
  res.status(200).json({ success: true, data: { name: "rohan", age: 27 } });
});

app.listen(5000, () => {
  console.log(`Server running on 5000....`);
});
