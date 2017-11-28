var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define a schema.
var commentsSchema = new Schema({
  postid:String,
  user_name:String,
  comment: String
  //location: String
});

// Create a model.
var Comments = mongoose.model('comments', commentsSchema);

module.exports = Comments;