import { Component, OnInit, Input } from '@angular/core';
import { MedicationRecommendation } from '../../model/MedicationRecommendation';

@Component({
  selector: 'e1-edit-pre-def-list',
  templateUrl: './edit-pre-def-list.component.html',
  styleUrls: ['./edit-pre-def-list.component.css']
})
export class EditPreDefListComponent implements OnInit {

  @Input() preDefs :Object[] = [];

  private expanded :number[] = [];

  constructor() { }

  ngOnInit() {
  }

  addNewRecommendation()
  {
    let recommendation = new MedicationRecommendation();
    recommendation.type = "freeText";
    this.preDefs.push(recommendation);
  }

  removeRecommendationWithIndex(i :number)
  {
    console.log(this.preDefs);
    this.preDefs.splice(i, 1);
    for (var x = 0; x < this.expanded.length; x++)
    {
      if(this.expanded[x] > i)
      {
        this.expanded[x] = this.expanded[x]+1;
      }
    }

    console.log(this.preDefs);
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

}
