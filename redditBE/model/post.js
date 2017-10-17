var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define a schema.
var postSchema = new Schema({
  title: String,
  text: String,
  subreddit: String,
  //location: String
});

// Define a method for concatanation of name and blog fields.
// userSchema.methods.concatanceNameAndBlog = function() {
//     // Extend name with value of the blog field.
//     this.name = this.name + this.blog; 
  
//     return this.name;
//   };

// Create a model.
var Post = mongoose.model('Post', postSchema);

module.exports = Post;