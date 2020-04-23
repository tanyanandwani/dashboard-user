import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@services/dashboard.service';
import {Item} from "@model/item";
import {Router} from "@angular/router";



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
 
})
export class DashboardComponent implements OnInit {
  status:any[];
  items: Item[];
  
  countOfCompletedClass:number = 0;
  countOfInprogressClass:number = 0;
  countOfTotalClass:number = 0;
  countOfNotStartedClass:number = 0;
  
  
  constructor(private router: Router,private dashboardService: DashboardService){}

  ngOnInit(){
    this.getData(); 
  }
  getData(){
    this.dashboardService.getData().subscribe((data:Item[]) =>{
      this.items = data;
      this.countCompletedClass();
      this.countInProgressClass();
      this.countNotStartedClass();
      this.countTotalClass();
      this.status = [{content:"Completed",quantity:this.countOfCompletedClass} ,
      {content:"Inprogress",quantity:this.countOfInprogressClass},
      {content:"NotStarted",quantity:this.countOfNotStartedClass},
      {content:"TotalClass",quantity:this.countOfTotalClass}
      ];  
    })
  }
//  id1234= 15;
//   addData(){
//     const data = {
//       "id": this.id1234++,
//       "username": "Tanya123 Nandwani",
//       "email":"tanya123@gmail.com",
//       "rating":4,
//       "status": "Inprogress",
//       "duration":"100 days",
//       "subject":"Maths1234",
//       "completed":"70%"
//     }

//     this.dashboardService.addClass(data).subscribe((data1234) => {
//       console.log("dashboard data in addclass func", data1234);
//       this.dashboardService.getData().subscribe((get1234) => {
//         console.log("dashboard get data in addclass func", get1234);
//         this.getData(); 
//       })
//     })

    
//   }
  countCompletedClass(){
    
      this.countOfCompletedClass = 0;  
      for (var i=0; i<this.items.length; i++) {
        if ( 'status' in this.items[i] && this.items[i].status === "Completed" ) this.countOfCompletedClass++;
      }
      return this.countOfCompletedClass;    
    }
    countInProgressClass(){
      this.countOfInprogressClass = 0;
      for (var i=0; i<this.items.length; i++) {
        if ( 'status' in this.items[i] && this.items[i].status === "Inprogress" ) this.countOfInprogressClass++;
    }
    return this.countOfInprogressClass;
  }
  countNotStartedClass(){
    this.countOfNotStartedClass = 0;
    for (var i=0; i<this.items.length; i++) {
      if ( 'status' in this.items[i] && this.items[i].status === "NotStarted" ) this.countOfNotStartedClass++;
  }
  return this.countOfNotStartedClass;
}

countTotalClass(){
  this.countOfTotalClass = 0;
  this.countOfTotalClass =  this.countOfCompletedClass + this.countOfInprogressClass + this.countOfNotStartedClass;
  return this.countOfTotalClass;
}

}