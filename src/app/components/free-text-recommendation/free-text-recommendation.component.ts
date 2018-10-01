import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'e1-free-text-recommendation',
  templateUrl: './free-text-recommendation.component.html',
  styleUrls: ['./free-text-recommendation.component.css']
})
export class FreeTextRecommendationComponent implements OnInit {

  @Input() freeTextRecommendation = null;

  constructor() { }

  ngOnInit() {
  }

}
