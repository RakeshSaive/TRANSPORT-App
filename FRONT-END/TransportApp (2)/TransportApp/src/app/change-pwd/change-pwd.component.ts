import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-change-pwd',
  templateUrl: './change-pwd.component.html',
  styleUrls: ['./change-pwd.component.css']
})
export class ChangePwdComponent implements OnInit {
  user:any;
   pass!:string;
   npwd!:string;
   msg='';
   cpwd!:string;
  constructor(private mainservice:MainServiceService,private route:ActivatedRoute,private router:Router) { }

  id=this.route.snapshot.paramMap.get('username');
  ngOnInit(): void {
  }

  editPwd(){
    if(this.pass == null || this.npwd == null || this.cpwd == null || this.pass == undefined || this.npwd == undefined || this.cpwd == undefined || this.pass=="" ||this.npwd == "" || this.cpwd == "" ){
      alert("Please fill the details");
    }
    return this.mainservice.checkPassword(this.pass,this.id!).subscribe(
      data=>{
        
        if(this.npwd==this.cpwd){
        let resp=this.mainservice.editPassword(this.npwd,this.id!);
        resp.subscribe((data)=>this.user=data);
        this.router.navigate(['dashboard/',this.id]);
        }
        else{
          alert("Your new password does not match with confirm password!!!")
        }
      },
      error=>{
        console.log("exception occured...");
        this.msg="Please enter correct password...";
      }
    )
  }

}
