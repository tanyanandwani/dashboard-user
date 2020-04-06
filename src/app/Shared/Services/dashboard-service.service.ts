import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Item} from "../../model/Item";
import {Observable} from "rxjs/index";


@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {
  
 
  items: any = []; 
  constructor(private httpClient: HttpClient) { }
  baseUrl: string = 'http://localhost:4000/';
  getData(){
   return this.httpClient.get("assets/data.json");   
  }
 
  removeClass(id: number): Observable<Item> {
    console.log("id is",id)
    console.log("inside dashboard service");
    return this.httpClient.delete<Item>(`${this.baseUrl}/${id}`)
    
  }
  
}
