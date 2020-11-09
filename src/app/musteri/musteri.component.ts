import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-musteri',
  templateUrl: './musteri.component.html',
  styleUrls: ['./musteri.component.css']
})
export class MusteriComponent implements OnInit {

  ngOnInit(): void {
  }

  name:string;
  constructor(private router:Router) {
    this.name = 'Angular8'
  }
  
  navigate() {
    let navigationExtras: any = {
      queryParams: { reference: 21 },
      outlets: {full: ['m-firmabilgileri']}
    };
    this.router.navigate([navigationExtras]);
  }

  navigate1() {
    let navigationExtras: any = {
      queryParams: { reference: 21 },
      outlets: {full: ['m-toplantilistesi']}
    };
    this.router.navigate([navigationExtras]);
  }

  navigate2() {
    let navigationExtras: any = {
      queryParams: { reference: 21 },
      outlets: {full: ['m-gorusmelistesi']}
    };
    this.router.navigate([navigationExtras]);
  }

}
