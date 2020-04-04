import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../../Shared/Services/dashboard-service.service';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
 
})
export class DashboardComponent implements OnInit {
  
  items: any = [];
  count_of_completed_class; 
  count_of_inprogress_class;
  count_of_total_class;
  count_of_not_started_class;
  constructor(private dashboardService: DashboardServiceService){}

  ngOnInit(){
    this.dashboardService.getData().subscribe(data =>{
      
      console.log("data",data);
      this.items = data;
      console.log("items",this.items);
      this.Count_Completed_class();
      this.Count_In_progress_class();
      this.Count_Not_Started_class();
      this.count_Total_class();
      

    })
  }
  Count_Completed_class(){
      this.count_of_completed_class = 0;  
      for (var i=0; i<this.items.length; i++) {
        if ( 'status' in this.items[i] && this.items[i].status === "Completed" ) this.count_of_completed_class++;
        console.log("count in loop",this.count_of_completed_class);
      }
      console.log("C_count",this.count_of_completed_class);
      return this.count_of_completed_class;    
    }
    Count_In_progress_class(){
      this.count_of_inprogress_class = 0;
      for (var i=0; i<this.items.length; i++) {
        if ( 'status' in this.items[i] && this.items[i].status === "Inprogress" ) this.count_of_inprogress_class++;
        console.log("count in loop",this.count_of_inprogress_class);

    }
  }
  Count_Not_Started_class(){
    this.count_of_not_started_class = 0;
    for (var i=0; i<this.items.length; i++) {
      if ( 'status' in this.items[i] && this.items[i].status === "Notstarted" ) this.count_of_not_started_class++;
      console.log("count in loop",this.count_of_not_started_class);

  }
}

count_Total_class(){
  this.count_of_total_class = 0;
  this.count_of_total_class =  this.count_of_completed_class + this.count_of_inprogress_class + this.count_of_not_started_class;
  return this.count_of_total_class;
  console.log("total",this.count_of_total_class)
}
}
