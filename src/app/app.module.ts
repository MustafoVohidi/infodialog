import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todo/todolist/todolist.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
// Декораторы
@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
