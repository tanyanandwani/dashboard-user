import { Component, OnInit,Input } from '@angular/core';
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
// import {Item} from '../../Shared/Services/items.service';
import { DashboardService } from '@services/dashboard.service';
import {Item} from "@model/item";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
declare var $:any;




@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  status:any[];
  items: Item[];
  deletedItemId ;
  popUpOpen = false;
  isOpen = false;
  completion_percentage:any[] = ["10%","20%","30%","40%","50%","60%","70%","80%","90%","100%"]

  constructor( private fb: FormBuilder,private router: Router,private dashboardService: DashboardService,private route: ActivatedRoute){}
 

  addForm: FormGroup;

  ngOnInit(){
    this.addForm = this.fb.group({
      status: [''],
      duration: [''],
      subject: [''],
      completed: [''],

    });
  
    this.getData();
    this.status = [{content:"Completed"} ,
      {content:"Inprogress"},
      {content:"NotStarted"},
      {content:"TotalClass"}
      ];
    }

  removeClass(item) {
    const i = this.items.findIndex(it => it.id === item.id);
    if (i !== -1) {
      this.deletedItemId = this.items.splice(i, 1);
      this.dashboardService.removeClass(this.deletedItemId).subscribe(data => {
      });
    }
    
    
  }
  getData(){
    this.dashboardService.getData().subscribe((data:Item[]) =>{
      this.items = data;
      console.log("items in card",this.items);
     
    })
  }
  addClass(){
    this.popUpOpen = true;
  }
  onSubmit() {

    console.log("form ",this.addForm.value);
    this.dashboardService.addClass(this.addForm.value)
      .subscribe(data => {
        console.log("after add class data",data);
         $('#withBackdrop').modal('hide');
      });
      this.getData();
  // id1234= 15;
  // addData(){
  //   const data = {
  //     "id": this.id1234++,
  //     "username": "Tanya123 Nandwani",
  //     "email":"tanya123@gmail.com",
  //     "rating":4,
  //     "status": "Inprogress",
  //     "duration":"100 days",
  //     "subject":"Maths1234",
  //     "completed":"70%"
  //   }

  //   this.dashboardService.addClass(data).subscribe((data1234) => {
  //     console.log("dashboard data in addclass func", data1234);
  //     this.dashboardService.getData().subscribe((get1234) => {
  //       console.log("dashboard get data in addclass func", get1234);
  //       this.getData(); 
  //     })
  //   })

    
  // }
 
}
}


