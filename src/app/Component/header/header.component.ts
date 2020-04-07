import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../../Shared/Services/dashboard-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  items: any;
  constructor(private dashboardService: DashboardServiceService) { }

  ngOnInit() {
    this.dashboardService.getData().subscribe(data =>{ 
      this.items = data;
      console.log("dashboard data",this.items);
    })
  }
  
  
}
