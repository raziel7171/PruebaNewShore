import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MembersService } from '../services/members.service'
import { Member } from '../models/member'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HouseDataService } from '../services/house-data.service';


@Component({
  selector: 'app-house',
  template: `
  <div>
    <ngx-datatable [rows]="rows" [columns]="columns"> </ngx-datatable>
  </div>
`,
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.sass']
})
export class HouseComponent implements OnInit {


  // columns = [{ prop: 'name' }, { name: 'name' }, { name: 'species' }, { name: 'gender'}];

  membersData: {}[] = [];
  constructor(private http: HttpClient, public membersService: MembersService, private router: Router, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      this.membersService.getMembers(params['house']).subscribe(
        (res: Member[]) => {
          this.membersService.member = res
          this.membersService.member.map((member: Member) => {
            let nameLastName = member.name.split(" ");
            member.name = nameLastName[0];
            member.lastName = nameLastName[1];
          })
        }
      )
    })
  }

  ngOnInit() {

  }


  orderByName(): void {
    this.membersService.member.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    
  }

  orderByLastName(): void {
    this.membersService.member.sort((a, b) => {
      if (a.lastName > b.lastName) {
        return 1;
      }
      if (a.lastName < b.lastName) {
        return -1;
      }
      return 0;
    });
    
  }
  

  getDataHouse(house2: string) {
    console.log(house2)
    this.membersService.getMembers(house2).subscribe((data: any) => {

      console.log(data);
    })
  }

  

}
