import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralserviceService {



  constructor(public collectionName: string, private http:HttpClient) {
      this.collectionName = collectionName;
   }

   apiUrl = 'https://localhost:44377/api/firma/'+ this.collectionName;


    getAllData(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }

    getDataById(id: string) : Observable<any> {
        return this.http.get<any>(this.apiUrl + "/" + id);
    }





}
