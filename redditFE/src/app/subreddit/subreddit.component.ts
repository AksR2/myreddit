import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SubredditPost } from '../model/subreddit';
import { PostService} from '../services/posts.service';
import { VoteService } from '../services/vote.service';


@Component({
  selector: 'subredditposts',
  templateUrl: './subreddit.component.html',
  styleUrls: [ './subreddit.component.css' ]
  
})
export class SubredditComponent implements OnInit {

  posts: SubredditPost[];
  newPost: SubredditPost;
  editPost: SubredditPost;
  @Input() searchCriteria: string;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private voteService: VoteService
    //private location: Location
  ) {}

   ngOnInit(): void {
    this.route.params
    .subscribe(params => this.handleRouteChange(params));
   }


   handleRouteChange(params){
    this.searchCriteria= params['name'];
    this.getPostssub();
   }

   getPostssub(){
    this.postService.getPostssub(this.searchCriteria)
    .subscribe(
      data => {
        console.log(data)
         this.posts = [];
         data.forEach(
           element => {
             var newPost = new SubredditPost(element._id, 
                            element.user_name,
                                element.title, 
                                element.text,
                                element.total_votes,
                                element.subreddit_cat);
             this.posts.push(newPost);
           })
      })
   }

   setEditPost(post: SubredditPost){
    this.editPost = new SubredditPost(post._id, post.user_name, post.title, post.text, post.total_votes, post.subreddit_cat);
  }

  upvote(post: SubredditPost){
    this.voteService.upvote(post)
    .subscribe(
      data=> {
        post.total_votes = data;
      }
    )
  }


  // goBack(): void {
  //   this.location.back();
  // }
}
