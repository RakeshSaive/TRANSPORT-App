import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from '../main-service.service';
import { RegUser } from '../reg-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  cpwd!:any;
  reg =new RegUser();
  msg='';
  constructor(private mainservice:MainServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  RegisterUser(){
    if(
      this.reg.username === null ||
      this.reg.pwd === null ||
      this.reg.username === undefined ||
      this.reg.pwd === undefined ||
      this.reg.username === '' ||
      this.reg.pwd === '' || 
      this.reg.emailId === undefined || 
      this.reg.emailId === '' ||
      this.reg.emailId === null ||
      this.reg.firstName === '' ||
      this.reg.firstName === null ||
      this.reg.firstName === undefined ||
      this.reg.lastName === '' ||
      this.reg.lastName === null ||
      this.reg.lastName === undefined ||
      this.cpwd === undefined ||
      this.cpwd === '' ||
      this.cpwd === null
      ){
        alert("Please enter required details");
      }
      else if(this.reg.pwd != this.cpwd){
        alert("Please match your password and confirm password");
      }
      else{
    this.mainservice.registerUserFromRemote(this.reg).subscribe(
      data=>{
        console.log("response received....");
        this.router.navigate(['/login']);
      },
      error=>{
        console.log("error occured...");
        this.msg="This user already exists...";
      }

    )
      }
  }

}
