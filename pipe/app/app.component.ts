import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle:string = 'pipes';
  users:any[]=[{
    id:100,name:"simba",city:"bhopal",salary:1000,dob:new Date("05/10/1989")
  },
  {
    id:101,name:"simbai",city:"bhopal",salary:1000,dob:new Date("05/11/1979")
  },
  {
    id:102,name:"simba",city:"bhopal",salary:1000,dob:new Date("06/10/1989")
  },]
}
