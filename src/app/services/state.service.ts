import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { State } from '../classes/State';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private baseUrl:string='http://localhost:9091/api/svc';
  //private headers = new Headers({'Content-Type':'application/json'});
  private options = new HttpHeaders({'Accept': 'application/json'});

  constructor(private http: HttpClient) { }

  createState(state:State){ 
    //var state2 = JSON.(state);
    return this.http.post(this.baseUrl+'/addState',state);
   }

  getStates() {
	  return this.http.get<State>(this.baseUrl+'/listStates');
  }

  getStateById(id:number){
    return this.http.get(this.baseUrl+'/getStateById/'+id);
  }

  deleteStateById(id:number){
    return this.http.delete(this.baseUrl+'/deleteState/'+id);
  }

  updateState(stateOBJ){
    return this.http.put(this.baseUrl+'/updateState/',stateOBJ);
  }

  searchState(state:State){
    return this.http.post(this.baseUrl+'/searchState/',state);
  }

  getStatesByCountryId(id:number){
    return this.http.get(this.baseUrl+'/listStatesByCountryId/'+id);
  }

}
