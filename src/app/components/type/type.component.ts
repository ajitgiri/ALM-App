import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/classes/Type';
import { TypeService } from 'src/app/services/type.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styles: [
  ]
})
export class TypeComponent implements OnInit {

   types;
  // Default constructor
   type
 // options = this.countrys;
  constructor(private typeSvc:TypeService,private modalService: NgbModal) {  
    this.type = new Type (0,'','');
   }

  ngOnInit() {
    this.typeSvc.getTypes().subscribe(
      (data) =>{ 
        console.log(data);
        this.types = data 
      },(error)=>{
        console.log(error);
        }
      )
      this.getTypeDetails();
  }
  
  createType():void {
     this.typeSvc.createType(this.type)
         .subscribe( data => {
           console.log(data);
           this.modalService.dismissAll();
           this.getTypeDetails(); 
         });
   };

 
   getTypeDetails(){
    // debugger;
    this.typeSvc.getTypes().subscribe(
      (data) =>{ 
        console.log(data);
        this.types = data 
      },(error)=>{console.log(error);
        }
      )
  }

  searchType(){
    this.typeSvc.searchType(this.type)
        .subscribe( data => {
          console.log(data);
         this.types = data
  });
};

updateType(): void {
    console.log(this.type);
     this.typeSvc.updateType(this.type)
         .subscribe( data => {
           console.log(data);
           this.modalService.dismissAll();
           
           this.getTypeDetails(); 
         });
};

deleteType(TypeOBJ){
  this.typeSvc.deleteTypeById(TypeOBJ.id)
  .subscribe((data)=>{
    this.types.splice(this.types.in);
    this.getTypeDetails();
  },(error)=>{
    console.error(error)
  } );
}


  open(content) {
    this.modalService.open(content);
  }
  openEditModal(content,TypeOBJ) {
    this.type.id=TypeOBJ.id;
    this.type.roleType=TypeOBJ.roleType;
    this.type.roleDesc=TypeOBJ.roleDesc;
    this.modalService.open(content);
  }
}
