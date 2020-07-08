import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.Module';
import { SharedModule } from 'src/app/shared/shared.module';

import { DashboardService } from './modules/dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { UserdataService } from './userdata.service';
import { WeatherWidgetMainComponent } from './components/weather-widget-main/weather-widget-main.component';
import { WeatherapiComponent } from './weatherapi/weatherapi.component';
import { UserFormComponent } from './user-form/user-form.component';
import{AgmCoreModule} from '@agm/core';
import{FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetMainComponent,
    WeatherapiComponent,
    UserFormComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey:''
    })
    
    
        
    
  ],
  providers: [DashboardService,UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
