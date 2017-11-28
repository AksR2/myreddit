//import { ok } from 'assert';

var express = require('express');
var Post = require('../model/post');
var subreddit = require('../model/subreddit');
var User = require('../model/user');
var Comment = require('../model/comment');
var mongoose = require('mongoose');

var router = express.Router();

router.get('/getPosts', function(req, res, next) {
  var searchQuery = {};

  if(req.query.title)
    searchQuery = { title: req.query.title };

  //console.log(Post);
  Post.find(searchQuery, function(err, posts){
    if (err) {
      res.status(400);      
      res.send();
    }

    //console.log(posts);
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
    res.send({ id : newPost._id ,title:newPost.title,text:newPost.text,subreddit:newPost.subreddit,imageurl:newPost.imageurl, votes:newPost.votes, comments:newPost.comments});
  });
});
// _id : req.body.id,
router.post('/deletePost', function(req, res, next) {
  Post.remove({_id : req.body.id}, function(err) {
    if (err) {
      console.log("not removed!");
      res.status(400);      
      res.send({status:'notok'});
    }

    console.log("removed!");
    res.send({status: 'ok'});
  });
});
/** dfsdfsdfsdf
 * @param  {} '/updatePost'
 * @param  {} function(req
 * @param  {} res
 * @param  {} next
 */
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

router.post('/authenticate', (req, res) => {
  if (!req.body.username) {
      res.json({success: false, message: 'No username was provided.'})
  } else {
      if (!req.body.password) {
          res.json({success: false, message: 'No password was provided.'});
      } else {
          User.findOne({username: req.body.username}, (err, user) => {
              if(err) {
                  res.json({success: false, message: err});
              } else {
                  if (!user) {
                      res.json({success: false, message: 'Username not found.'});
                  } else {
                      const validPassword = user.comparePassword(req.body.password);
                      console.log(validPassword);

                      if (!validPassword) {
                          res.json({success: false, message: 'Invalid password.'});
                      } else {
                          // const token = jwt.sign({ sub: user._id }, config.secret, {
                          //     expiresIn:86400//1 day
                          // });
                         //console.log(token);
                         res.json({
                             success:true,
                            //  token:'JWT '+token,
                             user:{
                                 _id:user._id,
                                 username:user.username,
                                 // password:user.password,
                                 email:user.email
                             },
                             message: 'Success!'
                         });
                          // const token = jwt.sign({userId: user._id}, config.secret, {expiresIn: '24h'});
                          // res.json({success: true, 
                          //           message: 'Success!',
                          //           token: token,
                          //           user: {
                          //                 username: user.username
                          //           }
                          // });
                      }
                  }
              }
          });
      }
  }
});

router.post('/register', (req, res, next) => {
  if(!req.body.email) {
      res.json({success: false, message: 'You must provide an e-mail'});
  } else {
      if (!req.body.username) {
          res.json({success: false, message: 'You must provide a username'});
      } else {
          if (!req.body.password) {
              res.json({success: false, message: 'You must provide a password'});
          } else {
              let user = new User({
                  username: req.body.username,
                  password: req.body.password,
                  email   : req.body.email
              });
              user.save((err) => {
                  if(err){
                    res.json({success: false, message: 'Could not save user. Error: ', err});  
                  } else {
                      // const token = jwt.sign({ sub: user._id }, config.secret, {
                      //     expiresIn:604800//1 week
                      // });
                      return res.json({
                          success:true,
                          // token:'JWT '+token,
                          user:{
                              _id:user._id,
                              username:user.username,
                              // password:user.password,
                              email:user.email,
                          },
                          message: 'Account registered'
                      });
                      //res.json({success: true, message: 'Account registered'});
                  }
              });
          }
      }
  }

});

router.post('/upVote', function(req, res, next) {
  var post = new Post(req.body);
  console.log(req.body);
  post.votes++;
  Post.update({_id : req.body._id}, post, function(err) {
    if (err) {
      console.log("not updated!");
      res.status(400);      
      res.send();
    }
    console.log("vote increased");
    res.send({status: 'ok'});
  });
});

router.post('/downVote', function(req, res, next) {
  var post = new Post(req.body);
  post.votes--;
  Post.update({_id : req.body._id}, post, function(err) {
    if (err) {
      console.log("not updated!");
      res.status(400);      
      res.send();
    }

    console.log("vote decreased");
    res.send({status: 'ok'});
  });
});

// router.post('/comments', function(req, res, next) {
//   var post = new Post(req.body);
// post.comments = 
// Post.update({_id : req.body._id}, post, function(err) {
//   if (err) {
//     console.log("not updated!");
//     res.status(400);      
//     res.send();
//   }

//   console.log("updated!");
//   res.send({status: 'ok'});
// });
// });

router.get('/getComments', function(req, res, next) {
  
    var searchQuery = {};
  
  
    if(req.query.postid)
      searchQuery = { postid: req.query.postid };
    Comment.find(searchQuery, function(err, comments){
      if (err) {
        res.status(400);      
        res.send();
      }
      console.log("returning all the comments for the specific posts");
      res.send(comments);
    })
  });


router.post('/insertComment', function(req, res, next) {
    var newComment = new Comment(req.body);
    newComment._id = mongoose.Types.ObjectId();
  
    newComment.save(function(err) {
      if (err) {
        res.status(400);
        res.send();
      }

      res.send({ _id : newComment._id ,postid:newComment.postid,
        user_name:newComment.user_name,comment:newComment.comment});
    });
});


router.get('/getPostByID', function(req, res, next) {
    var searchQuery = {};
  console.log(req.query);
    if(req.query._id)
      searchQuery = { _id: mongoose.Types.ObjectId(req.query._id) };
  
    //console.log(Post);
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

module.exports = router;
