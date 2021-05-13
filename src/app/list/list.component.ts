import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { UserModel } from '../services/user.model';
import { TodoModel } from '../todo.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  id : number=2;
  task:TodoModel;
  tasks:TodoModel[]=[];
  user : UserModel;
  constructor(private service: TodoService) { 
    this.task = new TodoModel();
    this.user = new UserModel();
  }

  ngOnInit(): void {
    this.service.todoById(this.id).subscribe(data => this.task = data);
    this.getTasks();
  }
  getTasks(){  
    this.service.todoByUser().then((result:TodoModel[])=>{
      this.tasks=result;      
    }); 
  }
  deleteTask(index : number){
    this.service.deleteTodo(index);
    console.log(index);
    
  }

}
