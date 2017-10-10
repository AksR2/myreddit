import { Component } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {Injectable} from '@angular/core';

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
  <md-nav-list><md-list-item *ngFor="let post of items | async"><h3><a href="" color="accent"> {{post.Title}} </a></h3>
  <p mdLine>
    <span> {{post.Text}} </span><br>
    <span class="demo-2">{{post.SubReddit}} </span>
  </p></md-list-item></md-nav-list></md-card>`
  })
 export class AppComponent {

  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
  postobj : post1 = new post1('','','');

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });

    this.user = this.afAuth.authState;

  }

  login() {
      this.afAuth.auth.signInAnonymously();
  }

  logout() {
      this.afAuth.auth.signOut();
  }

  onSelect(title1: string, text : string, subreddit : string) {
    //this.items.push(new post1(title1,text,subreddit));
    this.items.push({Title: title1, Text: text, SubReddit: subreddit});
    this.msgVal = '';
  }
///////////////////////////////////////////////////////////////////////////////////////

  findPost(start, end): FirebaseListObservable<any[]> {
    return this.(this.posts, {
      query: {
        orderByPost: 'title1',
        limitToFirst: 6,
        startAt: start,
        endAt: end
      }
    });
  }

  deleteAll(): void {
    this.items.remove().catch(error => this.handleError(error));
  }

  updatePost(key: string, value: any): void {
    this.items.update(key, value).catch(error => this.handleError(error));
  }

  deletePost(key: string): void {
    this.items.remove(key).catch(error => this.handleError(error));
  }


//////////////////////////////////////////////////////////////////////////////////////
  title = 'My ReDDit app';
  //selectedPost: post1;
    posts = POSTS;
  // onSelect(title1,text,subreddit){
  //   //this.selectedPost=post1;
  //   POSTS.push(new post1(title1,text,subreddit));
  // }

}

