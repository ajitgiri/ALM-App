import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { TypeService } from 'src/app/services/type.service';
import { TeamService } from 'src/app/services/team.service';
import { ServiceproviderService } from 'src/app/services/serviceprovider.service';
import { LeaveService } from 'src/app/services/leave.service';
import { NgbModal, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Team } from 'src/app/classes/Team';
import { ServiceProvider } from 'src/app/classes/service-provider';
import { Type } from 'src/app/classes/Type';
import { Employee } from 'src/app/classes/Employee';
import { Leave } from 'src/app/classes/Leave';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styles: [
  ]
})
export class LeaveComponent implements OnInit {

   leaves;
   employees;
   types;
   teams;
   svcProviders;
   managers;
   backupResources;
   employeesOfTeam;
   leave;

  constructor(private employeeSvc:EmployeeService, 
              private typeSvc: TypeService,
              private teamSvc: TeamService,
              private svcProvider:ServiceproviderService,
              private leaveSvc:LeaveService,
              private modalService: NgbModal,
              private calendar: NgbCalendar) {  
    this.leave  = new Leave(0,new Employee(0,'','', new Type(0,'',''),new Team(0,'',''),new ServiceProvider(0,'','',new Date(),new Date()),0,''),new Type(0,'',''),new Employee(0,'','', new Type(0,'',''),new Team(0,'',''),new ServiceProvider(0,'','',new Date(),new Date()),0,''),new Date(),new Date(),0,'','',new Employee(0,'','', new Type(0,'',''),new Team(0,'',''),new ServiceProvider(0,'','',new Date(),new Date()),0,''),new Team(0,'',''));
               }

  ngOnInit() {
    this.getTypes();
    this.getTeams();
    this.getServiceProviders();
    this.getEmployeeDetails();
    this.getLeaveDetails();
  }

  getTypes(){
    // debugger;
    this.typeSvc.getTypesByType('LV').subscribe(
      (data) =>{ 
        console.log(data);
        this.types = data 
      },(error)=>{console.log(error);
        }
      )
  }

  getTeams(){
    // debugger;
    this.teamSvc.getTeams().subscribe(
      (data) =>{ 
        console.log(data);
        this.teams = data 
      },(error)=>{console.log(error);
        }
      )
  }

  getServiceProviders(){
     // debugger;
     this.svcProvider.getServiceProviders().subscribe(
      (data) =>{ 
        console.log(data);
        this.svcProviders = data 
      },(error)=>{console.log(error);
        }
      )
  }

   getEmployeeDetails(){
    // debugger;
    this.employeeSvc.getEmployees().subscribe(
      (data) =>{ 
        console.log(data);
        this.employees = data 
      },(error)=>{console.log(error);
        }
      )
  }

  getLeaveDetails(){
    // debugger;
    this.leaveSvc.getLeaves().subscribe(
      (data) =>{ 
        console.log(data);
        this.leaves = data 
      },(error)=>{console.log(error);
        }
      )
  }

  getManagerDetails(id:number){
    // debugger;
    this.employeeSvc.getManagerByEmployeeId(id).subscribe(
      (data) =>{ 
        console.log(data);
        this.managers = data 
      },(error)=>{console.log(error);
        }
      )
  }

  getBackupResources(id:number){
    // debugger;
    this.employeeSvc.getBackupRecources(id).subscribe(
      (data) =>{ 
        console.log(data);
        this.backupResources = data 
      },(error)=>{console.log(error);
        }
      )
  }

  createLeave():void {
    this.leaveSvc.createLeave(this.leave)
        .subscribe( data => {
          console.log(data);
          this.modalService.dismissAll();
          this.getLeaveDetails(); 
        });
  };

  searchLeave(){
    this.leaveSvc.searchLeave(this.leave)
        .subscribe( data => {
          console.log(data);
         this.leaves = data
  });
};

updateLeave(): void {
    console.log(this.leave);
     this.leaveSvc.updateLeave(this.leave)
         .subscribe( data => {
           console.log(data);
           this.modalService.dismissAll();
           
           this.getLeaveDetails(); 
         });
};

deleteLeave(leaveOBJ){
  this.leaveSvc.deleteLeaveById(leaveOBJ.id)
  .subscribe((data)=>{
    this.leaves.splice(this.leaves.in);
    this.getLeaveDetails();
  },(error)=>{
    console.error(error)
  } );
}

changeTeam(teamId:number){
  this.getResourcesOfTeam(teamId);
}

changeEmployee(empId:number){
  this.getBackupResources(empId);
  this.getManagerDetails(empId);
}

getResourcesOfTeam(teamId){
 // debugger;
 this.employeeSvc.getEmployeeByTeam(teamId).subscribe(
  (data) =>{ 
    console.log(data);
    this.employeesOfTeam = data 
  },(error)=>{console.log(error);
    }
  )}

  open(content) {
    this.modalService.open(content,{ size: 'lg' }); // { size: <any>'xl'} 
  }
  openEditModal(content,leaveOBJ) {
    this.leave.id=leaveOBJ.id;
    this.leave.empId=leaveOBJ.empId.id;
    this.leave.leaveType=leaveOBJ.leaveType.id;
    this.leave.approver=leaveOBJ.approver.id;
    this.leave.lvFromDate=leaveOBJ.lvFromDate;
    this.leave.lvtoDate=leaveOBJ.lvtoDate;
    this.leave.noOfDays=leaveOBJ.noOfDays;
    this.leave.status=leaveOBJ.status;
    this.leave.resonForLeave=leaveOBJ.resonForLeave;
    this.leave.backupResource=leaveOBJ.backupResource.id;
    this.modalService.open(content);
  }
}