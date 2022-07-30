import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/model/list';
// import { CrudService } from 'src/app/service/crud.service';
export interface TodoList {
  id:number,
  name:string,
}
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})


export class TodolistComponent implements OnInit {
  title="Todo List";
  // todolist:TodoList[]=[
  //   {id:1, name:"list 1"},
  //   {id:2, name:"list 2"},
  //   {id:3, name:"list 3"},
  // ]
  // name=""
    // constructor(private crudService:CrudService) { }
  listObj:List=new List();
  listArr:List[]=[];
  addListValue:string='';
  editListValue:string='';
  constructor() { }

  ngOnInit(): void {
    this.addListValue='';
    this.editListValue='';
    this.listObj=new List();
    this.getAllList()
  }
  getAllList(){
    this.listArr
  }
  addList(){
    this.listObj.name=this.addListValue
    this.listArr.push(this.listObj)
    console.log(this.listArr)
    this.ngOnInit();
    this.addListValue=''
  }
  editList(){
    this.listObj.name=this.editListValue;
      this.ngOnInit();
  }
  deleteList(elist:List, index:number){
    // console.log(elist, index, this.listArr.indexOf(elist))
    this.listArr.splice(index, 1)
    this.ngOnInit()
  }
  call(eitem:List){
    this.listObj=eitem;
    this.editListValue=eitem.name
  }
  
  // getAllList(){
  //   this.crudService.getAllList().subscribe(res=>{
  //     this.listArr=res;
  //   }, err=>{
  //     console.log(err)
  //   })
  // }
  // addList(){
  //   this.listObj.name=this.addListValue
  //   this.crudService.addList(this.listObj).subscribe(res=>{
  //     this.ngOnInit();
  //     this.addListValue=''
  //   }, err=>{
  //     console.log(err)
  //   })
  // }
  // editList(){
  //   this.crudService.editList(this.listObj).subscribe(res=>{
  //     this.ngOnInit();
  //   }, err=>{
  //     console.log(err)
  //   })
  // }
  // deleteList(elist:List){
  //   this.crudService.deleteList(elist).subscribe(res=>{
  //     this.ngOnInit()
  //   }, err=>{
  //     console.log(err)
  //   })
  // }
}
