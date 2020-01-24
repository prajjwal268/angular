import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><br><br><my-comp></my-comp>Amol`,
})
export class AppComponent  { name = 'Angular'; }
