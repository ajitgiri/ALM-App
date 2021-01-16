import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [  ]
})
export class UserComponent implements OnInit {

  users: Object;
  
  constructor(private userSvc: UserService) { }

  ngOnInit() {
	 	  
    this.userSvc.getUsers().subscribe(
      data => this.users = data 
    );
  }

}
