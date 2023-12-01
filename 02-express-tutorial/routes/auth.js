const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log("reaches here yayy !!!", req.body);
  req?.body?.name?.length > 0
    ? res.status(200).send(`<h1>Welcome ${req?.body?.name}</h1>`)
    : res.status(401).send("<h1>Please enter a name</h1>");
});

module.exports = router;
