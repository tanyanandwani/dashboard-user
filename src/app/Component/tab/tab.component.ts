import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() tabContent_for_Completed_class;
  @Input() tabQuantity_for_Completed_class;
  @Input() tabContent_for_not_Started_class;
  @Input() tabQuantity_for_not_Started_class;
  @Input() tabContent_for_In_Progress_class;
  @Input() tabQuantity_for_In_Progress_class;
  @Input() tabContent_for_TotalNo_class;
  @Input() tabQuantity_for_TotalNo_class;



  

  constructor() { }

  ngOnInit() {
  }

}
