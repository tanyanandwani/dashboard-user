import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {HeaderComponent} from './Component/header/header.component'
import { AppComponent } from './app.component';
import {DashboardComponent} from './Component/dashboard/dashboard.component';
import {TabComponent} from './Component/tab/tab.component';
import {CardComponent} from './Component/card/card.component';
import { DashboardServiceService} from './Shared/Services/dashboard-service.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {CalendarModule} from 'primeng/calendar';
import { TooltipModule } from 'ng2-tooltip-directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    TabComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CardModule,
    CalendarModule,
    TooltipModule
  ],
  providers: [DashboardServiceService],
 
  bootstrap: [AppComponent],


 
})
export class AppModule { }
