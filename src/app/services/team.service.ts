import { Injectable } from '@angular/core';
import { Team } from '../classes/team';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private baseUrl:string='http://localhost:9091/api/svc';
  //private headers = new Headers({'Content-Team':'application/json'});
  private options = new HttpHeaders({'Accept': 'application/json'});

  constructor(private http: HttpClient) { }

  createTeam(team:Team){ 
    return this.http.post(this.baseUrl+'/addTeam',team);
   }

  getTeams() {
	  return this.http.get<Team>(this.baseUrl+'/listTeams');
  }

  getTeamById(id:number){
    return this.http.get(this.baseUrl+'/getTeamById/'+id);
  }

  deleteTeamById(id:number){
    return this.http.delete(this.baseUrl+'/deleteTeam/'+id);
  }

  updateTeam(teamOBJ){
    return this.http.put(this.baseUrl+'/updateTeam/',teamOBJ);
  }

  searchTeam(team:Team){
    return this.http.post(this.baseUrl+'/searchTeam/',team);
  }
}
