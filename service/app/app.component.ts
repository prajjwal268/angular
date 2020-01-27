import { Component,OnInit } from '@angular/core';
import {UsersService} from './services/users.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit{
  pageTitle:string = 'new';
  user:any[];
  nick:any[];
  constructor(private userService:UsersService)
  {

  }
  ngOnInit()
  {
   // this.user=this.userService.getAllUsers();
    this.userService.getsomeusers().subscribe((data)=>{this.nick=data});
  };

}
