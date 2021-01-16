import { Injectable } from '@angular/core';
import { Employee } from '../classes/Employee';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl:string='http://localhost:9091/api/svc';
  private options = new HttpHeaders({'Accept': 'application/json'});

  constructor(private http: HttpClient) { }

  createEmployee(employee:Employee){ 
    return this.http.post(this.baseUrl+'/addEmployee',employee);
   }

  getEmployees() {
	  return this.http.get<Employee>(this.baseUrl+'/listEmployees');
  }

  getEmployeeById(id:number){
    return this.http.get(this.baseUrl+'/getEmployeeById/'+id);
  }

  deleteEmployeeById(id:number){
    return this.http.delete(this.baseUrl+'/deleteEmployee/'+id);
  }

  updateEmployee(teamOBJ){
    return this.http.put(this.baseUrl+'/updateEmployee/',teamOBJ);
  }

  searchEmployee(employee:Employee){
    return this.http.post(this.baseUrl+'/searchEmployee/',employee);
  }

  getManagerByEmployeeId(id:number){
    return this.http.get(this.baseUrl+'/getManagerByEmployeeId/'+id);
  }

  getBackupRecources(id:number){
    return this.http.get(this.baseUrl+'/listOtherEmployees/'+id);
  }

  getEmployeeByTeam(teamId:number){
    return this.http.get(this.baseUrl+'/listEmployeesByTeam/'+teamId);
  }
}
