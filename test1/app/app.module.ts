import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {newly} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { PipersPipe } from './pipes/pipers.pipe';

@NgModule({
  declarations: [
    AppComponent,
    newly,
    PipersPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
