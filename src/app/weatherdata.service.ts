import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {

url='https:/api.openweathermap.org/data/2.5/weather';
apikey='4e2e93d53f8b9f8e16410f30ebf6c3f7';
  
constructor(private http:HttpClient) {

 }

getWeatherDataByCoords(lat,lon){
let params=new HttpParams()
.set('lat',lat)
.set('lon',lon)
.set('units','imperial')
.set('appid',this.apikey)

return this.http.get(this.url,{params});
}
getWeatherDataByCityName(city: string){
let params=new HttpParams()
.set('q',city)
.set('units','imperial')
.set('appid',this.apikey)

return this.http.get(this.url,{params});
}
}