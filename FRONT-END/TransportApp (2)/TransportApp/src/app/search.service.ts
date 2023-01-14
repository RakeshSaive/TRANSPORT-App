import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BusInfo } from './bus-info';
import { Places } from './places';
import { StationInfo } from './station-info';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  


  private baseUrl='http://localhost:9098/transport/api/';
  constructor(private http:HttpClient,private route:Router) { }

  public getSearchData(val:string):Observable<any>{
    
    let url=this.baseUrl+'areas/'+val;
    return this.http.get<[Places]>(`${url}`);

  }

  public getDescription(val:string):Observable<any>{
    let url=this.baseUrl+'stations/'+val;
    return this.http.get<[StationInfo]>(`${url}`);



  }
  getBusInfo(code: string) :Observable<any>{
    let url=this.baseUrl+'buses/'+code;
    return this.http.get<[BusInfo]>(`${url}`);
  }
}
