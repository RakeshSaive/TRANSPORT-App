import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../login';
import { MainServiceService } from '../main-service.service';
import { RegUser } from '../reg-user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;
  nUser:any;
  log=new Login();
  reg=new RegUser();
  id=this.route.snapshot.paramMap.get('username');
  
  constructor(private ms:MainServiceService,private route:ActivatedRoute,private router:Router) { }
  
  ngOnInit(): void {
    let resp=this.ms.getDataFromRemote(this.id!);
    resp.subscribe((data)=>this.user=data);
  }
    
  
  

  // public getUserDetails(username:string){
  //   let resp=this.ms.getDataFromRemote(username);
  //   resp.subscribe((data)=>this.user=data);

  // }

  public EditUser(){
    this.reg=this.user
    let resp=this.ms.editUser(this.reg);
    resp.subscribe((data)=>this.user=data);
    this.router.navigate(['prof/',this.user.username]);
  }
  public logoutUser(){
    this.ms.logout();
    location.href="/login";
    // location.href="/login";
  }

}
