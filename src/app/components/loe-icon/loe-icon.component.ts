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

}
