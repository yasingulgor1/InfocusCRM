import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firmabilgileri',
  templateUrl: './firmabilgileri.component.html',
  styleUrls: ['./firmabilgileri.component.css']
})
export class FirmabilgileriComponent implements OnInit {

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

  times(max: number) {
    return {
      [Symbol.iterator]: function* () {
        for (let i = 0; i < max; i++, yield) {
        }
      }
    };
  }

  addLocation() {
    if (this.locationCount < 5) {
      this.locationCount++;
    }
  }
  decreaseLocation() {
    if (this.locationCount > 0) {
      this.locationCount = this.locationCount - 1;
    }
    //console.log("**" + this.locationCount);
  }
}
