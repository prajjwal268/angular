import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mobiles:any[]=[
    {"mobileId":'101',"mobileName":'OnePlus 7T',"mobileCost":35000},
    {"mobileId":'102',"mobileName":'Redmi K20 Pro',"mobileCost":20000},
    {"mobileId":'103',"mobileName":'Jio Phone',"mobileCost":2000},
    {"mobileId":'104',"mobileName":'Nokia 3310',"mobileCost":1500},
    {"mobileId":'105',"mobileName":'Samsung Galaxy S10',"mobileCost":70000}
  ];
  
}
