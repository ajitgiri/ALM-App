import { ServiceProvider } from './service-provider';
import { Team } from './team';
import { Type } from './type';

export class Employee {
    id:number;
    firstName:string;
    lastName:String;
    department:Type;
    team:Team;
    svcProvider:ServiceProvider;
    mobile:number;
    emailId:String;
  
   constructor(id:number,firstName:string,lastName:String,department:Type,team:Team,svcProvider:ServiceProvider,mobile:number,emailId:String){
       this.id=id;
       this.firstName=firstName;
       this.lastName=lastName;
       this.department =department;
       this.team=team;
       this.svcProvider=svcProvider;
       this.mobile=mobile;
       this.emailId=emailId;
   }
}
