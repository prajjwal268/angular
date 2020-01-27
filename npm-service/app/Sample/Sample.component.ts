import { Component } from '@angular/core';

@Component({
  selector: 'my-comp',
  template: `<h1>My age is {{age}}</h1>`,
})
export class SampleComponent  { 
    age=20;
 }
