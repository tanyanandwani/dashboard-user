// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DashboardComponent } from '../Component/dashboard/dashboard.component';
import { AddClassComponent } from '../Component/add-class/add-class.component';
import { DashboardComponent } from '../Component/dashboard/dashboard.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/addClass', component: AddClassComponent },
 
  {path : '', component : DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }