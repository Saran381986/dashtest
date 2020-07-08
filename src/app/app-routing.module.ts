import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { WeatherWidgetMainComponent } from './components/weather-widget-main/weather-widget-main.component';
import { UserFormComponent } from './user-form/user-form.component';


const routes: Routes = [{
path:'',
component: DefaultComponent,
children:[{
path:'',
component: DashboardComponent
},{
path:'posts',
component:PostsComponent
},{
  path:'weather-widget-main',
  component:WeatherWidgetMainComponent
},{
  path:'user-form',
  component:UserFormComponent
}

]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
