import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/classes/Employee';
import { Type } from 'src/app/classes/Type';
import { Team } from 'src/app/classes/Team';
import { ServiceProvider } from 'src/app/classes/service-provider';
import { EmployeeService } from 'src/app/services/employee.service';
import { TypeService } from 'src/app/services/type.service';
import { TeamService } from 'src/app/services/team.service';
import { ServiceproviderService } from 'src/app/services/serviceprovider.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: [
  ]
})
export class EmployeeComponent implements OnInit {

   employees;
   types;
   teams;
   svcProviders;
   employee ;
   employeeEdit;
  constructor(private employeeSvc:EmployeeService,private typeSvc: TypeService,private teamSvc: TeamService,private svcProvider:ServiceproviderService,private modalService: NgbModal) {   
    this.employee = new Employee(0,'','',new Type(0,'',''),new Team(0,'',''),new ServiceProvider(0,'','',new Date(),new Date()),0,'');
    this.employeeEdit = new Employee(0,'','',new Type(0,'',''),new Team(0,'',''),new ServiceProvider(0,'','',new Date(),new Date()),0,'');
  }

  ngOnInit() {
    this.getTypes();
    this.getTeams();
    this.getServiceProviders();
    this.getEmployeeDetails();
  }
  
  getTypes(){
    // debugger;
    this.typeSvc.getTypes().subscribe(
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
  createEmployee():void {
     this.employeeSvc.createEmployee(this.employee)
         .subscribe( data => {
           console.log(data);
           this.modalService.dismissAll();
           this.getEmployeeDetails(); 
         });
   };

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

  searchEmployee(){
    this.employeeSvc.searchEmployee(this.employee)
        .subscribe( data => {
          console.log(data);
         this.employees = data
  });
};

updateEmployee(): void {
    console.log(this.employeeEdit);
     this.employeeSvc.updateEmployee(this.employeeEdit)
         .subscribe( data => {
           console.log(data);
           this.modalService.dismissAll();
           
           this.getEmployeeDetails(); 
         });
};

deleteEmployee(EmployeeOBJ){
  this.employeeSvc.deleteEmployeeById(EmployeeOBJ.id)
  .subscribe((data)=>{
    this.employees.splice(this.employees.in);
    this.getEmployeeDetails();
  },(error)=>{
    console.error(error)
  } );
}

  open(content) {
    this.modalService.open(content,{ size: 'lg' });
  }
  openEditModal(content,EmployeeOBJ) {
    this.employeeEdit.id=EmployeeOBJ.id;
    this.employeeEdit.firstName=EmployeeOBJ.firstName;
    this.employeeEdit.lastName=EmployeeOBJ.lastName;
    this.employeeEdit.department=EmployeeOBJ.department;
    this.employeeEdit.team=EmployeeOBJ.team;
    this.employeeEdit.svcProvider=EmployeeOBJ.svcProvider;
    this.employeeEdit.mobile=EmployeeOBJ.mobile;
    this.employeeEdit.emailId=EmployeeOBJ.emailId;
    this.modalService.open(content,{ size: 'lg' });
  }
}