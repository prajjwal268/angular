import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .available{
    color:green;
  }
  .unavailable{
    color:red;
  }`]
})
export class AppComponent {
  isAvailable=false;
  title = 'directives';
  users:any[]=[
    {Id:100,Name:'Kanal',City:'chennai'},
    {Id:101,Name:'Dharam',City:'Mumbai'},
    {Id:102,Name:'Kanaliya',City:'Dhaka'},
  ];
  people:any[]=[
    {
      "name":"kamal",
      "age":21,
      "country":'India'
    },
    {
      "name":"Ram",
      "age":22,
      "country":'Pakistan'
    },
    {
      "name":"Lakhan",
      "age":23,
      "country":'Ganganagar'
    },
    {
      "name":"Angelina jolie",
      "age":27,
      "country":'Boston'
    },

  ];
}
