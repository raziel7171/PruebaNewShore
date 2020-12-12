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

  public execute(state: any): void{
    this.getMembers2(state).subscribe(x => super.next(x as DataStateChangeEventArgs))
  }

  getMembers2(state?:any): Observable<any[]>{
    return this.http.get<Member[]>(this.url_characters).pipe(
      map((response: any)=> (<any>{
        result: state.take > 0 ? response.slice(0, state.take) : response,
        count: response.length
      })));
  }
}
