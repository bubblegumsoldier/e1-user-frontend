import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'e1-group-recommendation',
  templateUrl: './group-recommendation.component.html',
  styleUrls: ['./group-recommendation.component.css']
})
export class GroupRecommendationComponent implements OnInit {

  @Input() groupRecommendation = null;

  recommendationsToShow: any[] = [];

  @Input() subLevelSelected = false;

  @Input() isRoot: boolean = false;

  @Output() arrowColorChanged: EventEmitter < string > = new EventEmitter < string > ();

  @Input() parentGuideline = null;

  alternativesShown: boolean = false;

  _isExpanded :boolean = false;

  constructor() {}

  ngOnInit() {
    this.arrowColorChanged.emit(this.getNextArrowColor());
    this.updateRecommendationsToShow();
    console.log("parentGuideline 2:");
    console.log(this.parentGuideline);
  }

  updateRecommendationsToShow() {
    if (!this.groupRecommendation['recommendations']) {
      this.recommendationsToShow = [];
      return;
    }

    this.recommendationsToShow = [];
    this.groupRecommendation['recommendations'].forEach(recommendation => {
      if(this.recommendationIsCurrentlyShown(recommendation)) this.recommendationsToShow.push(recommendation);
    });

    
    this.recommendationsToShow.sort(this.sortPrimaryRecommendationsFirst);
  }

  sortPrimaryRecommendationsFirst(a, b) :number {
    if (a["primaryRecommendation"] == b["primaryRecommendation"]) {
      return 0;
    } else if (a["primaryRecommendation"]) {
      return -1;
    } else {
      return 1;
    }
  }

  recommendationIsCurrentlyShown(recommendation) :boolean {
    if(recommendation['hideOnSublevelSelect'] == true && this.subLevelSelected)
    {
      return false;
    }
    // if (!this.isRoot)
    // {
    //   return true;
    // }
    if (this.alternativesShown) {
      return true;
    } else if (recommendation["primaryRecommendation"] == true) {
      return true;
    }
    return false;
  }

  ngOnChanges() {
    this.arrowColorChanged.emit(this.getNextArrowColor());
    this.updateRecommendationsToShow();
  }

  getNextArrowColor(): string {
    let counter: number = 0;
    if (!this.recommendationsToShow) return "blue";
    this.recommendationsToShow.forEach(recommendation => {
      let isShownRightNow = !(recommendation['hideOnSublevelSelect'] == true && this.subLevelSelected);
      if (isShownRightNow) {
        counter++;
      }
    });
    return (counter == 0) ? "blue" : ((counter % 2 == 0) ? "white" : "grey");
  }

  onShowAlternatives() {
    this.alternativesShown = true;
    this.updateRecommendationsToShow();
  }

  get hasAlternatives() {
    if (!this.groupRecommendation['recommendations']) return false;

    let hasAlternatives = false;
    this.groupRecommendation['recommendations'].forEach(recommendation => {
      if(recommendation["primaryRecommendation"] == false) hasAlternatives = true;
    });

    return hasAlternatives;
  }

  isExpandable()
  {
    if(this.groupRecommendation.expandable && this.groupRecommendation.expandable == true)
    {
      return true;
    }
    return false;
  }

  toggleExpand()
  {
    this._isExpanded = !this._isExpanded;
  }

  isExpanded()
  {
    if(this.groupRecommendation.expandable)
    {
      return this._isExpanded;
    }else
    {
      return true;
    }
  }

}
