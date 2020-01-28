import { Component } from '@angular/core';
import {MobileService} from './services/mobile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private obj1:MobileService) { }
  booksdata;
  jsonstring;
  ngOnInit(){
  this.obj1.getfunc().subscribe(data=>{this.booksdata=data;this.jsonstring=JSON.stringify(data)});
  }
  getbooksdata()
  {
    return this.booksdata;
  }
  getjsondata()
  {
    return this.jsonstring;
  }
}
