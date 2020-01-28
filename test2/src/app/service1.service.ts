import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{myinterface} from 'src/app/service1';
import{Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private http:HttpClient) { }
  send():Observable<myinterface[]>
  {
    return this.http.get<myinterface[]>('assets/booklist.json');
  }
}
