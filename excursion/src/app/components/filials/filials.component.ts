import { Component, OnInit } from '@angular/core';
import {FilialService} from "../../service/filial.service";

@Component({
  selector: 'app-filials',
  templateUrl: './filials.component.html',
  styleUrls: ['./filials.component.sass']
})
export class FilialsComponent implements OnInit {

  constructor(private Filial: FilialService) { }

  filial: any;

  ngOnInit(): void {
    this.Filial.getFilial().subscribe(filial => this.filial = filial)
  }

}
