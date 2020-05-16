import { Component, OnInit } from '@angular/core';
import {GlobalConstants} from  '../../info/grobalData'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  constructor() { }

  siteName = GlobalConstants.siteName;

  ngOnInit(): void {
  }

}
