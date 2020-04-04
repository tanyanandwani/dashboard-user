import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../../Shared/Services/dashboard-service.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 
  items: any = [];
  
  constructor(private dashboardService: DashboardServiceService){}

  ngOnInit(){
    this.dashboardService.getData().subscribe(data =>{
      
      console.log("data",data);
      this.items = data;
      console.log("items",this.items);
      

    })
  }

 removeClass(item: number){
  if(item){
    console.log("item",item)
  }
 }
}
