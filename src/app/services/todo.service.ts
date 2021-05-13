import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoModel } from '../todo.model';
import { UserModel } from './user.model';
import { delay } from 'rxjs/operators'; 
@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnInit {
  private baseUri : string = "http://localhost:8980/task";
  //task : TodoModel;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // createToDo(todo : TodoModel){
  //   this.http.post(this.baseUri, todo).subscribe(data => data = todo);
  // }
  todoById(id:number){
    return this.http.get<TodoModel>(this.baseUri+"/getTask/"+id);
  }
  async todoByUser(){
  
    let user : UserModel;
    user = JSON.parse(localStorage.getItem("user")); 
    return await this.http.get<TodoModel[]>(this.baseUri+"/getTaskByUser/"+user.userId).pipe(delay(1000)).toPromise();
    
  }
  addTodo(task :TodoModel){
    //this.http.post(this.baseUri+"/addTask",task).subscribe(data => data=task);
    this.http.post(this.baseUri+"/addTask",task).subscribe(data => data=task);
  }
  async addTodoByUser(task:TodoModel){
    let user:UserModel;
    user = JSON.parse(localStorage.getItem("user"));
    //return this.http.post(this.baseUri+"/addTask/"+user.userId,task).toPromise();
    return this.http.post(this.baseUri+"/"+user.userId,task).toPromise();
  }

  async deleteTodo(index :number){
    console.log("Service "+index);
    //this.todoByUser();
    return await this.http.delete(this.baseUri+"/removeTask/"+index).toPromise();
       
  }
}
