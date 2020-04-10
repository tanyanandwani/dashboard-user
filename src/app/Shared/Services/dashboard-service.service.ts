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

  getData(){
    return this.httpClient.get(this.baseUrl);
  }
 
  removeClass(id: number): Observable<Item> {
    return this.httpClient.delete<Item>(`${this.baseUrl}/${id}`);
  }
  
addClass(item): Observable<Item>{
  item.id=null;
  return this.httpClient.post<Item>(this.baseUrl, item, this.httpOptions)
}
}
