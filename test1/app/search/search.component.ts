import { Component, OnInit } from '@angular/core';
import {AppComponent } from '../app.component';
import {MobileService} from '../services/mobile.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private obj1:AppComponent) { }
  jsondata= this.obj1.getjsondata()
  booksdata= this.obj1.getbooksdata();

  ngOnInit() {
  }
  
}
