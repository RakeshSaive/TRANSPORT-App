import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Login } from './login';
import { RegUser } from './reg-user';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  logout() {
    localStorage.removeItem('token');
    return true;
  }

  private baseUrl='http://localhost:9098/transport/api/';
  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router) { }

  login(log:Login):Observable<any>{
    let url=this.baseUrl+'login';
    return this.http.post(url,log);


  }
  public loginUserFromRemote(log:Login):Observable<any>{
    localStorage.setItem("username",log.username);
    let url=this.baseUrl+'login';
    return this.http.post(url,log);


  }

  logUser(token : any){
    localStorage.setItem("token",token);
    return true;
  }
  public registerUserFromRemote(reg:RegUser):Observable<any>{
    let url=this.baseUrl+'register';
    return this.http.post(url,reg);
  }

  public getDataFromRemote(username:string):Observable<any>{
    
    let url=this.baseUrl+'prof/'+username;
    return this.http.get<RegUser[]>(`${url}`);

  }
  

  public editUser(reg:RegUser):Observable<any>{
    let url=this.baseUrl+'edit/'+reg.userId;
    return this.http.post(url,reg);

  }

  public editPassword(npwd:string,username:string):Observable<any>{
    let url=this.baseUrl+'change/'+username;
    return this.http.put(url,npwd);
  }

  public checkPassword(pass:string,username:string):Observable<any>{
    let url=this.baseUrl+'check/'+username;
    return this.http.post(url,pass);
  }

  getToken(){
    return localStorage.getItem("token")
  }
  
  isLoggedIn(){
    let token = localStorage.getItem("token");
  if(token==undefined || token === '' || token == null){
    return false;
  }
  else{
    return true;
  }
  }
}
