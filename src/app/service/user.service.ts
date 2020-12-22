import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  base_url='http://localhost:2020/'
  constructor(private http:HttpClient) { }


  add(user:Object): Observable<Object> {
    return  this.http.post(this.base_url +'add/user',user);
  }
  auth(login:Object):Observable<any> {
    return this.http.post(this.base_url+'auth',login);

  }
  getUser(id: number): Observable<any> {
    return this.http.get(`${this.base_url}user/${id}`);
  }
}
