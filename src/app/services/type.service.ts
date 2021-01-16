import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Type } from '../classes/type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private baseUrl:string='http://localhost:9091/api/svc';
  //private headers = new Headers({'Content-Type':'application/json'});
  private options = new HttpHeaders({'Accept': 'application/json'});

  constructor(private http: HttpClient) { }

  createType(type:Type){ 
    return this.http.post(this.baseUrl+'/addType',type);
   }

  getTypes() {
	  return this.http.get<Type>(this.baseUrl+'/listTypes');
  }

  getTypeById(id:number){
    return this.http.get(this.baseUrl+'/getTypeById/'+id);
  }

  deleteTypeById(id:number){
    return this.http.delete(this.baseUrl+'/deleteType/'+id);
  }

  updateType(typeOBJ){
    return this.http.put(this.baseUrl+'/updateType/',typeOBJ);
  }

  searchType(type:Type){
    return this.http.post(this.baseUrl+'/searchType/',type);
  }

  getTypesByType(roleType:String) {
	  return this.http.get<Type>(this.baseUrl+'/listOfTypesByType/'+roleType);
  }
}
