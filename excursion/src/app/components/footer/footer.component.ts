import { Component, OnInit } from '@angular/core';
import {GlobalConstants} from "../../info/grobalData";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  siteName = GlobalConstants.siteName;

  constructor() { }

  ngOnInit(): void {
  }

}
