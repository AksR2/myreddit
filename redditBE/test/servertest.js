var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../bin/www');
var should = chai.should();
var mongoose=require('mongoose');
var expect=require('expect');
//var expect=require('expect');
var jsonvar={
    //"_id" : ObjectId("59f2e16126a29142accb2c58"),
    'title' : 'Prachi',
    'text' : 'Prakash',
    'subreddit' : 'Desai',
    //"__v" : 0
 };
//var app=server.app;
chai.use(chaiHttp);
describe('Check the post functionalities', function() {
    it('should list all the posts GET', function(done) {
        chai.request(server)
          .get('/getPosts')
          .end(function(err, res){
            expect(err).toBe.null;
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array');
            done();
          });
    });
    it('should list all the subreddits according to the filter GET', function(done) {
      chai.request(server)
        .get('/getPostssub')
        .end(function(err, res){
          expect(err).toBe.null;
          res.should.have.status(200);
          res.should.be.json;
            done();
        });
  });

       // mongoose.connection.close();
     it('should add a single post to the database', function(done){
            chai.request(server)
              .post('/insertPost')
              .send({
                title : 'Prachi',
                text : 'Prakash',
                subreddit : 'Desai'
             })
              .end(function(err, res){
                expect(err).toBe.null;
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
               // res.body.should.have.property('SUCCESS');
                //res.body.SUCCESS.should.be.a('object');
                res.body.should.have.property('id');
                res.body.should.have.property('title');
                 res.body.should.have.property('text');
                 res.body.should.have.property('subreddit');
                // //res.body.SUCCESS.should.have.property('_v');
                 res.body.title.should.equal('Prachi');
                 res.body.text.should.equal('Prakash');
                res.body.subreddit.should.equal('Desai');
                done();
              });
     });
     
     it('should remove a post from the database', function(done){
      chai.request(server)
        .post('/deletePost')
        .end(function(err, res){
          res.should.have.status(200);
          res.should.have.property('status');
          res.body.status.should.equal('ok');
          done();
        });
});
it('should not add an empty post', function(done){
  chai.request(server)
    .post('/insertPost')
    .send({})
    .end(function(err, res){
      res.should.have.status(400);
      res.body.should.have.property('status');
      res.body.status.should.equal('notok');
      done();
    });
});
});

describe('it should check the user functionalities', function(){
it('should not register the existing user again',function(done){
  chai.request(server)
  .post('/register')
  .send({
    username: 'Prachi',
    password: 'abc',
    email: 'ppd@gmail.com'
  })
  .end(function(err,res){
    expect(err).toBe.null;
    res.body.should.have.property('success');
    res.body.success.should.equal(false);
    done();
  });
});
it('should register the user correctly at any instance',function(done){
  chai.request(server)
  .post('/register')
  .send({
    username: 123,
    password: 345,
    email: 999
  })
  .end(function(err,res){
    res.body.should.have.property('success');
    res.body.success.should.equal(false);
    res.body.should.have.property('message');
    res.body.message.should.equal('Could not save user. Error: ');
    done();
  });
});

it('should not register empty user',function(done){
  chai.request(server)
  .post('/register')
  .send({
    username: '',
    password: '',
    email: ''
  })
  .end(function(err,res){
    res.body.should.have.property('success');
    res.body.success.should.equal(false);
    done();
  });
});

  it('should authenticate the right user',function(done){
    chai.request(server)
    .post('/authenticate')
    .send({
      username: 'Himanshu',
      password : 'abc'
    })
    .end(function(err,res){
      expect(err).toBe.null;
      res.body.should.have.property('success');
     res.body.success.should.equal(true);
     done();
    });

  });
  it('should not authenticate the wrong user',function(done){
    chai.request(server)
    .post('/authenticate')
    .send({
      username: 'Himanshu',
      password : 'xyz'
    })
    .end(function(err,res){
     // expect(err).toBe.null;
      res.body.should.have.property('success');
     res.body.success.should.equal(false);
     done();
    });
  });

});