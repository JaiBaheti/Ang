import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListComponent } from '../list/list.component';
import { TodoService } from '../services/todo.service';
import { TodoModel } from '../todo.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  task : TodoModel;
  priority:string[];
  category:string[];
  
  //this.task.task ="assignment";
  constructor(private service:TodoService, private router:Router) { 
    this.task = new TodoModel();
    this.priority=["High","Medium","Low"];
    this.category=["Official","Personal"];
  }

  ngOnInit(): void {
  }
  add(){
    this.service.addTodoByUser(this.task);
    this.router.navigate(['list']);
  }
}
