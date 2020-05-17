import { Component, OnInit } from '@angular/core';
import {CityService} from "../../service/city.service";
import {ActivatedRoute} from "@angular/router";
import {ExcursionService} from "../../service/excursion.service";
import {ZakazService} from "../../service/zakaz.service";

@Component({
  selector: 'app-single-excursion',
  templateUrl: './single-excursion.component.html',
  styleUrls: ['./single-excursion.component.sass']
})
export class SingleExcursionComponent implements OnInit {

  constructor(private Ex: ExcursionService,  private activateRout: ActivatedRoute,
              private  Zakaz: ZakazService) { }

  diss = false;
  excursion: any;
  zakaz = {
    name: '',
    email: '',
    excursionId: '',
    nameExcursion: '',
    cityName: '',
    prise: '',
    seats: '',
    date: ''
  };

  to;
  startDate = new Date();

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / this.to) + 'k';
    }

    return value;
  }

  ngOnInit(): void {
    this.activateRout.params.subscribe(params => {
      console.log(params);
      this.Ex.getExcursionBeId(params.id).subscribe(ex => {
        this.excursion = ex;
      });
      this.zakaz.cityName = params._id
    });
  }

  success() {
    this.diss = true;
    this.zakaz.excursionId = this.excursion.id;
    this.zakaz.nameExcursion = this.excursion.name;
    this.zakaz.prise = this.excursion.prise;
    console.log(this.zakaz);
    this.Zakaz.doZakaz(this.zakaz).subscribe(zak => {
      console.log(zak);
    } )
  }
}
