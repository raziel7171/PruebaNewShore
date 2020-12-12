import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseDataService {
  url = 'http://hp-api.herokuapp.com/api/characters/house/';
  

  constructor(private http: HttpClient) { }

  getHouse(house: String): Observable<any>{
    return this.http.get(this.url + house);
  }
}
