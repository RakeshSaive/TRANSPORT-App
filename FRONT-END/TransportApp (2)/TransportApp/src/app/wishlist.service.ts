import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Places } from './places';
import { WishList } from './wish-list';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private baseUrl='http://localhost:9090/trans/api/places/';

  constructor(private http:HttpClient) { }
  public addPlace(pl:WishList):Observable<any>{
    let url=this.baseUrl+'add';
    return this.http.post(url,pl);
  }

  public getPlaces(username:string):Observable<any>{
    let url=this.baseUrl+'wishlist/'+username;
    return this.http.get<WishList[]>(`${url}`);
  }

  public deleteWish(username:string,placeId:number):Observable<any>{
    let url=this.baseUrl+'delete/'+username+'/'+placeId;
    return this.http.delete(`${url}`);
  }
}
