import { Component, OnInit } from '@angular/core';
import {CityService} from "../../service/city.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.sass']
})
export class ToursComponent implements OnInit {

  constructor(private City: CityService,private  route: Router) { }

  city: any;
  citys= ['Усі'];
  selected2 = 'option0';
  selected = 'option0';
  i = -1;
  twoI = 0;



  types = ['Усі','Одноденна','Для жителів інших міст','Тематична', 'Сімейний відпочинок', 'Оглядові', 'Багатоденна',
  'Екстримальна', 'Теплохід' ]
  get by()   {
     return this.i
  }

  get type()   {
    return this.types[this.twoI];
  }

  ngOnInit(): void {
    this.City.getCity()
      .subscribe(city => {
        this.city = city
      })

  }

  routeCity(id: any) {

    this.route.navigate([`tours/${+id}`])
  }

  getCitiId(i: number) {
    if(i=== -1) console.log('Усі');
    else console.log(this.city[i].name);
    this.i = i;
    console.log(i);
  }

  getCitiIdTwo(to: number) {
    this.twoI = to;
    console.log(this.types[this.twoI]);

  }
}
