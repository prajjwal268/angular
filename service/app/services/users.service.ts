import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getsomeusers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  getAllUsers()
  {
  return[
   {
      id:100,name:"simba",city:"bhopal",salary:1000,dob:new Date("05/10/1989")
    },
    {
      id:101,name:"simbai",city:"bhopal",salary:1000,dob:new Date("05/11/1979")
    },
    {
      id:102,name:"simba",city:"bhopal",salary:1000,dob:new Date("06/10/1989")
    }
  ];
}
}
