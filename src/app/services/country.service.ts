import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Country } from '../classes/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private baseUrl:string='http://localhost:9091/api/svc';
  //private headers = new Headers({'Content-Type':'application/json'});
  private options = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  createCountry(country:Country){ 
    return this.http.post(this.baseUrl+'/addCountry',country);
   }

  getCountrys() {
	  return this.http.get(this.baseUrl+'/listCountrys');
  }

  getCountryById(id:number){
    return this.http.get(this.baseUrl+'/getCountryById/'+id);
  }

  deleteCountryById(id:number){
    return this.http.delete(this.baseUrl+'/deleteCountry/'+id);
  }

  updateCountry(countryOBJ){
    return this.http.put(this.baseUrl+'/updateCountry/',countryOBJ);
  }

  searchCountry(country:Country){
    return this.http.post(this.baseUrl+'/searchCountry/',country);
  }
}