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
  weather;
  city;
  constructor(private WeatherdataService:WeatherdataService) { }


  ngOnInit() {
    this.getLocation();
    this.getCity('Coimbatore');
  }
getLocation()
{
if("geolocation" in navigator){
  navigator.geolocation.watchPosition((success)=>{
    this.lat=success.coords.latitude;
    this.lon=success.coords.longitude;
    console.log('this.lat : '+this.lat);
    console.log('this.lon : '+this.lon);
    this.WeatherdataService.getWeatherDataByCoords(this.lat,this.lon).subscribe(data=>{
      this.weather=data;
    });
    })
}
}
getCity(city)
{
  console.log('city : '+city);
  
  this.WeatherdataService.getWeatherDataByCityName(city).subscribe(data=>{
    this.weather=data;
  });
}

}


