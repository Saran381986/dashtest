import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {

url='http://samples.openweathermap.org/data/2.5/weather';
apikey='439d4b804bc8187953eb36d2a8c26a02';
constructor(private http:HttpClient) { }
}
