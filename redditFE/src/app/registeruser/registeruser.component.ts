import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user';
import { Router } from '@angular/router';
import {ValidateService} from '../services/validate.service';
/**
 * 
 * 
 * @export
 * @class RegisteruserComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-regis-form',
    templateUrl: './registeruser.component.html',
  })
  export class RegisteruserComponent implements OnInit {
    newUser = new User();
    confirmedpassword: String;
  
    /**
     * Creates an instance of RegisteruserComponent.
     * @param {Router} router 
     * @param {UserService} userService 
     * @memberof RegisteruserComponent
     */
    constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    }
/**
 * 
 * SignUp the User based on the criteria
 * @memberof RegisteruserComponent
 */
signupUser() {
        console.log('new user has been created, info: ', this.newUser);  // all validation passed, can register new user
        this.userService.create(this.newUser)         
            .then(status => {
            this.userService.setUserLoggedIn();
            this.router.navigate(['login']);
            })
            .catch(err => console.log(err));
    }
  
}