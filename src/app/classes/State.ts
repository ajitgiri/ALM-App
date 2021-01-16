import { Country } from './Country';

export class State {
    id:number;
    stateCode:string;
    stateName:string;
    createdBy:string;
    country: Country;
  
   constructor(id:number,stateCode:string,stateName:string,createdBy:string,country: Country){
       this.id=id;
       this.stateCode=stateCode;
       this.stateName=stateName;
       this.createdBy=createdBy;
       this.country=country;
   }
}
