import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class dataServices {
  serviceURL: string;
  constructor(private http: HttpClient) {
    this.serviceURL="http://numbersapi.com/"
  }

  getData(url:string){
    return this.http.get(this.serviceURL+url)
  }
}
