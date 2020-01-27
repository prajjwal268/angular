import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BookOrderService} from './services/book-order.service';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 
  jsondata;
  constructor(private obj:BookOrderService)
  {

  }
  tabledata;
  ngOnInit()
  {
    this.obj.getAllData().subscribe(data=>{this.tabledata=data;this.jsondata=JSON.stringify(data);});
  }
  myFunc(name,value){
    this.tabledata=JSON.parse(this.jsondata);
    let i=0;
    while(this.tabledata[i])
    {
      if(this.tabledata[i][name].toString().indexOf(value)<0)
      {
        this.tabledata.splice(i,1);
      }
      else
      {
        i++;
      }
    }
  }

}
