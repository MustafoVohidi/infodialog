import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/model/list';
// import { CrudService } from 'src/app/service/crud.service';
export interface TodoList {
  id: number;
  name: string;
}
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  title = 'Todo List';
  // todolist:TodoList[]=[
  //   {id:1, name:"list 1"},
  //   {id:2, name:"list 2"},
  //   {id:3, name:"list 3"},
  // ]
  // name=""
  // constructor(private crudService:CrudService) { }
  listObj: List = new List();
  listArr: List[] = [];
  addListValue: string = '';
  editListValue: string = '';
  isOpenModal: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.addListValue = '';
    this.editListValue = '';
    this.listObj = new List();
    this.getAllList();
  }
  getAllList() {
    this.listArr;
  }
  addList() {
    this.listObj.name = this.addListValue;
    this.listArr.push(this.listObj);
    this.ngOnInit();
    this.addListValue = '';
  }
  editList() {
    console.log(this.isOpenModal);
    this.listObj.name = this.editListValue;
    this.ngOnInit();
    this.isOpenModal = false;
  }
  deleteList(elist: List, index: number) {
    this.listArr.splice(index, 1);
    this.ngOnInit();
  }
  call(eitem: List) {
    this.isOpenModal = true;
    this.listObj = eitem;
    this.editListValue = eitem.name;
  }
  closeModal(event: any) {
    event.stopPropagation();
    this.isOpenModal = false;
  }
}
