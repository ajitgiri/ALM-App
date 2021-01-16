import { Injectable } from '@angular/core';
import { ServiceProvider } from '../classes/service-provider';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceproviderService {

  private baseUrl:string='http://localhost:9091/api/svc';
  private options = new HttpHeaders({'Accept': 'application/json'});

  constructor(private http: HttpClient) { }

  createServiceProvider(serviceProvider:ServiceProvider){ 
    return this.http.post(this.baseUrl+'/addSvcProvider',serviceProvider);
   }

  getServiceProviders() {
	  return this.http.get<ServiceProvider>(this.baseUrl+'/listSvcProviders');
  }

  getServiceProviderById(id:number){
    return this.http.get(this.baseUrl+'/getSvcProviderById/'+id);
  }

  deleteServiceProviderById(id:number){
    return this.http.delete(this.baseUrl+'/deleteSvcProvider/'+id);
  }

  updateServiceProvider(serviceProviderOBJ){
    return this.http.put(this.baseUrl+'/updateSvcProvider/',serviceProviderOBJ);
  }

  searchServiceProvider(serviceProvider:ServiceProvider){
    return this.http.post(this.baseUrl+'/searchServiceProvider/',serviceProvider);
  }
}
