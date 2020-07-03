import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherapiserviceService {
url;

apikey='4e2e93d53f8b9f8e16410f30ebf6c3f7';

  constructor(private http:HttpClient) {
    this.url='http://samples.openweathermap.org/data/2.5/forecast?q=';   
   }
}
