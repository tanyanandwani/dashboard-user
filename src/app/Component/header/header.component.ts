import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@services/dashboard.service';
import {Item} from "@model/item";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  items: Item[];
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getData().subscribe((data:Item[]) =>{ 
      this.items = data;
    })
  }  
}
