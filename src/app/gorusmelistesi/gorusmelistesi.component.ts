import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gorusmelistesi',
  templateUrl: './gorusmelistesi.component.html',
  styleUrls: ['./gorusmelistesi.component.css']
})
export class GorusmelistesiComponent implements OnInit {

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
