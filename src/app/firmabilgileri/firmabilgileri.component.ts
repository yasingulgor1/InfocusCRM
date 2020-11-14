import { JsonArray } from '@angular-devkit/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GeneralserviceService } from '../GeneralService/generalservice.service'

@Component({
  selector: 'app-firmabilgileri',
  templateUrl: './firmabilgileri.component.html',
  styleUrls: ['./firmabilgileri.component.css']
})
export class FirmabilgileriComponent implements OnInit {

  status = "showDataTable";
  locationCount = 1;
  service : GeneralserviceService;
  Alldata : any[] = [];
  constructor(private http : HttpClient){
      this.service = new GeneralserviceService("test",http);
   }

  ngOnInit(): void {
    this.service.getAllData().subscribe(alldata => {
      this.Alldata=alldata;
      var first = this.Alldata[0];
      var jsonfirst = JSON.stringify(first);
      console.log("JsonFirst : " + jsonfirst);
      
    
    });
  }

  changeStatus() {
    this.status = "showAdd";
  }

  back() {
    this.status = "showDataTable";
    console.log("asdasd" + this.Alldata);
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
