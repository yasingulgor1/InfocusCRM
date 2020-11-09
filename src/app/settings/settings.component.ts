import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  name:string;
  constructor(private router:Router) {
    this.name = 'Angular8'
  }
  ngOnInit(): void {
  }


  navigate(){
    let navigationExtras: any = {
      queryParams: { reference: 21 },
      outlets: {full: ['m-set1']}
    };
    this.router.navigate([navigationExtras]);
  }

  navigate1() {
    let navigationExtras: any = {
      queryParams: { reference: 21 },
      outlets: {full: ['m-set2']}
    };
    this.router.navigate([navigationExtras]);
  }

  navigate2() {
    let navigationExtras: any = {
      queryParams: { reference: 21 },
      outlets: {full: ['m-set3']}
    };
    this.router.navigate([navigationExtras]);
  }
}
