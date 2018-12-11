import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'e1-loe-icon',
  templateUrl: './loe-icon.component.html',
  styleUrls: ['./loe-icon.component.css']
})
export class LoeIconComponent implements OnInit {

  @Input() levelOfEvidence :string;
  @Input() levelOfRecommendation :string;

  constructor() { }

  ngOnInit() {
  }

  get currentSystem() :string
  {
    return "Oxford 2009";
  }

  getColoredLevelOfRecommendation() :string
  {
    return this.getColoredLevelOfRecommendationForString(this.levelOfRecommendation)
  }

  getColoredLevelOfRecommendationForString(s) :string
  {
    if(s.indexOf("/") >= 0)
    {
      //e.g. A/B
      let split :string[] = s.split("/");
      let allStrings :string[] = split.map(this.getColoredLevelOfRecommendationForString);
      return allStrings.join("/");
    }
    let colorMapping = 
    {
      "A": "<span style='color: #1d7760'>A</span>",
      "B": "<span style='color: #ec811a'>B</span>",
      "0": "<span style='color: #ee5253'>0</span>"
    }
    if(s in colorMapping)
    {
      return colorMapping[s];
    }
    return s;
  }
}
