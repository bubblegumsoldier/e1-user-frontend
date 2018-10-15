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

  get svgPath() :string
  {
    if(this.levelOfEvidence !== undefined && this.levelOfEvidence.length > 0 && this.levelOfRecommendation !== undefined && this.levelOfRecommendation.length > 0)
    {
      return this.levelOfEvidence + "" + this.levelOfRecommendation;
    }
    return "unknown";
  }
}
