
import { Component, EventEmitter, Output } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
//   @Output('cdkDropDropped')
// dropped: EventEmitter<CdkDragDrop<T, any>> =
//   new EventEmitter<CdkDragDrop<T, any>>();
  all : any;
newTask:any
length=0
list:number=5
  title = 'Todo-list';
isChecked=false
  todoList=[{name:'Complete javascript course online',isChecked:true, completed:true},
 {name: 'Jog around the park 3x',isChecked:false, completed:false},
  {name:  '10m Meditation',isChecked:false, completed:false},
   {name: 'Read for one hour',isChecked:false, completed:false},
 {name: 'Pick up groceries',isChecked:false, completed:false},
 {name: 'Complete Todo List',isChecked:false, completed:false},
]
// drop(event: any): void { if (event.previousContainer === event.container) { moveItemInArray(event.container.data, event.previousIndex, event.currentIndex); } else { transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex); } }

drop(event: any) {
  moveItemInArray(this.todoList, event.previousIndex, event.currentIndex);
}
ngOnInit(): void {
this.all=this.todoList
console.log(this.all);
console.log(this.todoList);


}
  checked(id:number){
this.todoList[id].completed = !this.todoList[id].completed;
this.todoList[id].isChecked = !this.todoList[id].isChecked;
this.todoList.forEach((el)=>{
  el.completed=== false? this.length= this.length+1: this.length

  }


);  console.log(this.length);
this.list=this.length
this.length=0
}
allList(){
  this.all=this.todoList
  document.getElementById("all")?.classList.add("active")
  document.getElementById("active")?.classList.remove("active")
  document.getElementById("complete")?.classList.remove("active")
  document.getElementById("deletecomplete")?.classList.remove("active")
  }
  activeList(){
    this.all=this.all.filter((el:any)=>el.isChecked===true)
    document.getElementById("all")?.classList.remove("active")
    document.getElementById("active")?.classList.add("active")
    document.getElementById("complete")?.classList.remove("active")
    document.getElementById("deletecomplete")?.classList.remove("active")


  }
  completedList(){
    this.all=this.all.filter((el:any)=>el.completed===true)
    document.getElementById("all")?.classList.remove("active")
    document.getElementById("active")?.classList.remove("active")
    document.getElementById("complete")?.classList.add("active")
    document.getElementById("deletecomplete")?.classList.remove("active")
  }

  addTask(){
    this.newTask = (<HTMLInputElement>document.getElementById("text")).value;
    this.todoList.push({name:this.newTask,isChecked:false, completed:false});
    (<HTMLInputElement>document.getElementById("text")).value='';
    this.list=this.list+1
  }
  deletecompletedList(){
    this.all=this.all.filter((el:any)=>el.completed===false)
    document.getElementById("all")?.classList.remove("active")
    document.getElementById("active")?.classList.remove("active")
    document.getElementById("complete")?.classList.remove("active")
    document.getElementById("deletecomplete")?.classList.add("active")
  }

  nightmood(){
    document.querySelector("#header")?.classList.add('night')
    document.querySelector("#main")?.classList.add('night')
    document.querySelector("body")?.classList.add('night')
    document.querySelector("#night")?.classList.add('moon')
    document.querySelector("#moon")?.classList.remove('moon')
  }
  darkmood(){
    document.querySelector("#header")?.classList.remove('night')
    document.querySelector("#main")?.classList.remove('night')
    document.querySelector("body")?.classList.remove('night')
    document.querySelector("#moon")?.classList.add('moon')
    document.querySelector("#night")?.classList.remove('moon')
  }

  deleteItem(i:number){
this.todoList.splice(i,1)
this.list=this.list-1
  }
}
