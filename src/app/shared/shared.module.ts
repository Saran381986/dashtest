import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import {HighchartsChartModule} from 'highcharts-angular';
import { AreaComponent } from './widgets/area/area.component';
import {CardComponent} from './widgets/card/card.component';
import { PieComponent } from './widget/pie/pie.component';
// import { WeatherWidgetMainComponent } from '../components/weather-widget-main/weather-widget-main.component';



@NgModule({
  declarations: [
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  AreaComponent,
  CardComponent,
  PieComponent
  ],
  
  imports: [
    CommonModule,
    MatDividerModule,  
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule

  ],
  exports:[
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  AreaComponent,
  CardComponent,
  PieComponent
  ]
})
export class SharedModule { }
