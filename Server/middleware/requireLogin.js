const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./../Keys");
const mongoose = require("mongoose");
const User = mongoose.model("User");
module.exports = (req, res, next) => {
  console.log(req.headers, "all post middle ware header");
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "you must be logged in" });
  }
  const token = authorization.replace("Bearer", "");
  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "You must be logged in" });
    }

    const { _id } = payload;
    User.findById(_id).then((userData) => {
      req.user = userData; //here userData now is availavble in req.user
      next(); // for to continuing further or for using another middleware we use this next() keyword
    });
  });
};
