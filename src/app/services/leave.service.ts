import { Injectable } from '@angular/core';
import { Leave } from '../classes/leave';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  private baseUrl:string='http://localhost:9091/api/svc';
  private options = new HttpHeaders({'Accept': 'application/json'});

  constructor(private http: HttpClient) { }

  createLeave(leave:Leave){ 
    return this.http.post(this.baseUrl+'/addLeave',leave);
   }

  getLeaves() {
	  return this.http.get<Leave>(this.baseUrl+'/listLeaves');
  }

  getLeaveById(id:number){
    return this.http.get(this.baseUrl+'/getLeaveById/'+id);
  }

  deleteLeaveById(id:number){
    return this.http.delete(this.baseUrl+'/deleteLeave/'+id);
  }

  updateLeave(teamOBJ){
    return this.http.put(this.baseUrl+'/updateLeave/',teamOBJ);
  }

  searchLeave(leave:Leave){
    return this.http.post(this.baseUrl+'/searchLeave/',leave);
  }
}
