import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() tabContent;
  @Input() tabQuantity;
  scroll() {
    var element = document.getElementById("tabContent");
    console.log("el",element)
    element.scrollIntoView();
  }
  constructor() { }
  ngOnInit() {
  }
}
