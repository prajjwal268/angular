import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  emailid;
  formdata;
  constructor()
  {

  }
  ngOnInit(){
    this.formdata=new FormGroup({
      emailId:new FormControl("new@gmail.com"),
      passWd:new FormControl("123")
    });
  }
  onClickSubmit1(data)
  {
   this.emailid=data.emailId;
    
  }
  onClickSubmit(data)
  {
    alert("entered email id is "+data.emailid);
    alert("entered password is "+data.password);
    
  }
}
