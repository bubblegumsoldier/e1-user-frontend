import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'e1-group-recommendation',
  templateUrl: './group-recommendation.component.html',
  styleUrls: ['./group-recommendation.component.css']
})
export class GroupRecommendationComponent implements OnInit {

  @Input() groupRecommendation = null;

  @Input() subLevelSelected = false;
  
  @Input() isRoot :boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() 
  {
    console.log(this.subLevelSelected);
    console.log(this.groupRecommendation);
  }

}
