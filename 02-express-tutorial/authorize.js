const authorize = (req, res, next) => {
  console.log("user is : ", req.user);
  if (req?.query?.user === "john") {
    req.user = { name: "john", id: 3 };
    console.log("does come here");
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
