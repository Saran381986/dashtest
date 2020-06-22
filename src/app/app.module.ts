import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.Module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    SharedModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
