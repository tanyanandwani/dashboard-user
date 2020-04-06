import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../../Shared/Services/dashboard-service.service';
import {Item} from "../../model/Item";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 
  items: any = [];
  newItems: any =[];
  
  constructor(private dashboardService: DashboardServiceService){}

  ngOnInit(){
    this.dashboardService.getData().subscribe(data =>{
      
      console.log("data",data);
      this.items = data;
      console.log("items",this.items);
      

    })
  }

    removeClass(item) {
    console.log("items length",this.items.length);
    console.log("item id",item.id);
    const i = this.items.findIndex(it => it.id === item.id );
    if( i!== -1){
      this.items.splice(i,1);
    }
console.log(" items",this.items);
    }

}


