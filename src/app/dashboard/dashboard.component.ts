import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembersService } from '../services/members.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  houses: {name: string, count: number }[] = [];

  constructor(public membersService: MembersService, private router: Router) { }

  ngOnInit(): void {
    this.getHouses()
  }

  getHouses() {
    let houses = this.membersService.getHouses()
    let keys = Object.keys(houses)

    keys.forEach(element => {
      houses[element].subscribe(
        (res: any) => {
          let obj: any = {}
          obj['name'] = element
          obj['count'] = res.length
          this.houses.push(obj)
        },
        (err: any) => console.log(err)
      )
    });

    console.log("hola mindo ")
    console.log(this.houses)
  }

  showHouse(house: String) {
    this.router.navigate(['/house', house])
  }
}
