import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'e1-generic-recommendation',
  templateUrl: './generic-recommendation.component.html',
  styleUrls: ['./generic-recommendation.component.css']
})
export class GenericRecommendationComponent implements OnInit {

  @Input() recommendation = null;

  @Input() subLevelSelected = false;

  @Input() backgroundGray :boolean = false;
  
  @Input() parentGuideline = null;

  RECOMMENDATION_TYPE_MEDICATION :string = "medication";
  RECOMMENDATION_TYPE_FREETEXT :string = "freeText";
  RECOMMENDATION_TYPE_GROUP :string = "group";
  RECOMMENDATION_TYPE_SYNTAX :string = "syntax";

  constructor() { }

  ngOnInit() {
  }

}
