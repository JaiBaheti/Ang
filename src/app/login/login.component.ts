import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login.model';
import { UserModel } from '../services/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login : Login;
  
  s :boolean=false;
  constructor(private service:UserService, private router : Router) {
    this.login = new Login();
   }

  ngOnInit(): void {
  }
  Login(){
    let user : UserModel;
    this.service.validateLogin(this.login.uname,this.login.password).then(
      (result:UserModel)=>{
        user=result;
        console.log(result);
        console.log(user);
        if(user!=null){
          localStorage.setItem("user",JSON.stringify(user));
          this.router.navigate(['addToDo']);          
         } 
         else
           alert("Invalid credentials");
      }); 
    let userDetail : UserModel;  
    userDetail =  JSON.parse(localStorage.getItem("user"));
    console.log(userDetail.userId);    
  }
  logout(){

  }

}
