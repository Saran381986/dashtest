import { Component, OnInit } from '@angular/core';
import { WeatherdataService } from 'src/app/weatherdata.service';
import { getRtlScrollAxisType } from '@angular/cdk/platform';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.scss']
})
export class WeatherWidgetMainComponent implements OnInit {

  lat;
  lon;
  lng;
  weather;
  city;
  // locationDenied:boolean=true;
  // locationDeniedEnableCity=false;

  constructor(private WeatherdataService:WeatherdataService) { }


  ngOnInit() {
   this.getLocation();
   this.getCity('Bangalore');
  }



getLocation()
{ 
if("geolocation" in navigator){
  navigator.geolocation.watchPosition((success)=>{
    this.lat=success.coords.latitude;
    this.lon=success.coords.longitude;
    // console.log('this.lat : '+this.lat);
    // console.log('this.lng : '+this.lng);

    this.WeatherdataService.getWeatherDataByCoords(this.lat,this.lon).subscribe(data=>{
      this.weather=data;
    });
    })

} 
}
  

getCity(city)
{
  console.log('city : '+city);
  
  this.WeatherdataService.getWeatherDataByCityName(city).subscribe((data:any)=>{
    this.weather=data;

    this.lat=data.coord.lat;
    this.lon=data.coord.lon;
  })
}



getCoords(event){
  this.lat=event.coords.lat;
  this.lng=event.coords.lng;

  this.WeatherdataService.getWeatherDataByCoords(this.lat,this.lng).subscribe((data:any)=>{
  this.weather=data;
  })
}
}
