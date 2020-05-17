import { Component, OnInit } from '@angular/core';
import {CityService} from "../../service/city.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.sass']
})
export class CityComponent implements OnInit {

  constructor(private City: CityService,  private activateRout: ActivatedRoute, private  route: Router) { }

  city: any;
  selected = 'option2';

  ngOnInit(): void {
    this.activateRout.params.subscribe(params => {

      this.City.getCitBeIdy(params.id).subscribe(city => {
        this.city = city;
      });

    });
  }

  routeId(id: any) {
    this.route.navigate([`tours/${this.city._id}/${id}`])
  }
}
