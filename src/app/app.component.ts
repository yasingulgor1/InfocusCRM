import { Component } from '@angular/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cv-Project';


  getActive(){
    console.log("Clicked");
  }
}
