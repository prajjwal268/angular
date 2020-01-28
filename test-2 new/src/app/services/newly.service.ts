import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewlyService {

  constructor(private httpReq:HttpClient) { }
  getData()
  {
    return this.httpReq.get('../assets/database.json');
  }
}
