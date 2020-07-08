import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Userdata } from './user';



@Injectable({
  providedIn: 'root'
})

export class EnrollmentService {
_url='';
  constructor(private _http:HttpClient) { }

  enroll(user:Userdata){
    return this._http.post<any>(this._url,user);
  }
}
