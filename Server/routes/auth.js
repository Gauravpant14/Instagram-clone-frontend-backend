const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./../Keys");
const requireLogin = require("./../middleware/requireLogin");

router.get("/protected", requireLogin, (req, res) => {
  res.send("hello user , this is protected route");
});

//sign-up route
router.post("/signup", (req, res) => {
  console.log(req.body, "this is req.body");
  const { name, email, password } = req.body;

  if (!email || !password || !name) {
    res.status(422).json({ error: "Fill all values" });
  }
  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "user already exist with that email" });
      }
      bcrypt.hash(password, 10).then((hashedpassword) => {
        const user = new User({
          email,
          password: hashedpassword,
          name,
        });

        user
          .save()
          .then((callback) => {
            //   console.log(callback, "userserere"); ///here callback is the data that is saved into database ...
            res.status(200).json({ message: "saved successfully" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((err) => {
      console.log(err, "err in signup");
    });
});

//sign-in route
router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  console.log(req.body, "body in signin api");
  if (!email || !password) {
    return res.status(422).json({ error: "please add email or password" });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: "Invalid Email or password" });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          const { _id, name, email } = savedUser;
          // res.json({ message: "Succesfully signed in" });
          const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
          res.json({
            token,
            userInfo: {
              _id,
              name,
              email,
            },
          });
        } else {
          return res.status(422).json({ error: "Invalid Email or password" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

module.exports = router;
