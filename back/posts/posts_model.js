var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var blogSchema = new Schema(
{
  title:  {type: String, required: true},
  author: String,
  body:   String,
  // comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,

}

);
const Music =  mongoose.model('Music', blogSchema);


//BLOG POSTS:
//Title of blog posts
//Date posted
//Blog post text
//Categories/tags
//Images for post
//Comments on posts
//Author of blog posts
//archive: Boolean

//AUTHORS:
//name
//email
//password
//bio
//articles

//FOLLOWERS/READERS:
//Users
//name
//comments
//email
//password
//date joined
//age