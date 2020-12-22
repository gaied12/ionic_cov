import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publication } from '../model/publication';
import { Reservation } from '../reservation';

@Injectable({
  providedIn: 'root'
})
export class PubService {
  base_url='http://localhost:2020/'
  

  constructor(private http :HttpClient) { }
  add(pub:Publication):Observable<Publication> {
    return this.http.post<Publication>(this.base_url+'pub',pub);

  }
  Pub():Observable<any>{
    return this.http.get<any>(this.base_url+'pub/all');
  }
  getPub(id:number):Observable<Publication>{
    return this.http.get<Publication>(`${this.base_url}pub/${id}`);
  }
  addRes(res:Reservation):Observable<any>{
    return this.http.post(this.base_url+'add/res',res);
  }
}
