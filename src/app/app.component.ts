import { Component } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

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
  styleUrls: ['./app.component.css']
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

  title = 'My ReDDit app';
  //selectedPost: post1;
    posts = POSTS;
  // onSelect(title1,text,subreddit){
  //   //this.selectedPost=post1;
  //   POSTS.push(new post1(title1,text,subreddit));
  // }
}

