const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const Post = mongoose.model("Post");
const allUsers = mongoose.model("User") 

//get all the users

router.get("/allUsers",requireLogin,async (req,res) => {
 const users = await allUsers.find().populate()
 const userInfo = users.map((e) => {
   return {
    "id":e._id,
    "name":e.name,
    "email":e.email
   }
   
 })
  res.json(userInfo)
  
})



//get all the post

router.get("/allpost", requireLogin, (req, res) => {
  console.log(req.query._id, "param in all post");
  const _id = req.params;
  Post.find()
    .populate("postedBy", "_id name") //populate method populate the specific things from the database
    .populate("comments.postedBy","_id name")
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

//Like Post

router.put('/like',requireLogin,(req,res)=>{
  Post.findByIdAndUpdate(req.body.postId,{
      $push:{likes:req.user._id}
  },{
      new:true
  })
  .populate("postedBy", "_id name")
  .populate("comments.postedBy","_id name")
  .exec((err,result)=>{
      if(err){
          return res.status(422).json({error:err})
      }else{
        console.log(result)
          res.json(result)
      }
  })
})


//unlike post 

router.put('/unlike',requireLogin,(req,res) => {
  Post.findByIdAndUpdate(req.body.postId,{
    $pull:{likes:req.user._id}
  },{
    new:true // it means we are writing new updated recored in mongodb if we don't use this we'll get update the old record
  })
  .populate("postedBy", "_id name")
  .populate("comments.postedBy","_id name")
  .exec((err,result) => {
    if(err){
      return res.status(422).json({error : err})
    }
    else{
      res.json(result)
    }
  })

});


//comment in post 
router.put('/comment',requireLogin,(req,res)=>{
  console.log(req.body,"-*----------------")
  const comment = {
    text:req.body.text,
    postedBy:req.user._id //user info is in req.user in rquirelogin 
  }
  Post.findByIdAndUpdate(req.body.postId,{
      $push:{comments:comment}
  },{
      new:true,
      useFindAndModify: false
  })
  .populate("comments.postedBy","_id name")
  .populate("postedBy", "_id name")
  .exec((err,result)=>{
      if(err){
          return res.status(422).json({error:err})
      }else{
        console.log(result,"-----------------------------------")
          res.json(result)
      }
  })
});




//delete post 

router.delete('/allpost/:postId', (req,res) =>{
  Post.findByIdAndRemove(req.params.postId)
  .then(post => {
      if(!post) {
          return res.status(404).send({
              message: "Note not found with id " + req.params.postId
          });
      }
      res.send({message: "Note deleted successfully!"});
  }).catch(err => {
      if(err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).send({
              message: "Note not found with id " + req.params.postId
          });                
      }
      return res.status(500).send({
          message: "Could not delete note with id " + req.params.postId
      });
  });
});

module.exports = router;
