import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bom-sub-menu1',
  templateUrl: './bom-sub-menu1.component.html',
  styleUrls: ['./bom-sub-menu1.component.css']
})
export class BomSubMenu1Component implements OnInit {

  status = "showDataTable";
  locationCount = 1;

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus() {
    this.status = "showAdd";

  }

  showSys() {
    this.status = "showSys";
    console.log("Clicked");
  }

  back() {
    this.status = "showDataTable";
  }

}
