import { Component } from '@angular/core';
import { sampleService } from './Service/user.service';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><br><br><h2>Service result is :{{result}}</h2>`,
  providers:[sampleService]
})
export class AppComponent  { 
  name = 'Angular';
result:string;
constructor(private _service: sampleService)
{

}
ngOnInit(){
  this.result=this._service.somemethod();
} 
}
