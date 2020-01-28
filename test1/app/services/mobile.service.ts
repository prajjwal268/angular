import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private httpl:HttpClient) { }
  getfunc()
  {
    return this.httpl.get('../assets/db.json');
  }
}
