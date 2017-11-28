import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../model/post';
import { SubredditPost } from '../model/subreddit';
import { PostService} from '../services/posts.service';

/**
 * create subreddits based on filters from posts
 * 
 * @export
 * @class SubredditComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'subredditposts',
  templateUrl: './subreddit.component.html',
  styleUrls: [ './subreddit.component.css' ]
  
})
export class SubredditComponent implements OnInit {

  posts: Post[];
  newPost: Post;
  editPost: Post;
  @Input() searchCriteria: string;
/**
 * Creates an instance of SubredditComponent.
 * @param {ActivatedRoute} route 
 * @param {PostService} postService 
 * @memberof SubredditComponent
 */
constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    //private location: Location
  ) {}
/**
 * 
 * 
 * @memberof SubredditComponent
 */
ngOnInit(): void {
    this.route.params
    .subscribe(params => this.handleRouteChange(params));
   }

/**
 * handles the navigation from subreddit page
 * 
 * @param {any} params 
 * @memberof SubredditComponent
 */
handleRouteChange(params){
    this.searchCriteria= params['name'];
    this.getPostssub();
   }
/**
 * get subreddit posts based on search criteria
 * get subreddit posts
 * @memberof SubredditComponent
 */
getPostssub(){
    this.postService.getPostssub(this.searchCriteria)
    .subscribe(
      data => {
        console.log(data)
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

   upVote(post:Post){
    console.log(post)
    this.postService.upVote(post)
    .subscribe(
      data => {
         this.getPostssub();
         console.log("feVote increased");
      }
    )
  }

  downVote(post:Post){
    this.postService.downVote(post)
    .subscribe(
      data => {
         this.getPostssub();
         console.log("feVote decreased");
      }
    )
  }


/**
 * 
 * 
 * @param {Post} post 
 * @memberof SubredditComponent
 */
setEditPost(post: Post){
    // this.editPost = new SubredditPost(post._id, post.user_name, post.title, post.text, post.total_votes, post.subreddit_cat);
  }
  // goBack(): void {
  //   this.location.back();
  // }
}
