import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserModel } from './user.model';
import { Observable } from 'rxjs';
import { Login } from '../login.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUri : string = "http://13.234.113.8/login";
  //private baseUri : string = "http://localhost/user";
  
  constructor(private http:HttpClient) {
  }

  async validateLogin(username : string, password: string){
     return await this.http.get<UserModel>(this.baseUri+"/auth?email="+username+"&passwd="+password).toPromise();
   }
  //  validateLogin(username : string, password: string):Observable<UserModel>{
  //    const opts : {params: new HttpParams({fromString:"uname=jai&password=password"})};
  //   return this.http.get<UserModel>(this.baseUri+"/auth",opts);
  // }
  logout() {
    localStorage.removeItem("user");
    
  }
}
