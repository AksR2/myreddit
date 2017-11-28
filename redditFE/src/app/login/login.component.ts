import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ValidateService } from '../services/validate.service';
import { User } from '../model/user';
/**
 * 
 * 
 * @export
 * @class LoginComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  signinUser = new User();
  constructor(private router: Router, private user: UserService, private validateService: ValidateService) { }
/**
 * 
 * 
 * @memberof LoginComponent
 */
ngOnInit() {
  }
  /**
   * 
   * logina a user.. check for username and password
   * @param {any} e 
   * @returns 
   * @memberof LoginComponent
   */
  loginUser(e) {
    e.preventDefault();
    console.log(e);
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    this.signinUser.username = username;
    this.signinUser.password = password;

    if (!this.validateService.validateLogin(this.signinUser)) {
    console.log('Fill all fields');  
    return false;
    }
    console.log('The credentials:',username,password);
    this.user.loginUser(username, password)
    .then(status => {
       console.log(status);
      if (status) {
        this.router.navigate(['posts']);
        this.user.setUserLoggedIn();
      } else {
        // this.flashMessage.show('Wrong username or password', {cssClass: 'alert', timeout: 3000});
        // this.router.navigate(['']);
      }
    }).catch(err => console.log(err));
  }
  getUser() {
  }
}