import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../../Shared/Services/dashboard-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showData= false;
  items: any = [];
  constructor(private dashboardService: DashboardServiceService) { }

  ngOnInit() {
    this.dashboardService.getData().subscribe(data =>{ 
      this.items = data;
    })
  }
  
  showDatavalue(){
    this.showData= true;
  }
}
