import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [{
  path:'',redirectTo:'/search',pathMatch:'full'},
  {
    path:'productlist',component:ProductListComponent },
    {
      path:'search',component:SearchComponent },
      {
        path:'**',component:SearchComponent },
      

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const newly=[ProductListComponent,SearchComponent];