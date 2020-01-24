import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding';
  pageTitle:string="DataBinding in angular";
  imageUrl:string="assets/Image/image1.jpg";
  btnStatus:boolean=true;
  constructor()
  {

  }

  changeTitle()
  {
    this.pageTitle="DataBinding"
  }
}
