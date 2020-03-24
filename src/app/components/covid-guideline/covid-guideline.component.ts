import { Component, OnInit } from '@angular/core';
import { Guideline } from 'src/app/model/Guideline';
import covidGuidline from './covid-guideline.json';

@Component({
  selector: 'e1-covid-guideline',
  templateUrl: './covid-guideline.component.html',
  styleUrls: ['./covid-guideline.component.css']
})
export class CovidGuidelineComponent implements OnInit {

  guideline = covidGuidline;

  constructor() { }

  ngOnInit() {
  }

}
