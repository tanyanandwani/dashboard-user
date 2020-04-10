import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../../Shared/Services/dashboard-service.service';
import {Item} from "../../model/Item";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  items: Item[];
  constructor(private dashboardService: DashboardServiceService) { }

  ngOnInit() {
    this.dashboardService.getData().subscribe((data:Item[]) =>{ 
      this.items = data;
    })
  }
  
  
}
