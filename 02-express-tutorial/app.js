const express = require("express");
const { people } = require("./data");
const app = express();

// app.use(express.static("./methods-public"));
//parse form
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ success: true, data: { name: "rohan", age: 27 } });
});

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/login", (req, res) => {
  console.log("reaches here yayy !!!", req.body);
  req?.body?.name?.length > 0
    ? res.status(200).send(`<h1>Welcome ${req?.body?.name}</h1>`)
    : res.status(401).send("<h1>Please enter a name</h1>");
});

app.post("/api/people", (req, res) => {
  console.log(req.body);

  req?.body?.name.length > 0
    ? res.status(200).json({ success: true, person: req.body.name })
    : res
        .status(400)
        .json({ success: false, msg: "please provide name value" });
  // const newData = [...people];
  // newData.push({ id: newData.length + 1, name: req.body.name });
  // console.log(newData);
  // res.send("works");
});

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  name.length > 0
    ? res.status(200).json({ success: true, data: [...people, name] })
    : res
        .status(400)
        .json({ success: false, msg: "please provide name value" });
});

app.listen(5000, () => {
  console.log(`Server running on 5000....`);
});
