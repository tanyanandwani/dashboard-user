import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {HeaderComponent} from './Component/header/header.component'
import { AppComponent } from './app.component';
import {DashboardComponent} from './Component/dashboard/dashboard.component';
import {TabComponent} from './Component/tab/tab.component';
import {CardComponent} from './Component/card/card.component';
import {ItemsService} from './Shared/Services/items.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
// import {CalendarModule} from 'primeng/calendar';
// import { TooltipModule } from 'ng2-tooltip-directive';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { DashboardService } from './Shared/Services/dashboard.service';
import { ChildCardComponent } from './Component/child-card/child-card.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    TabComponent,
    CardComponent,
    
    
    ChildCardComponent,
    
   
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CardModule,
     AppRoutingModule,InMemoryWebApiModule.forRoot(ItemsService),
     FormsModule,
    CommonModule,
    ReactiveFormsModule,
   
  
    
    // CalendarModule,
    // TooltipModule
  ],
  providers: [DashboardService],
 
  bootstrap: [AppComponent],


 
})
export class AppModule { }
