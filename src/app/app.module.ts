import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MdButtonModule, MdCheckboxModule,MdInputModule} from '@angular/material';
import { FormsModule }   from '@angular/forms';
import {FormArray} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,FormsModule,MdButtonModule,MdCheckboxModule,MdInputModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
