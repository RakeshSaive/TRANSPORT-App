import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../login';
import { MainServiceService } from '../main-service.service';
import { Places } from '../places';
import { SearchService } from '../search.service';
import { WishList } from '../wish-list';
import { WishlistService } from '../wishlist.service';
import { WishlistComponent } from '../wishlist/wishlist.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
log=new Login();
  username='';
  user:any;
  val!:string;
 pla=new WishList();
  places: any = [];
  
  buses:any=[];
  msg='';
  station:any=[];
   public loggedIn =false;
  constructor(private ws:WishlistService,private ms:MainServiceService,private sear:SearchService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.loggedIn = this.ms.isLoggedIn();
   
  }
    
    
  
   id=this.route.snapshot.paramMap.get('username');
   
   
  
  Obj = (this.route.snapshot.paramMap.get('my_object'));
  getData(){
    
    let resp=this.ms.getDataFromRemote(this.username);
    resp.subscribe((data)=>this.user=data);
    this.router.navigate(['/prof',],{ state: this.user });
  }

  searchFilter(){
    this.places=[];
    this.sear.getSearchData(this.val).subscribe(
      data=>{
        var myJsonString = JSON.stringify(data);
        var myJsonObject = JSON.parse(myJsonString);
        for (let index = 0; index < myJsonObject.member.length - 1; index++) {
          var getDescription = myJsonObject.member[index].description;

          if (getDescription == null) {
            getDescription = 'No description available';
          }

          var getName = myJsonObject.member[index].name;
          
          var getType = myJsonObject.member[index].type;
          
            var getAtcocode=myJsonObject.member[index].atcocode;
          
        
          var getNode = myJsonObject.member[index].node;
          
          
          var getStationCode = myJsonObject.member[index].station_code;
          
        
         var getLongitude = myJsonObject.member[index].longitude;
         var getLatitude = myJsonObject.member[index].latitude;
          


          console.log('......................');

          var obj = {};
          var myjsString = JSON.stringify(obj);
          var myObject = JSON.parse(myjsString);
          myObject.description = getDescription;
          myObject.name = getName;
          myObject.type = getType;

          
         
          
          myObject.station_code = getStationCode;
          

         
            myObject.node=getNode;
          
         
            myObject.atcocode = getAtcocode;
          
          myObject.longitude=getLongitude;
          myObject.latitude=getLatitude;

         
        
        this.places.push(myObject);
        }
      },)



  }
  saveWishlist(name:string,type:string,description:string,id:any,atcocode:string,node:string,station_code:string,longitude:string,latitude:string){
   this.pla.name=name;
   this.pla.type=type;
   this.pla.description=description;
   this.pla.userName=id;
   this.pla.atcocode=atcocode;
   this.pla.node=node;
   this.pla.station_code=station_code;
   this.pla.longitude=longitude;
   this.pla.latitude=latitude;

    
    this.ws.addPlace(this.pla).subscribe(
      data=>{
        console.log("Successfully... Add to wishlist....");
        this.msg="Successfully added to wishlist";
        this.router.navigate(['dashboard',this.id]);
      },
      error=>{
        console.log("error occured...");
        this.msg="Already added to wishlist";
      }
    )
  }

  getDesc(code:string){
    this.station=[];
    this.sear.getDescription(code).subscribe(
      data=>{
        var myJsonString = JSON.stringify(data);
        var myJsonObject = JSON.parse(myJsonString);
        for (let index = 0; index < myJsonObject.departures.all.length - 1; index++) {
          var getAimedDeparture = myJsonObject.departures.all[index].aimed_departure_time;

         

          var getOrigin = myJsonObject.departures.all[index].origin_name;
          
          var getDestination = myJsonObject.departures.all[index].destination_name;
          
            var getPlatform=myJsonObject.departures.all[index].platform;
          
        
          var getTrainId = myJsonObject.departures.all[index].train_uid;
          
          
          


          console.log('......................');

          var obj = {};
          var myjsString = JSON.stringify(obj);
          var myObject = JSON.parse(myjsString);
          myObject.aimed_departure_time = getAimedDeparture;
          myObject.destination_name = getDestination;
          myObject.origin_name = getOrigin;
          myObject.platform = getPlatform;
          myObject.train_uid = getTrainId;

          
         
          
         
          this.station.push(myObject);
        }
      },)


  }

  getBus(code:string){
    this.buses=[];
    this.sear.getBusInfo(code).subscribe(
     
        // var myJsonString = JSON.stringify(data);
        // var myJsonObject = JSON.parse(myJsonString);
       
        // for (var index = 0; index < myJsonObject.departures.length - 1; index++) {
        //   var obj=myJsonObject.departures[index];
        //   var res1:any=[];
        //   for(var i = 0; i < obj.length-1;i++ ){

        //    var getAimedDeparture =obj[i].aimed_departure_time;

         

        //    var getLine =obj[i].line_name;
          
        //    var getDirection = obj[i].direction;
          
        //     var getOperator=obj[i].operator;
          
        
        //    var getDir = obj[i].dir;
          
          
          


        //    console.log('......................');

        //    var obj1 = {};
        //    var myjsString = JSON.stringify(obj1);
        //    var myObject = JSON.parse(myjsString);
        //    myObject.aimed_departure_time = getAimedDeparture;
        //     myObject.line_name = getLine;

        //    myObject.direction = getDirection;
        //    myObject.operator = getOperator;
        //    myObject.dir = getDir;
         
          
         
          
         
        //   res1.push(myObject);
        //  }
        //  this.buses.push(res1);
        // }
        data => {
          const departures = data.departures
          const rows = Object.keys(departures)
            .filter(line => departures[line].length > 0)
            .map(line => {
               this.buses = departures[line]})
       
      },)


    }
  

  logoutUser(){
    this.ms.logout();
    location.href="/login";
    // location.href="/login";
  }
 

}
