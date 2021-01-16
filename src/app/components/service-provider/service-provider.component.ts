import { Component, OnInit } from '@angular/core';
import { ServiceProvider } from 'src/app/classes/service-provider';
import { ServiceproviderService } from 'src/app/services/serviceprovider.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styles: [
  ]
})
export class ServiceProviderComponent implements OnInit {

   serviceProviders;
   serviceProvider;
  constructor(private serviceProviderSvc:ServiceproviderService,private modalService: NgbModal) {   
    this.serviceProvider  = new ServiceProvider(0,'','',new Date(),new Date());
  }

  ngOnInit() {
      this.getServiceProviderDetails();
  }
  
  createServiceProvider():void {
     this.serviceProviderSvc.createServiceProvider(this.serviceProvider)
         .subscribe( data => {
           console.log(data);
           this.modalService.dismissAll();
           this.getServiceProviderDetails(); 
         });
   };

 
   getServiceProviderDetails(){
    // debugger;
    this.serviceProviderSvc.getServiceProviders().subscribe(
      (data) =>{ 
        console.log(data);
        this.serviceProviders = data 
      },(error)=>{console.log(error);
        }
      )
  }

  searchServiceProvider(){
    this.serviceProviderSvc.searchServiceProvider(this.serviceProvider)
        .subscribe( data => {
          console.log(data);
         this.serviceProviders = data
  });
};

updateServiceProvider(): void {
    console.log(this.serviceProvider);
     this.serviceProviderSvc.updateServiceProvider(this.serviceProvider)
         .subscribe( data => {
           console.log(data);
           this.modalService.dismissAll();
           
           this.getServiceProviderDetails(); 
         });
};

deleteServiceProvider(ServiceProviderOBJ){
  this.serviceProviderSvc.deleteServiceProviderById(ServiceProviderOBJ.id)
  .subscribe((data)=>{
    this.serviceProviders.splice(this.serviceProviders.in);
    this.getServiceProviderDetails();
  },(error)=>{
    console.error(error)
  } );
}

  open(content) {
    this.modalService.open(content);
  }
  openEditModal(content,ServiceProviderOBJ) {
    this.serviceProvider.id=ServiceProviderOBJ.id;
    this.serviceProvider.providerName=ServiceProviderOBJ.providerName;
    this.serviceProvider.owner=ServiceProviderOBJ.owner;
    this.modalService.open(content);
  }
}