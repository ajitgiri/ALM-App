import { Component, OnInit } from '@angular/core';
import { District } from 'src/app/classes/District';
import { State } from 'src/app/classes/State';
import { Country } from 'src/app/classes/country';
import { DistrictService } from 'src/app/services/district.service';
import { StateService } from 'src/app/services/state.service';
import { CountryService } from 'src/app/services/country.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styles: [
  ]
})
export class DistrictComponent implements OnInit {

   countrys;
   states;
   districts;
  // Default constructor
   district; 
   country:Country = new Country(0,'','');
 // options = this.countrys;
  constructor(private districtSvc:DistrictService,private StateSvc: StateService,private countrySvc:CountryService,private modalService: NgbModal) {
 this.district  = new District(0,'','', new State(0,'','','',new Country(0,'','')));
  }   

  ngOnInit() {
    this.district.state.country.id=0; // To select the Default one in Select Dropdown 
    this.districtSvc.getDistricts().subscribe(
      (data) =>{ 
        console.log(data);
        this.districts = data 
      },(error)=>{console.log(error);
        }
      )
      this.getDistrictDetails();
      this.getCountryDetails();
      this.getStateDetails();
  }
  
  createDistrict():void {
     this.districtSvc.createDistrict(this.district)
         .subscribe( data => {
           console.log(data);
           this.modalService.dismissAll();
           this.getDistrictDetails(); 
         });
   };

   getCountryDetails(){
    // debugger;
    this.countrySvc.getCountrys().subscribe(
      (data) =>{ 
        console.log(data);
        this.countrys = data 
      },(error)=>{console.log(error);
        }
      )
  }
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

   getDistrictDetails(){
    // debugger;
    this.districtSvc.getDistricts().subscribe(
      (data) =>{ 
        console.log(data);
        this.districts = data 
      },(error)=>{console.log(error);
        }
      )
  }

  searchDistrict(){
    this.districtSvc.searchDistrict(this.district)
        .subscribe( data => {
          console.log(data);
         this.districts = data
  });
};

updateDistrict(): void {
    console.log(this.country);
     this.districtSvc.updateDistrict(this.district)
         .subscribe( data => {
           console.log(data);
           this.modalService.dismissAll();
           
           this.getDistrictDetails(); 
         });
};

deleteDistrict(districtOBJ){
  this.districtSvc.deleteDistrictById(districtOBJ.id)
  .subscribe((data)=>{
    this.districts.splice(this.districts.in);
    this.getDistrictDetails();
  },(error)=>{
    console.error(error)
  } );
}
changeCountry(countryId: number){
  // debugger;
  this.StateSvc.getStatesByCountryId(countryId).subscribe(
    (data) =>{ 
      console.log(data);
      this.states = data 
    },(error)=>{console.log(error);
      }
    )
}

  open(content) {
    this.district.state.country.id=0; // To select the Default one in Select Dropdown
    this.district.state.id=0; // To select the Default one in Select Dropdown 
    this.modalService.open(content);
  }
  openEditModal(content,districtOBJ) {
    this.district.id=districtOBJ.id;
    this.district.state.country.id=districtOBJ.state.country.id;
    this.district.districtCode=districtOBJ.districtCode;
    this.district.districtName=districtOBJ.districtName;
    this.modalService.open(content);
  }
}
