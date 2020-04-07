import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
 import {Item} from "../../model/Item";
 import {ItemsService} from "./items.service"



@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {
  
  
 
  constructor(private httpClient: HttpClient) { }
  
  baseUrl: string = 'api/items';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };
  //  Data = 
  //   this.httpClient.get(this.baseUrl).subscribe(data=>this.Data=data); 

  private handleError(error: any) {
    console.error(error);                                       //Created a function to handle and log errors, in case
    return throwError(error);
  }
  getData(){
    
    return this.httpClient.get(this.baseUrl);
  
  }
 
  removeClass(id: number): Observable<Item> {
    return this.httpClient.delete<Item>(`${this.baseUrl}/${id}`);
  }
  // addClass(item: Item): Observable<Item> {
  //   this.Data.push(item);
  //   console.log("items are",this.Data);
  //   return this.Data;
   
  // }
addClass(item: Item): Observable<Item>{
  item.id=null;
  return this.httpClient.post<Item>(this.baseUrl, item, this.httpOptions)
}
}
