import { Component, OnInit,Input } from '@angular/core';
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
// import {Item} from '../../Shared/Services/items.service';
import { DashboardService } from '@services/dashboard.service';
import {Item} from "@model/item";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
declare var $:any;
import {Observable, Subject, of, from} from 'rxjs';
import { map, tap, takeUntil} from 'rxjs/operators';




@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();

  status:any[];
  items: Item[];
  deletedItemId ;
  popUpOpen = false;
  isOpen = false;
  completion_percentage:any[] = ["10%","20%","30%","40%","50%","60%","70%","80%","90%","100%"]

  constructor( private fb: FormBuilder,private router: Router,private dashboardService: DashboardService,private route: ActivatedRoute){}
 
  submitted = false;
  addForm: FormGroup;

  ngOnInit(){
    this.addForm = this.fb.group({
      status: [''],
      duration: ['',Validators.required],
      subject: ['',Validators.required],
      completed: [''],

    });
  
    this.getData();
    this.status = [{content:"Completed"} ,
      {content:"Inprogress"},
      {content:"NotStarted"},
      {content:"TotalClass"}
      ];
    }
    get f() { return this.addForm.controls; }

  removeClass(item) {
    const i = this.items.findIndex(it => it.id === item.id);
    if (i !== -1) {
      this.deletedItemId = this.items.splice(i, 1);
      this.dashboardService.removeClass(this.deletedItemId).pipe(takeUntil(this.destroy$)).subscribe(data => {
      });
    }
    
    
  }

 

  getData(){
    this.dashboardService.getData().pipe(takeUntil(this.destroy$)).subscribe((data:Item[]) =>{
      this.items = data;
      console.log("items in card",this.items);
     
    })
  }
  addClass(){
    this.popUpOpen = true;
  }

  onSubmit() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
  }
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
onReset() {
  this.submitted = false;
  this.addForm.reset();
}
ngOnDestroy() {
  console.log("ondestoy called");
  this.destroy$.next(true);
  console.log("ondestoy called1");

  // Now let's also unsubscribe from the subject itself:
  this.destroy$.unsubscribe();
  console.log("ondestoy called2");

}
}


