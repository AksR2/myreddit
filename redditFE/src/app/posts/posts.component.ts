import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { Post } from '../model/post';
import { PostService} from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[];
  newPost: Post;
  editPost: Post;
  searchCriteria: string;
  
  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.newPost = Post.CreateDefault();
    this.editPost = Post.CreateDefault();
    this.searchCriteria = '';
    this.getPosts();
  }

  deletePost(post:Post)
  {
    this.postService.deletePost(post)
    .subscribe(
      data => {
        this.posts.splice(this.posts.indexOf(post), 1);
        console.log("Post deleted!");
      })
  }
  
  insertPost() {
    this.postService
    .insertNewPost(this.newPost)
    .subscribe(
      data => {
         this.newPost._id = data.id;
         this.posts.push(this.newPost);
         this.newPost = Post.CreateDefault();
    
         console.log("Added post.");
      }
    )
  }
  AppCtrl($scope) {
      $scope.currentNavItem = 'page1';
    }

   updatPost(post:Post) {
    this.postService
    .updatePost(this.newPost)
    .subscribe(
      data => {
         var index = this.posts.findIndex(item => item._id === this.editPost._id);
         this.posts[index] = this.editPost;
         this.editPost = Post.CreateDefault();
    
         console.log("Added post.");
      }
    )
  }
  

  getPosts(){
    this.postService.getPosts(this.searchCriteria)
    .subscribe(
      data => {
         this.posts = [];
         data.forEach(
           element => {
             var newPost = new Post(element._id, 
                                element.title, 
                                element.text,
                                element.subreddit,
                              element.imageurl);
             this.posts.push(newPost);
           })
      })
  }

   clearSearch(){
     this.searchCriteria = '';
     this.getPosts();
   }

  setEditPost(post: Post){
    this.editPost = new Post(post._id, post.title, post.text, post.subreddit,post.imageurl);
  }
}
