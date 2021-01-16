import { Injectable } from '@angular/core';
import { District } from '../classes/district';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  private baseUrl:string='http://localhost:9091/api/svc';
  //private headers = new Headers({'Content-Type':'application/json'});
  private options = new HttpHeaders({'Accept': 'application/json'});

  constructor(private http: HttpClient) { }

  createDistrict(district:District){ 
    return this.http.post(this.baseUrl+'/addDistrict',district);
   }

  getDistricts() {
	  return this.http.get<District>(this.baseUrl+'/listDistricts');
  }

  getDistrictById(id:number){
    return this.http.get(this.baseUrl+'/getDistrictById/'+id);
  }

  deleteDistrictById(id:number){
    return this.http.delete(this.baseUrl+'/deleteDistrict/'+id);
  }

  updateDistrict(districtOBJ){
    return this.http.put(this.baseUrl+'/updateDistrict/',districtOBJ);
  }

  searchDistrict(district:District){
    return this.http.post(this.baseUrl+'/searchDistrict/',district);
  }
}