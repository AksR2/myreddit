var express = require('express');
var Post = require('../model/post');
var subreddit = require('../model/subreddit');
var mongoose = require('mongoose');

var router = express.Router();

router.get('/getPosts', function(req, res, next) {
  var searchQuery = {};

  if(req.query.title)
    searchQuery = { title: req.query.title };

  console.log(Post);
  Post.find(searchQuery, function(err, posts){
    if (err) {
      res.status(400);      
      res.send();
    }

    console.log(posts);
    console.log("returning all the posts.");
    res.send(posts);
  })
});

router.get('/getPostssub', function(req, res, next) {

  var searchQuery = {};


  if(req.query.subreddit_cat)
    searchQuery = { subreddit_cat: req.query.subreddit_cat };
  subreddit.find(searchQuery, function(err, posts){
    if (err) {
      console.log("Issue is here.....");
      res.status(400);      
      res.send();
    }
    console.log("returning all the posts in that subreddit.");
    res.send(posts);
  })
});

router.post('/insertPost', function(req, res, next) {
  var newPost = new Post(req.body);
  newPost._id = mongoose.Types.ObjectId();

  newPost.save(function(err) {
    if (err) {
      res.status(400);
      res.send();
    }
    res.send({ id : newPost._id });
  });
});

router.post('/deletePost', function(req, res, next) {
  Post.remove({_id : req.body.id}, function(err) {
    if (err) {
      console.log("not removed!");
      res.status(400);      
      res.send();
    }

    console.log("removed!");
    res.send({status: 'ok'});
  });
});

router.post('/updatePost', function(req, res, next) {
  var post = new Post(req.body);

  Post.update({_id : post.id}, post, function(err) {
    if (err) {
      console.log("not updated!");
      res.status(400);      
      res.send();
    }

    console.log("updated!");
    res.send({status: 'ok'});
  });
});

module.exports = router;
