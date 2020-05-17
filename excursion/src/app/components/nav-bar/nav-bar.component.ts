import { Component, OnInit } from '@angular/core';
import {CityService} from "../../service/city.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  constructor(private City: CityService, private activateRout: ActivatedRoute, private  route: Router) { }

  city: any;

  ngOnInit(): void {
    this.City.getCity().subscribe(city => this.city = city)
  }

  routeId(id: any) {
    this.route.navigate([`tours/${id}`])
  }
}
