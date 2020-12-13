import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembersService } from '../services/members.service'
import { Member } from '../models/member'
import { HouseDataService } from '../services/house-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  houses: {name: string, count: number }[] = [];

  constructor(public membersService: MembersService, private houseDataService: HouseDataService, private router: Router) { }

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

    
    console.log(this.houses)
  }

  getDataHouse(house2: String){
    console.log(house2)
    this.houseDataService.getHouse(house2).subscribe(data =>{
      console.log("holitas")
      console.log(data);
      
    })
  }
  moveHouse(house: string){
      console.log('/house',house);
     this.router.navigate(['/house',house]);
  }
}
