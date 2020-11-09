import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toplantilistesi',
  templateUrl: './toplantilistesi.component.html',
  styleUrls: ['./toplantilistesi.component.css']
})
export class ToplantilistesiComponent implements OnInit {

  status = "showDataTable";
  locationCount = 1;
  constructor() { }

  ngOnInit(): void {
  }

  changeStatus() {
    this.status = "showAdd";
  }

  back() {
    this.status = "showDataTable";
  }
}
