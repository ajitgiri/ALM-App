export class Address {
    id:number;
    flatNo:String;
	buildingNo:String;
	streetName:String;
    villageName:String;
	postName:String;
	via:String;
  
   constructor(id:number,flatNo:String,buildingNo:String,streetName:String,villageName:String,postName:String,via:String){
       this.id=id;
       this.flatNo=flatNo;
       this.buildingNo=buildingNo;
       this.streetName=streetName;
       this.villageName=villageName;
       this.postName=postName;
       this.via=via;
   }
}
