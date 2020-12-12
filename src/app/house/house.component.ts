import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembersService } from '../services/members.service'
import { Member } from '../models/member'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataStateChangeEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-house',
  template: `<ejs-grid [dataSource]="members | async"></ejs-grid>`,
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.sass']
}) 
export class HouseComponent implements OnInit {

  public memberSer: Observable<DataStateChangeEventArgs>;
  constructor(private http: HttpClient, public membersService: MembersService, private router: Router) {

    this.memberSer = membersService;
   }


  ngOnInit() {
    const state: any = {skip: 0, take: 12};
    this.membersService.execute(state);
  }


  members: {}[] = [];

  getMembers(){
    let members = this.membersService.getMembers();
    let keys = Object.keys(members)

    keys.forEach(element => {
      members[element].subscribe(
        (res: any) => {
          let obj: any = {}
          obj['name'] = element
          
          this.members.push(obj)
        },
        (err: any) => console.log(err)
      )
    });
    console.log(this.members)
  }

}
