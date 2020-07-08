import { Component, OnInit } from '@angular/core';
import { Userdata } from '../user';
import {EnrollmentService} from '../enrollment.service';



@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {


topics=['Angular','React','Vue'];
userModel = new Userdata('saran','saran@123.com',9008204880,'default','morning',true);
topicHasError= true;

validateTopic(value){
if(value=='default'){
  this.topicHasError=true;
}else{
  this.topicHasError=false;
}

}

  constructor(private _enrollmentService:EnrollmentService ) { }
  
  
  ngOnInit() { }



  onSubmit(){
    console.log(this.userModel);
    
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data=>console.log('Success!',data),
      error=>console.log('Errors!',error)
    )
  }
}
