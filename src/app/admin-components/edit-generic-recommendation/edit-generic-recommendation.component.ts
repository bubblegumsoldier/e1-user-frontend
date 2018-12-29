import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'e1-edit-generic-recommendation',
  templateUrl: './edit-generic-recommendation.component.html',
  styleUrls: ['./edit-generic-recommendation.component.css']
})
export class EditGenericRecommendationComponent implements OnInit {

  @Input() recommendation;

  constructor() { }

  ngOnInit() {
  }

}
