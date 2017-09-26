import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MdButtonModule, MdCheckboxModule,MdInputModule} from '@angular/material';
import { FormsModule }   from '@angular/forms';
import {FormArray} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';

import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

export const firebaseConfig={
  apiKey: "AIzaSyB9wRoq5mYHC4nIju6RgINo8oYXx92vjz4",
  authDomain: "myreddit-571ba.firebaseapp.com",
  databaseURL: "https://myreddit-571ba.firebaseio.com",
  projectId: "myreddit-571ba",
  storageBucket: "",
  messagingSenderId: "265974708932"
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
