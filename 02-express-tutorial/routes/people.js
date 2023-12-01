const express = require("express");
const { people } = require("../data");
const router = express.Router();

router.get("/", (req, res) => {
  console.log;
  res.status(200).json({ success: true, data: people });
});

//post with json data
router.post("/", (req, res) => {
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

//post with api postman
router.post("/postman", (req, res) => {
  const { name } = req.body;
  name.length > 0
    ? res.status(200).json({ success: true, data: [...people, name] })
    : res
        .status(400)
        .json({ success: false, msg: "please provide name value" });
});

//put
router.put("/:id", (req, res) => {
  console.log(req.params);
  console.log(req.body);

  const newPerson = people.find((p) => p.id === Number(req.params.id));
  const newPeople = people.map((p) => {
    if (p.id == req.params.id) p.name = req.body.name;
    return p;
  });

  newPerson
    ? res.status(200).json({ success: true, data: newPeople })
    : res.status(401).json({
        success: false,
        data: `person doesnt exist with id : ${req.params.id}`,
      });
});

//delete
router.delete("/:id", (req, res) => {
  const personExists = people.find((p) => p.id === Number(req.params.id));
  const newPeople = people.filter((p) => p.id !== Number(req.params.id));

  console.log("does it come here", personExists);
  personExists
    ? res.status(200).json({ success: true, data: newPeople })
    : res
        .status(401)
        .json({ success: false, data: `The id ${req.params.id} doesnt exist` });
});

module.exports = router;
