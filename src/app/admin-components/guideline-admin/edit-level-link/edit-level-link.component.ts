import { Component, OnInit, Input } from '@angular/core';
import { Level } from '../../../model/Level';

@Component({
  selector: 'e1-edit-level-link',
  templateUrl: './edit-level-link.component.html',
  styleUrls: ['./edit-level-link.component.css']
})
export class EditLevelLinkComponent implements OnInit {

  @Input() level :Level;

  constructor() { }

  ngOnInit() {
  }

}
