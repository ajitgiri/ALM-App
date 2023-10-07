import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [  ]
})
export class UserComponent{

  users: Object;
  
  constructor(private userSvc: UserService) { }

  ngOnInit() {
    
    this.userSvc.getUsers().subscribe(
      data =>{
        console.log(" ngOnInit ---------------"+data.status)
        this.users = data.body;
        ;
      },(error)=>{
        console.log('errr.status');
      }
    );
  }

  UerService(){
    console.log('new - data is');
  }

  ngOnChanges() {
    console.log(`ngOnChanges - data is :`);
  }

  ngDoCheck() {
    console.log("ngDoCheck")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

}
