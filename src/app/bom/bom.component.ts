import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-bom',
  templateUrl: './bom.component.html',
  styleUrls: ['./bom.component.css']
})
export class BomComponent implements OnInit {

  name:string;
  constructor(private router:Router) {
    this.name = 'Angular8'
  }
  ngOnInit(): void {
  }


  navigate(){
    let navigationExtras: any = {
      queryParams: { reference: 21 },
      outlets: {full: ['m-bom1']}
    };
    this.router.navigate([navigationExtras]);
  }

  navigate1() {
    let navigationExtras: any = {
      queryParams: { reference: 21 },
      outlets: {full: ['m-bom2']}
    };
    this.router.navigate([navigationExtras]);
  }

  navigate2() {
    let navigationExtras: any = {
      queryParams: { reference: 21 },
      outlets: {full: ['m-bom3']}
    };
    this.router.navigate([navigationExtras]);
  }
}
