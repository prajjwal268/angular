import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicPhoneComponent } from './basic-phone/basic-phone.component';
import { SmartPhoneComponent } from './smart-phone/smart-phone.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicPhoneComponent,
    SmartPhoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
