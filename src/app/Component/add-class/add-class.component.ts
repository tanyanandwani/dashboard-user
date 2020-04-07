import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { DashboardServiceService } from '../../Shared/Services/dashboard-service.service';



@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css'],
  providers: [DashboardServiceService],
})
export class AddClassComponent implements OnInit {
  item: any;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    public dashboardService: DashboardServiceService
  ){ }
  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.fb.group({
      id: [],
      username: [''],
      email: [''],
      rating:[''],
      status: [''],
      duration: [''],
      subject: [''],
      completed: [''],

    });
  }

  onSubmit() {
    console.log("yes",this.addForm.value);
    this.dashboardService.addClass(this.addForm.value)
      .subscribe(data => {
        this.item = data;
        console.log("item",this.item);
        console.log("item",data);
      
        this.router.navigate(['dashboard']);
      });  
   
  }
}
