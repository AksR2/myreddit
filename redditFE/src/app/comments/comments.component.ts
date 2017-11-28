import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Comment } from '../model/comment';
import {Post} from '../model/post';
import { PostService} from '../services/posts.service';


@Component({
  selector: 'subredditposts',
  templateUrl: './comments.component.html',
  styleUrls: [ './comments.component.css' ]
  
})
export class CommentsComponent implements OnInit {

  comments: Comment[];
  posts: Post[];
  newComment: Comment;

  @Input() searchCriteria:String;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private _location: Location
 
  ) {}

  backClicked() {
    this._location.back();
  }
   ngOnInit(): void {
       this.newComment = Comment.CreateDefault();
       this.route.params
       .subscribe(params=> this.handleRouteChange(params));
   }
   
   handleRouteChange(params){
       this.searchCriteria = params['postid'];
       this.getCommentsForPost();
       this.getPostByID();
   }

   getCommentsForPost(){
    this.postService.getCommentsForPost(this.searchCriteria)
    .subscribe(
      data => {
        console.log(data)
         this.comments = [];
         data.forEach(
           element => {
             var newComment = new Comment(
                element._id,
                element.postid,
                element.user_name,
                element.comment);
             this.comments.push(newComment);
           })
      })
   }

   insertNewComment() {
     //internally knows the postid to associate the comment with.
    this.newComment.postid=this.searchCriteria;
    this.newComment.user_name=localStorage.getItem('userName');
    console.log(this.newComment.user_name);
    this.postService
    .insertNewComment(this.newComment)
    .subscribe(
      data => {
         this.newComment._id = data.id;
         this.comments.push(this.newComment);
         this.newComment = Comment.CreateDefault();
    
         console.log("Added comment.");
      }
    )
  }

  getPostByID() {
    this.postService.getPostByID(this.searchCriteria)
    .subscribe(
      data => {
        this.posts = [];
        data.forEach(
          element => {
            var newPost = new Post(element._id, 
                               element.title, 
                               element.text,
                               element.subreddit,
                             element.imageurl,
                           element.votes,
                         element.comments);
            this.posts.push(newPost);
          })
     })
  }

}