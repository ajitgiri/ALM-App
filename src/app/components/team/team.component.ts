import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/classes/Team';
import { TeamService } from 'src/app/services/team.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styles: [
  ]
})
export class TeamComponent implements OnInit {

   teams;
   team ;
  constructor(private teamSvc:TeamService,private modalService: NgbModal) {  
    this.team  = new Team(0,'','');
   }

  ngOnInit() {
    
      this.getTeamDetails();
  }
  
  createTeam():void {
     this.teamSvc.createTeam(this.team)
         .subscribe( data => {
           console.log(data);
           this.modalService.dismissAll();
           this.getTeamDetails(); 
         });
   };

 
   getTeamDetails(){
    // debugger;
    this.teamSvc.getTeams().subscribe(
      (data) =>{ 
        console.log(data);
        this.teams = data 
      },(error)=>{console.log(error);
        }
      )
  }

  searchTeam(){
    this.teamSvc.searchTeam(this.team)
        .subscribe( data => {
          console.log(data);
         this.teams = data
  });
};

updateTeam(): void {
    console.log(this.team);
     this.teamSvc.updateTeam(this.team)
         .subscribe( data => {
           console.log(data);
           this.modalService.dismissAll();
           
           this.getTeamDetails(); 
         });
};

deleteTeam(TeamOBJ){
  this.teamSvc.deleteTeamById(TeamOBJ.id)
  .subscribe((data)=>{
    this.teams.splice(this.teams.in);
    this.getTeamDetails();
  },(error)=>{
    console.error(error)
  } );
}


  open(content) {
    this.modalService.open(content);
  }
  openEditModal(content,TeamOBJ) {
    this.team.id=TeamOBJ.id;
    this.team.teamName=TeamOBJ.teamName;
    this.team.teamDesc=TeamOBJ.teamDesc;
    this.modalService.open(content);
  }
}