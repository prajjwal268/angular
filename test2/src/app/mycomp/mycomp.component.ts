import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent implements OnInit {
 public list=[];
  constructor(private _var1:Service1Service) { }

  ngOnInit() {
    this._var1.send()
    .subscribe(data=>this.list=data);
  }
  sort(x)
  {
    this.list.sort(function(a,b)
  {
    if(a[x]<b[x])
    return -1;
    else if(a[x]>b[x])
    return 1;
    else
    return 0;
  });
  }
  delete(x)
  {
    this.list.splice(x,1)
  }

}
