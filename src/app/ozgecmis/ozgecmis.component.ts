import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ozgecmis',
  templateUrl: './ozgecmis.component.html',
  styleUrls: ['./ozgecmis.component.css']
})
export class OzgecmisComponent implements OnInit {

  name:string;
  constructor(private router:Router) {
    this.name = 'Angular8'
  }

  ngOnInit(): void {
  }
  
  navigate() {
    let navigationExtras: any = {
      queryParams: { reference: 21 },
      outlets: {full: ['cv-bilgileri']}
    };
    this.router.navigate([navigationExtras]);
  }

}
