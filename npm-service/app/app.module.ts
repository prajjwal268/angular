import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { SampleComponent } from './Sample/Sample.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,SampleComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
