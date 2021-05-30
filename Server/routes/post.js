const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const Post = mongoose.model("Post");

//get all the post

router.get("/allpost", requireLogin, (req, res) => {
  console.log(req.query._id, "param in all post");
  const _id = req.params;
  Post.find()
    .populate("postedBy", "_id name") //populate method populate the specific things from the database

    .then((posts) => {
      res.json({ posts }); // this is called destructring ===> { posts : posts}
    })
    .catch((err) => {
      console.log(err);
    });
});

//create post

router.post("/createpost", requireLogin, (req, res) => {
  console.log(req,"create post data from frontEnd")
  const { title, body, photo } = req.body;
  if (!title || !body || !photo) {
    return res.status(422).json({ error: "Please add all the field" });
  }
  //   console.log(req.user); //we have create this in middleware
  //   res.send("ok");
  req.user.password = undefined;
  const post = new Post({
    title,
    body,
    photo,
    postedBy: req.user,
  });

  post
    .save()
    .then((result) => {
      res.json({ post: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
