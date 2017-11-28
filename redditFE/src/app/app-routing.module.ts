import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostComponent }   from './posts/posts.component';
import { LoginComponent }  from './login/login.component';
import {AppComponent} from './app.component';
import {SubredditComponent} from './subreddit/subreddit.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'posts', component: PostComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app', component: AppComponent },
  { path: 'subreddit/:name' , component: SubredditComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}