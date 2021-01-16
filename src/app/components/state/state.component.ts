import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/classes/country';
import { State } from 'src/app/classes/State';
import { CountryService } from 'src/app/services/country.service';
import { StateService } from 'src/app/services/state.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styles: [
  ]
})
export class StateComponent implements OnInit {

   countrys;
   states;
  // Default constructor
   country = new Country(0,'','');
   state:State = new State(0,"",'','', this.country); 
 // options = this.countrys;
  constructor(private countrySvc: CountryService,private StateSvc: StateService,private modalService: NgbModal) {   }

  ngOnInit() {
    this.state.country.id=0; // To select the Default one in Select Dropdown 
    this.countrySvc.getCountrys().subscribe(
      (data) =>{ 
        console.log(data);
        this.countrys = data 
      },(error)=>{console.log(error);
        }
      )

      this.getStateDetails();
  }

  createState():void {
     this.StateSvc.createState(this.state)
         .subscribe( data => {
           console.log(data);
         // this.countrys = data
           //alert("Country created successfully.");
           this.modalService.dismissAll();

           this.getStateDetails(); 
         });
   };

   getStateDetails(){
    // debugger;
    this.StateSvc.getStates().subscribe(
      (data) =>{ 
        console.log(data);
        this.states = data 
      },(error)=>{console.log(error);
        }
      )
  }

  searchState(){
    this.StateSvc.searchState(this.state)
        .subscribe( data => {
          console.log(data);
         this.states = data
          //alert("State  successfully.");
  });
};

updateState(): void {
    console.log(this.country);
     this.StateSvc.updateState(this.state)
         .subscribe( data => {
           console.log(data);
         // this.states = data
           //alert("State UPDATED successfully.");
           
           this.modalService.dismissAll();
           
           this.getStateDetails(); 
         });
};

deleteState(stateObj){
  this.StateSvc.deleteStateById(stateObj.id)
  .subscribe((data)=>{
    this.countrys.splice(this.countrys.in);
    this.getStateDetails();
  },(error)=>{
    console.error(error)
  } );
}

  open(content) {
    this.state.country.id=0; // To select the Default one in Select Dropdown 
    this.modalService.open(content);
  }
  openEditModal(content,stateO) {
    this.state.id=stateO.id;
    this.state.country.id=stateO.country.id;
    this.state.stateCode=stateO.stateCode;
    this.state.stateName=stateO.stateName;
    this.modalService.open(content);
  }
   
}
