const { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const postPeopleJson = (req, res) => {
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
};

const postPeoplePostmanAPI = (req, res) => {
  const { name } = req.body;
  name.length > 0
    ? res.status(200).json({ success: true, data: [...people, name] })
    : res
        .status(400)
        .json({ success: false, msg: "please provide name value" });
};

const putPeople = (req, res) => {
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
};

const deletePeople = (req, res) => {
  const personExists = people.find((p) => p.id === Number(req.params.id));
  const newPeople = people.filter((p) => p.id !== Number(req.params.id));

  console.log("does it come here", personExists);
  personExists
    ? res.status(200).json({ success: true, data: newPeople })
    : res.status(401).json({
        success: false,
        data: `The id ${req.params.id} doesnt exist`,
      });
};
module.exports = {
  getPeople,
  postPeopleJson,
  postPeoplePostmanAPI,
  putPeople,
  deletePeople,
};
