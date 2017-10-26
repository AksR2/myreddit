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
import { PostService } from './services/posts.service';
import {MatToolbarModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
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
    MatToolbarModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
