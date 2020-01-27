import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id='';
  name='';
  salary='';
  dept='';
  func()
  {
    alert(this.id+" "+this.name+" "+this.salary+" "+this.dept);
  }
}
