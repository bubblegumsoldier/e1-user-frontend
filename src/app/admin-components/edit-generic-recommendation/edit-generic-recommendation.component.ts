import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'e1-edit-generic-recommendation',
  templateUrl: './edit-generic-recommendation.component.html',
  styleUrls: ['./edit-generic-recommendation.component.css']
})
export class EditGenericRecommendationComponent implements OnInit {

  types = ["freeText", "medication", "group", "syntax"];

  @Input() recommendation;

  constructor() { }

  ngOnInit() {
  }

  getReadableTextForType(type :string)
  {
    if(type === "medication")
    {
      return "Medikation";
    }else if(type == "group")
    {
      return "Gruppe"
    }else if(type == "syntax")
    {
      return "Syntax"
    }else if(type == "freeText")
    {
      return "Frei-Text"
    }
  }

  onTypeChange(type :string)
  {
    if(type === "group")
    {
      return;
    }
    if(this.recommendation.recommendations !== undefined && this.recommendation.recommendations.length > 0)
    {
      if (confirm('Sollen wir alle verknüpften tieferen Empfehlungen löschen, die aufgrund der ursprünglichen "Gruppen"-Konfiguration noch vorhanden waren?')) {
          this.recommendation.recommendations = [];
      } else {
          
      }
    }
  }
}
