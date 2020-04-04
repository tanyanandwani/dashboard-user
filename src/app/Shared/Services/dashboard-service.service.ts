import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {
  items: any = []; 
  constructor(private httpClient: HttpClient) { }
  getData(){
   return this.httpClient.get("assets/data.json");   
  }
  
}
