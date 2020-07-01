import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user.model';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts:User[];
  constructor( private userdataservice:UserdataService) {

   }

  ngOnInit() {
    return this.userdataservice.getUsers()
    .subscribe(userdata=>this.posts=userdata);
    
      }

}
