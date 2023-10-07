import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {

   }

   getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users',{observe: 'response'})
    
    // Un Comment Below line to fetch data from local Application 
    // ****    helloworld-rest-hib-curd
    //return this.http.get('http://localhost:8090/user/getAll', {observe: 'response'})
    
  }

  getAllData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts',{observe: 'response', responseType: 'json'})
    
    // Un Comment Below line to fetch data from local Application 
    // ****    helloworld-rest-hib-curd
    //return this.http.get('http://localhost:8090/user/getAll', {observe: 'response'})
    
  }
  

}
