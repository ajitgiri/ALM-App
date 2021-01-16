import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { CountryComponent } from './components/country/country.component';
import { StateComponent } from './components/state/state.component';
import { DistrictComponent } from './components/district/district.component';
import { TypeComponent } from './components/type/type.component';
import { TeamComponent } from './components/team/team.component';
import { ServiceProviderComponent } from './components/service-provider/service-provider.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LeaveComponent } from './components/leave/leave.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CountryComponent,
    StateComponent,
    DistrictComponent,
    TypeComponent,
    TeamComponent,
    ServiceProviderComponent,
    EmployeeComponent,
    LeaveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
