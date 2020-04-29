import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '@services/dashboard.service';
import { Item } from "@model/item";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child-card',
  templateUrl: './child-card.component.html',
  styleUrls: ['./child-card.component.css']
})
export class ChildCardComponent implements OnInit {
  @Input() subject;
  @Input() duration;
  @Input() completed;
  @Input() status;
  items: Item[];
  deletedItemId;
  constructor(private router: Router, private dashboardService: DashboardService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getData();
  }
  removeClass(item) {
    const i = this.items.findIndex(it => it.id === item.id);
    if (i !== -1) {
      this.deletedItemId = this.items.splice(i, 1);
      this.dashboardService.removeClass(this.deletedItemId).subscribe(data => {
        console.log("item removed");
      });
    }
  }
  getData() {
    this.dashboardService.getData().subscribe((data: Item[]) => {
      this.items = data;
    })
  }
}
