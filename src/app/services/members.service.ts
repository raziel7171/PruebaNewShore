import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Member} from '../models/member';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-grids';

@Injectable({
  providedIn: 'root'
})
export class MembersService extends Subject<DataStateChangeEventArgs>{

  url_characters = 'http://hp-api.herokuapp.com/api/characters/'

  houses : String[] = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw']
  member : Member[] = []
  casas: any = {}

  constructor(private http: HttpClient) {

    super();
    this.houses.forEach(element => {
      this.casas[`${element}`] = this.http.get<Member[]>(`${this.url_characters}house/${element}`)
    });
  }

  getHouses(){
    return this.casas
  }

  getMembers(house?: string){
    if(house){
      return this.casas[`${house}`]
    }else
    return this.http.get<Member[]>(this.url_characters)

  }



}
