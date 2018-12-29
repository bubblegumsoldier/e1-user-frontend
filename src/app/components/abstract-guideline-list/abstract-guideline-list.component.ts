import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Guideline } from '../../model/Guideline';

@Component({
  selector: 'e1-abstract-guideline-list',
  templateUrl: './abstract-guideline-list.component.html',
  styleUrls: ['./abstract-guideline-list.component.css']
})
export class AbstractGuidelineListComponent implements OnInit {

  @Input() guidelines;
  @Output() onGuidelineSelected :EventEmitter<Guideline> = new EventEmitter<Guideline>();

  constructor() { }

  ngOnInit() {
  }

  guidelineWasSelected(guideline : Guideline)
  {
    this.onGuidelineSelected.emit(guideline);
  }

}
