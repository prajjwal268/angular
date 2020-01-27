import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-basic-phone',
  templateUrl: './basic-phone.component.html',
  styleUrls: ['./basic-phone.component.css']
})
export class BasicPhoneComponent implements OnInit {
   mobileType:string="Basic Phone";
  constructor() { }

  ngOnInit() {
  }

}
