import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'e1-group-recommendation',
  templateUrl: './group-recommendation.component.html',
  styleUrls: ['./group-recommendation.component.css']
})
export class GroupRecommendationComponent implements OnInit {

  @Input() groupRecommendation = null;

  @Input() subLevelSelected = false;
  
  @Input() isRoot :boolean = false;

  @Output() arrowColorChanged :EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.arrowColorChanged.emit(this.getNextArrowColor());
  }

  ngOnChanges() 
  {
    console.log(this.subLevelSelected);
    console.log(this.groupRecommendation);
    this.arrowColorChanged.emit(this.getNextArrowColor());
  }

  getNextArrowColor() :string
  {
    let counter :number = 0;
    if(!this.groupRecommendation['recommendations']) return "blue";
    console.log(this.groupRecommendation['recommendations']);
    this.groupRecommendation['recommendations'].forEach(recommendation => {
      let isShownRightNow = !(recommendation['hideOnSublevelSelect'] == true && this.subLevelSelected);
      if(isShownRightNow)
      {
        counter ++;
      }
    });
    return (counter == 0)?"blue":((counter % 2==0)?"white":"grey");
  }

}
