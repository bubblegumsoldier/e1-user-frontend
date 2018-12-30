import { Component, OnInit, Input } from '@angular/core';
import { SyntaxRecommendation } from '../../model/SyntaxRecommendation';

@Component({
  selector: 'e1-edit-syntax-recommendation',
  templateUrl: './edit-syntax-recommendation.component.html',
  styleUrls: ['./edit-syntax-recommendation.component.css']
})
export class EditSyntaxRecommendationComponent implements OnInit {

  @Input() recommendation;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges()
  {
    if(this.recommendation.preDefs === undefined)
    {
      this.recommendation.preDefs = [];
    }
  }

}
