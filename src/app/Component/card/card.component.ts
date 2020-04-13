import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../../Shared/Services/dashboard-service.service';
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
// import {Item} from '../../Shared/Services/items.service';
import {Item} from "../../model/Item";



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 
  items: Item[];
  deletedItemId ;
  
  constructor(private router: Router,private dashboardService: DashboardServiceService,private route: ActivatedRoute,){}

  ngOnInit(){
    this.getData();
   
  }

  removeClass(item) {
    const i = this.items.findIndex(it => it.id === item.id);
    if (i !== -1) {
      this.deletedItemId = this.items.splice(i, 1);
    }
    this.dashboardService.removeClass(this.deletedItemId).subscribe(data => {
     });
    
  }
  getData(){
    this.dashboardService.getData().subscribe((data:Item[]) =>{
      this.items = data;
     
    })
  }
   
    addClass(): void {
      this.router.navigate(['dashboard/addClass'])
    };

}


