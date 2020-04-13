import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { DashboardServiceService } from '../../Shared/Services/dashboard-service.service';
import {Item} from "../../model/Item";


@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css'],
  providers: [DashboardServiceService],
})
export class AddClassComponent implements OnInit {
  item: any;
  items: Item[];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dashboardService: DashboardServiceService
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
    this.getData();
  }
  getData(){
    this.dashboardService.getData().subscribe((data:Item[]) =>{
      this.items = data;
      return this.items
    })
  }
  onSubmit() {
    
    this.dashboardService.addClass(this.addForm.value)
      .subscribe(data => {
        this.item = data;
        this.router.navigate(['dashboard']);
       
      });  
      this.getData();
   
  }
}
