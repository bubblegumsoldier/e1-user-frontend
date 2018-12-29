import { Component, OnInit, Input } from '@angular/core';
import { Recommendation } from '../../model/Recommendation';

@Component({
  selector: 'e1-edit-recommendation-list',
  templateUrl: './edit-recommendation-list.component.html',
  styleUrls: ['./edit-recommendation-list.component.css']
})
export class EditRecommendationListComponent implements OnInit {

  @Input() recommendations :Object[] = [];

  private expanded :number[] = [];

  constructor() { }

  ngOnInit() {
  }

  addNewRecommendation()
  {

  }

  removeRecommendationWithIndex(i :number)
  {
    console.log(this.recommendations);
    this.recommendations.splice(i, 1);
    for (var x = 0; x < this.expanded.length; x++)
    {
      if(this.expanded[x] > i)
      {
        this.expanded[x] = this.expanded[x]+1;
      }
    }

    console.log(this.recommendations);
  }

  toggleRecommendationWithIndex(i :number)
  {
    if(this.expanded.includes(i))
    {
      this.expanded.splice( this.expanded.indexOf(i), 1 );
    }else
    {
      this.expanded.push(i);
    }
  }

  getReadableRecommendationTypeForRecommendation(recommendation)
  {
    if(recommendation.type === "medication")
    {
      return "Medikation";
    }else if(recommendation.type == "group")
    {
      return "Gruppe"
    }else if(recommendation.type == "syntax")
    {
      return "Syntax"
    }else if(recommendation.type == "freeText")
    {
      return "Frei-Text"
    }
  }

}
