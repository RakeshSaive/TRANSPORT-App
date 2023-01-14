import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../login';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   log=new Login();
   msg='';
   user:any;
   
  
  
 
  constructor(private mainservice:MainServiceService,private route:ActivatedRoute,private router:Router) {
    
   }

  ngOnInit(): void {
  }
  form=new FormGroup({
    username:new FormControl('', Validators.required),
    pwd : new FormControl('',Validators.required)
  });

  
  loginUser(){
    if(
    this.log.username === null ||
    this.log.pwd === null ||
    this.log.username === undefined ||
    this.log.pwd === undefined ||
    this.log.username === '' ||
    this.log.pwd === ''){
      alert("Please enter required details");
    }
    else{
    this.mainservice.loginUserFromRemote(this.log).subscribe(
      data=>{
        
        console.log("response received....");
        this.mainservice.logUser(data.token);
        this.router.navigate(['/dashboard',this.log.username]);


      },
      error=>{
        console.log("exception occured...");
        this.msg="Bad Credentials...";
      }
    )
  }
}



  
  
 
  


}
