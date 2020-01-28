import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private object:AppComponent) { }

  ngOnInit() {
  }
  booksdata=this.object.getbooksdata();
  jsonstring=this.object.getjsondata();
  deletedata(value)
  {
    this.booksdata.splice(this.booksdata.findIndex(item=>item.id===value),1);

  }
}
