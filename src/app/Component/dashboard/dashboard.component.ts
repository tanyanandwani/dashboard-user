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
  
  items: Item[];
  countOfCompletedClass;
  countOfInprogressClass;
  countOfTotalClass;
  countOfNotStartedClass;
  constructor(private router: Router,private dashboardService: DashboardService){}

  ngOnInit(){
    
    this.dashboardService.getData().subscribe((data:Item[]) =>{ 
      this.items = data;
       this.countCompletedClass();
      this.countInProgressClass();
      this.countNotStartedClass();
      this.countTotalClass();
    })
  }
  

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
