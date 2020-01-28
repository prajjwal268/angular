import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators} from '@angular/forms';
import { product } from './product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ugabugbuga;
  category: string[] = [
    'Electronics',
    'Grocery',
    'Mobile',
    'Cloth'
  ];
  checkedList = [false, false, false, false];
  
  online:any[]=['Yes','No'];
  products:any[]=[
    { id:1,
      value:'BigBazar'
    },
    { id:2,
      value:'D-Mart'
    },
    { id:3,
      value:'Alliance'
    },
    { id:4,
      value:'Mega Store'
    }];
   userform: FormGroup; 
   pdt = new product();
   selected = [];
  
  constructor(){}
  ngOnInit(){
  }
  validate(userforms){
      console.log("Form Submitted!");

      this.pdt.store = this.checkedList;



      console.log(userforms.value);

      //console.log((this.pdt));
      console.log(this.checkedList);
  }
  onCheckboxChange(option, event) {
    if(event.target.checked) {
      this.checkedList.splice(option.id-1, 1, true);
    } else {
    for(var i=0 ; i < this.products.length; i++) {
      if(this.checkedList[i] == option.id) {
        this.checkedList.splice(i,1,false);
     }
   }
 }
}
}
