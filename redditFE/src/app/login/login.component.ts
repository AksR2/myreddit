import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ValidateService } from '../services/validate.service';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinUser = new User();
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private user: UserService, private validateService: ValidateService) { }

  ngOnInit() {
  }
  loginUser(e) {
    e.preventDefault();
    console.log(e);
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    this.signinUser.username = username;
    this.signinUser.password = password;

    if (!this.validateService.validateLogin(this.signinUser)) {
    //   this.flashMessage.show('Please fill in all fields', {cssClass: 'alert', timeout: 3000});
      return false;
    }

    this.router.navigate(['posts']);

    // this.user.loginUser(username, password)
    // .then(status => {
    //   // console.log(status);
    //   if (status) {
    //     this.router.navigate(['posts']);
    //     this.user.setUserLoggedIn();
    //   } else {
    //     // this.flashMessage.show('Wrong username or password', {cssClass: 'alert', timeout: 3000});
    //     // this.router.navigate(['']);
    //   }
    // }).catch(err => console.log(err));
  }
  getUser() {
  }
}