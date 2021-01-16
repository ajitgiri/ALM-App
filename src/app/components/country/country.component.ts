import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/classes/country';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CountryService } from 'src/app/services/country.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [  ]
 // providers: [CountryService]
})
export class CountryComponent implements OnInit {
  myform: FormGroup;
  countrys;
  country;
   
   constructor(private countrySvc: CountryService,private modalService: NgbModal) { 
     this.country = new Country(0,'','');
   }
 
   ngOnInit() {
     this.myform = new FormGroup({
       countryName: new FormControl('', [ 
         Validators.required,
         Validators.minLength(8) 
             ]),
     });
        this.getCountryDetails();
   }
 
   createCountry():void {
     // console.log(this.country);
      this.countrySvc.createCountry(this.country)
          .subscribe( data => {
            console.log(data);
          // this.countrys = data
            //alert("Country created successfully.");
            this.modalService.dismissAll();
            this.getCountryDetails(); 
             
          });
    };
  
    searchCountry(){
      this.countrySvc.searchCountry(this.country)
          .subscribe( data => {
            console.log(data);
           this.countrys = data
            //alert("Country  successfully.");
            
    });
  };
  
  updateCountry(): void {
      console.log(this.country);
       this.countrySvc.updateCountry(this.country)
           .subscribe( data => {
             console.log(data);
           // this.countrys = data
             //alert("Country UPDATED successfully.");
             this.modalService.dismissAll();
             this.getCountryDetails(); 
              
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
   deleteCountry(countryObj){
     this.countrySvc.deleteCountryById(countryObj.id)
     .subscribe((data)=>{
       this.countrys.splice(this.countrys.in);
       this.getCountryDetails();
     },(error)=>{
       console.error(error)
     } );
   }
  
  
   open(content) {
     this.modalService.open(content);
   }
   openEditModal(content,countryO) {
     this.country.id=countryO.id;
     this.country.countryCode=countryO.countryCode;
     this.country.countryName=countryO.countryName;
     this.modalService.open(content);
   }
 
 } 