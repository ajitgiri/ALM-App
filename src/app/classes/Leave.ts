import { Employee } from './Employee';
import { Team } from './Team';
import { Type } from './Type';

export class Leave {
    id:number;
    empId:Employee;
	leaveType:Type;
    approver:Employee;
	lvFromDate:Date;
    lvtoDate:Date;
    noOfDays:number;
    status:String;
    resonForLeave:String;
    backupResource:Employee;
    team:Team;
  
   constructor(id:number,empId:Employee,leaveType:Type,approver:Employee,lvFromDate:Date,lvtoDate:Date,noOfDays:number,status:String,resonForLeave:String,backupResource:Employee,team:Team){
       this.id=id;
       this.empId=empId;
       this.leaveType=leaveType;
       this.approver=approver;
       this.lvFromDate=lvFromDate;
       this.lvtoDate=lvtoDate;
       this.noOfDays=noOfDays;
       this.status=status;
       this.resonForLeave=resonForLeave;
       this.backupResource=backupResource;
       this.team=team;
   }
}
