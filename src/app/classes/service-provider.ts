export class ServiceProvider {
    id:number;
    providerName:string;
    owner:String;
    contStartDate:Date;
    contEndDate:Date;
  
   constructor(id:number,providerName:string,owner:string,contStartDate:Date,contEndDate:Date){
       this.id=id;
       this.providerName=providerName;
       this.owner=owner;
       contStartDate= contStartDate;
       contEndDate = contEndDate;
   }
}
