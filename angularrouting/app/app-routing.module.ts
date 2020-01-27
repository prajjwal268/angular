import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentDetailsComponent} from './department-details/department-details.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component'


const routes: Routes = [
  {
    path:'',redirectTo:'/departments',pathMatch:'full'} ,
    {
    path:'departments',component:DepartmentDetailsComponent} ,
    {
      path:'employees',component:EmployeeDetailsComponent} ,
      {
        path:'**',component:PagenotfoundComponent} ,
    
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DepartmentDetailsComponent,EmployeeDetailsComponent,PagenotfoundComponent]
