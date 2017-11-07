import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatInputModule} from '@angular/material';
import {FormArray} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {MatSidenavModule} from '@angular/material';
import { PostComponent } from './posts/posts.component';
import { SubredditComponent } from './subreddit/subreddit.component';
import { PostService } from './services/posts.service';
import { LoginComponent} from './login/login.component';
import {MatToolbarModule} from '@angular/material';
import { AppRoutingModule }     from './app-routing.module';
import { UserService } from './services/user.service';
import { ValidateService} from './services/validate.service';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    SubredditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [
    PostService,
    UserService,
    ValidateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

