import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'e1-medication-recommendation',
  templateUrl: './medication-recommendation.component.html',
  styleUrls: ['./medication-recommendation.component.css']
})
export class MedicationRecommendationComponent implements OnInit {

  @Input() medicationRecommendation = null;

  constructor() { }

  ngOnInit() {
  }

}
