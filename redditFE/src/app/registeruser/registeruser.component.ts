import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user';
import { Router } from '@angular/router';
import {ValidateService} from '../services/validate.service';

@Component({
    selector: 'app-regis-form',
    templateUrl: './registeruser.component.html',
  })
  export class RegisteruserComponent implements OnInit {
    newUser = new User();
    confirmedpassword: String;
  
    // tslint:disable-next-line:max-line-length
    constructor(private router: Router, private userService: UserService) { }
  
    ngOnInit() {
    }
  
    signupUser() {
        console.log('new user has been created, info: ', this.newUser);  // all validation passed, can register new user
        this.userService.create(this.newUser)         
            .then(status => {
            //localStorage.setItem('currentUser', JSON.stringify(this.newUser));
            this.userService.setUserLoggedIn();
            this.router.navigate(['login']);
            })
            .catch(err => console.log(err));
    }
  
}