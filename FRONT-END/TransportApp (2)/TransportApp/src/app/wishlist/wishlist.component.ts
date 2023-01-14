import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainServiceService } from '../main-service.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
   result:any;
   msg='';
   id=this.route.snapshot.paramMap.get('username');
  constructor(private ws:WishlistService,private ms:MainServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.ws.getPlaces(this.id!).subscribe(
     
      (data)=>{
       this.result=data;
      console.log("success");
    }
    ,
    (error)=>{
            console.log("Empty");
            this.msg="Your wishlist is Empty!!!";
    }
      )

  }

  // showMyItems(username:string){
  //   let res=this.ws.getPlaces(username).subscribe(
     
  //      (data)=>{
  //       this.result=data;
  //      console.log("success");
  //    }
  //    ,
  //    (error)=>{
  //            console.log("Empty");
  //            this.msg="Your wishlist is Empty!!!";
  //    }
  //      )

    


  // }

  deleteWishlist(username:string,placeId:number){
    this.ws.deleteWish(username,placeId).subscribe(
      data=>{
        this.result=data;
      }
      ,
      error=>{
        console.log("Error")
        this.msg="Your wishlist is empty!!";
    }

    )

  }

  public logoutUser(){
    this.ms.logout();
    location.href="/login";
    // location.href="/login";
  }

}
