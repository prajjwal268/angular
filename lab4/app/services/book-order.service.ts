import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookOrderService {

  constructor(private httpl:HttpClient) { }
  getAllData()
  {
    return this.httpl.get('assets/booklist.json');
  }
}
