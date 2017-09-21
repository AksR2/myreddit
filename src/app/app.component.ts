import { Component } from '@angular/core';

export class post1{
  constructor(
  public title1: string,
  public text: string,
  public subreddit: string){}
}
var POSTS: post1[]=[];
@Component({
  selector: 'myreddit',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:
  `
  <md-card>
  <form>
  <md-form-field>
  <input mdInput #title1 placeholder="Title"></md-form-field><br>
  <md-form-field><input mdInput #text placeholder="Text"></md-form-field><br>
  <md-form-field><input mdInput #subreddit placeholder="SubReddit"></md-form-field><br>
  
  </form>
  <button md-raised-button color="primary" (click)="onSelect(title1.value,text.value,subreddit.value)">CreatePost</button>
  <md-nav-list><md-list-item *ngFor="let post of posts"><h3><a href="" color="accent"> {{post.title1}} </a></h3>
  <p mdLine>
    <span> {{post.text}} </span><br>
    <span class="demo-2">{{post.subreddit}} </span>
  </p></md-list-item></md-nav-list></md-card>`
  })
 export class AppComponent {
  title = 'My ReDDit app';
  //selectedPost: post1;
    posts = POSTS;
  onSelect(title1,text,subreddit){
    //this.selectedPost=post1;
    POSTS.push(new post1(title1,text,subreddit));
  }
}

