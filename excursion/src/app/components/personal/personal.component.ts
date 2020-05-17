import { Component, OnInit } from '@angular/core';
import {PersonalService} from "../../service/personal.service";

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.sass']
})
export class PersonalComponent implements OnInit {

  constructor(private personaAll: PersonalService) { }
  personal: any;

  ngOnInit(): void {
    this.personaAll.getPersonal()
      .subscribe(personal =>{
        this.personal = personal
      })  }

}
