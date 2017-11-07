import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SubredditPost } from '../model/subreddit';
import { PostService} from '../services/posts.service';

@Component({
  selector: 'subredditposts',
  templateUrl: './subreddit.component.html',
  styleUrls: [ './subreddit.component.css' ]
  
})
export class SubredditComponent implements OnInit {

  posts: SubredditPost[];
  newPost: SubredditPost;
  editPost: SubredditPost;
  searchCriteria: string;

  constructor(
    //private route: ActivatedRoute,
    private postService: PostService,
    //private location: Location
  ) {}

   ngOnInit(): void {
    this.getPostssub();
    this.searchCriteria;
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
  // goBack(): void {
  //   this.location.back();
  // }
}
