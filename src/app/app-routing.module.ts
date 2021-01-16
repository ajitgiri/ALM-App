import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { CountryComponent } from './components/country/country.component';
import { StateComponent } from './components/state/state.component';
import { DistrictComponent } from './components/district/district.component';
import { TypeComponent } from './components/type/type.component';
import { TeamComponent } from './components/team/team.component';
import { ServiceProviderComponent } from './components/service-provider/service-provider.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { Leave } from './classes/Leave';
import { LeaveComponent } from './components/leave/leave.component';


const routes: Routes = [
  {
    path: '',  component: UserComponent
  },
  {  
    path: 'country', component: CountryComponent  
  },
  {
     path: 'state', component: StateComponent
  }, 
  {
    path: 'district', component: DistrictComponent
  },
  {
    path: 'type', component: TypeComponent
  },
  {
      path: 'team', component: TeamComponent
  },
  {
      path: 'svcProvider', component: ServiceProviderComponent
   },
   {
      path: 'employee', component: EmployeeComponent
    },
    {
      path: 'leave', component: LeaveComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
