import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todo/todolist/todolist.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { dataServices } from './service/data.service';
import { NumbersapiComponent } from './components/numbersapi/numbersapi.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// angular material
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

const appRoutes:Routes=[
  {path:"",component:TodolistComponent},
  {path:"todolist",component:TodolistComponent},
  {path:"numbersapi",component:NumbersapiComponent},
];
// Декораторы
@NgModule({
  declarations: [AppComponent, TodolistComponent, NumbersapiComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule, 
    RouterModule.forRoot(appRoutes), 
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonToggleModule
  ],
  providers: [dataServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
