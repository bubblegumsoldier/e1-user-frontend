import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'e1-edit-group-recommendation',
  templateUrl: './edit-group-recommendation.component.html',
  styleUrls: ['./edit-group-recommendation.component.css']
})
export class EditGroupRecommendationComponent implements OnInit {

  @Input() recommendation;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges()
  {
    if(this.recommendation.recommendations === undefined)
    {
      this.recommendation.recommendations = [];
    }
  }

}
