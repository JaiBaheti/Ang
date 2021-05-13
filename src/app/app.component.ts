import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  constructor(private router: Router,private service: UserService ) { }

  add(){
    this.router.navigate(['list']);
  }
  logout(){
    this.service.logout();
    this.router.navigate(['login']);
  }
}
