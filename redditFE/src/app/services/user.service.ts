import { Injectable } from '@angular/core';
 import { User } from '../model/user';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


/**
 * 
 * 
 * @export
 * @class UserService
 */
@Injectable()
export class UserService {
  private isUserLoggedIn;
  private username;
  constructor(private http: Http) {
    this.isUserLoggedIn = false;
  }
  /**
   * make the current user as logged in
   * 
   * @memberof UserService
   */
  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }
  /**
   * 
   * to check whether the user is logged in
   * @memberof UserService
   */
  
   setUserLoggedOut() {
    this.isUserLoggedIn = false;
  }
  
  /**
   * 
   * function to get the current logged in user
   * @returns 
   * @memberof UserService
   */
  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }
  /**
   * 
   * creates a User by registering
   * @param {User} user 
   * @returns 
   * @memberof UserService
   */
  create(user: User) {
    return this.http.post('http://localhost:3000/register', user).map(data => {
      const returnUser = data.json();
      // console.log(returnUser);
      if (returnUser && returnUser.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(returnUser));
      }
      return returnUser.success;
    }).toPromise();
  }
//   destroy(user: User) {
//     return this._http.delete('/users/' + user._id).map(data => data.json()).toPromise();
//   }
//   updatePassword(user: User) {
//     console.log("Client > New password to be updated > ",user)
//     return this._http.put('/users/updatepassword/' + user._id, user).map(data => data.json()).toPromise();
//   }
//   updateEmail(user: User) {
//     console.log("Client > New email to be updated > ",user)
//     return this._http.put('/users/updateemail/' + user._id, user).map(data => data.json()).toPromise();
//   }
//   getUserByUsername(username: String) {
//     // console.log('client > Get user by user name > ',username);
//     return this._http.get('/users/getuserbyusername/' + username).map(data=>data.json()).toPromise();
//   }
//   getUserByUserID(userID: String) {
//     // console.log('client > Get user by UserID > ', userID);
//     return this._http.get('/users/getuserbyuserid/' + userID).map(data=>data.json()).toPromise();
//   }
//   getUser(user: User) {
//     return this._http.get('/users/' + user._id).map(data => data.json()).toPromise();
//   }
//   getUsers() {
//     return this._http.get('/users').map(data => data.json()).toPromise();
//   }
  loginUser(username: String, password: String) {
    return this.http.post('http://localhost:3000/authenticate', { username: username, password: password })
      // .map(data => data.json()).toPromise();
      .map(data => {
        // login successful if there's a jwt token in the response
        const user = data.json();
        console.log(user);
        if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('userName', user.user.username);
        }
        console.log("current user: ", localStorage.getItem('currentUser'))
        console.log("username",localStorage.getItem('userName'))
        return user.success;
      }).toPromise();
  }
}