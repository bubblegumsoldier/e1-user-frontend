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
    let recommendation = new Recommendation();
    recommendation.type = "freeText";
    this.recommendations.push(recommendation);
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

  moveDown(i)
  {
    let newIndex = i + 1;
    if(newIndex >= this.recommendations.length)
    {
      return;
    }
    this.swapPositions(i, newIndex);
  }

  moveUp(i)
  {
    let newIndex = i - 1;
    if(newIndex < 0)
    {
      return;
    }
    this.swapPositions(i, newIndex);
    console.log("swapping positions from " + i + " to " + newIndex);
  }

  swapPositions(old_index, new_index) {
      if (new_index >= this.recommendations.length) {
          var k = new_index - this.recommendations.length + 1;
          while (k--) {
            this.recommendations.push(undefined);
          }
      }
      this.recommendations.splice(new_index, 0, this.recommendations.splice(old_index, 1)[0]);
      if(this.expanded.includes(old_index) && !this.expanded.includes(new_index))
      {
        this.expanded[this.expanded.indexOf(old_index)] = new_index;
      }
      return this.recommendations; // for testing
  };

  onItemDrop(element)
  {
    console.log(element);
    this.recommendations.push(JSON.parse(JSON.stringify(element.dragData)));
  }
}
