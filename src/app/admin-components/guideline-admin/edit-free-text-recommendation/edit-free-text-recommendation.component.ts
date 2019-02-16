import { Component, OnInit, Input } from '@angular/core';
import { FreeTextRecommendation } from '../../../model/FreeTextRecommendation';

@Component({
  selector: 'e1-edit-free-text-recommendation',
  templateUrl: './edit-free-text-recommendation.component.html',
  styleUrls: ['./edit-free-text-recommendation.component.css']
})
export class EditFreeTextRecommendationComponent implements OnInit {

  @Input() recommendation;

  constructor() { }

  ngOnInit() {
  }

}
