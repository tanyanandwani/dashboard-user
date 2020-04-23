import { Component, OnInit,Input,Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { DashboardService } from '@services/dashboard.service';
import {Item} from "@model/item";
declare var $:any;

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css'],
  providers: [DashboardService],
})
export class AddClassComponent implements OnInit {
  completion_percentage:any[] = ["10%","20%","30%","40%","50%","60%","70%","80%","90%","100%"]
  status:any[];
  item: any;
  items: Item[];
  @Input() isOpen = false;
  hide= true;
 


  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dashboardService: DashboardService
  ){ }
  addForm: FormGroup;

   ngOnInit() {
    this.addForm = this.fb.group({
      status: [''],
      duration: [''],
      subject: [''],
      completed: [''],

    });
    //  this.getData();
    this.status = [{content:"Completed"} ,
      {content:"Inprogress"},
      {content:"NotStarted"},
      {content:"TotalClass"}
      ];
  }
  // hidePopup()
  // {
  //   hide= false;

  // }
//   getData(){
    
//  this.dashboardService.getData().subscribe((data:Item[]) =>{
// this.items = data;
// console.log("gitems",this.items)
//       return this.items;
//     })
//   }
   onSubmit() {

    console.log("form ",this.addForm.value);
    this.dashboardService.addClass(this.addForm.value)
      .subscribe(data => {
        console.log("after add class data",data);
        // console.log("data",data)
      // if(data)
      // {
      //  console.log("data",data)
      //   this.item = data; 
      //   $('#withBackdrop').modal('hide');
      //   console.log("item in submit",this.item)
      //   console.log("this.item",data);
      
     
      //     console.log("data",this.item);
        
      //     this.dashboardService.getData().subscribe((data:Item[]) =>{
      //       this.items = data;
      //       console.log("gitems",this.items);
      //       console.log("reloading");
      //     this.router.navigate(['dashboard']); 
                  // return this.items;
        //         })
          
 
          
        // }
     
       
      }); 
     
     
      
   
  }
}
