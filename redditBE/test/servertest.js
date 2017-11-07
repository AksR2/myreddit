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
         // expect(res.body.subreddit_cat).toBe(res.)
          res.body.should.have.property('subreddit_cat');
          res.body.subreddit_cat.should.equal('searchQuery');
          //res.body.should.be.a('array');
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
      done();
    });
});
     it('should update a post on POST',function(done){
        chai.request(server)
        .post('/updatePost')
        .send({
          title : 'Prachi',
          text : 'Prakash',
          subreddit : 'Desai'
       })
        .end(function(err, res){
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
         // res.body.should.have.property('SUCCESS');
          //res.body.SUCCESS.should.be.a('object');
          res.body.should.have.property('status');
          // res.body.should.have.property('title');
          //  res.body.should.have.property('text');
          //  res.body.should.have.property('subreddit');
          // //res.body.SUCCESS.should.have.property('_v');
           res.body.status.should.equal('ok');
          //  res.body.text.should.equal('Prakash');
          // res.body.subreddit.should.equal('Desai');
          done();

     });
    // it('should update a SINGLE blob on /blob/<id> PUT');
    // it('should delete a SINGLE blob on /blob/<id> DELETE');
  });

});