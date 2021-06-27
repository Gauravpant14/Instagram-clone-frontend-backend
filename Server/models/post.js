const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types; //here destructring the id of schema
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  photo: {
    
   type:String,
   required:true   
  },
  likes : [{type : ObjectId,ref:"User"}],
  comments:[{
    text:String,
    postedBy:{type:ObjectId,ref:"User"},
  }],
  postedBy: {
    type: ObjectId,
    ref: "User", //refer to User schema
  },
});

mongoose.model("Post", postSchema);
