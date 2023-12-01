const express = require("express");
const { people } = require("../data");
const {
  getPeople,
  postPeopleJson,
  postPeoplePostmanAPI,
  deletePeople,
  putPeople,
} = require("../controllers/people");
const router = express.Router();

//FIRST METHOD
// router.get("/", getPeople);
// //post with json data
// router.post("/", postPeopleJson);
// //post with api postman
// router.post("/postman", postPeoplePostmanAPI);
// //put
// router.put("/:id", putPeople);
// //delete
// router.delete("/:id", deletePeople);

//ALTERNATIVE
router.route("/").get(getPeople).post(postPeopleJson);
router.route("/postman").post(postPeoplePostmanAPI);
router.route("/:id").put(putPeople).delete(deletePeople);
module.exports = router;
