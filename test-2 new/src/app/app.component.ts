import { Component } from '@angular/core';
import {NewlyService} from './services/newly.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private object:NewlyService){

 }
 jsonString;
 bookData;
 ngOnInit(){
   this.object.getData().subscribe(data=>{this.bookData=data;this.jsonString=JSON.stringify(data);});

 }
 deleteCol(value)
 {
   this.bookData.splice(this.bookData.findIndex(item=>item.id===value),1);
 }
 sortList(value,asc)
 {
   if(asc==true)
   {
     this.bookData.sort(function(a,b){
       if(a[value]>b[value])
       {
         return -1;
       }
       else if(a[value]<b[value]){
        return 1;
       }
       else
       {
         return 0;
       }
     })
   }
   else{
    this.bookData.sort(function(a,b){
      if(a[value]<b[value])
      {
        return -1;
      }
      else if(a[value]>b[value]){
       return 1;
      }
      else
      {
        return 0;
      }
    })
  }
 }
}
