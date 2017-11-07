var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define a schema.
var subredditSchema = new Schema({
  user_name: String,
  title: String,
  text: String,
  total_votes: Number,
  subreddit_cat: String
  //location: String
});


// Define a method for concatanation of name and blog fields.
// userSchema.methods.concatanceNameAndBlog = function() {
//     // Extend name with value of the blog field.
//     this.name = this.name + this.blog; 
  
//     return this.name;
//   };

// Create a model.
var subreddit = mongoose.model('subreddits', subredditSchema);

module.exports = subreddit;