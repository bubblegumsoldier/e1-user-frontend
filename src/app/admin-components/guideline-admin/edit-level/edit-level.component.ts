import { Component, OnInit, Input } from '@angular/core';
import { Level } from '../../../model/Level';
import { DiagramContent } from '../../../lib/modules/diagram-editor/model/DiagramContent';

@Component({
  selector: 'e1-edit-level',
  templateUrl: './edit-level.component.html',
  styleUrls: ['./edit-level.component.css']
})
export class EditLevelComponent implements OnInit {

  @Input() level :Level;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges()
  {
    if(this.level.levels === undefined)
    {
      this.level.levels = [];
    }
    if(this.level.invisibleLevels === undefined)
    {
      this.level.invisibleLevels = [];
    }
    if(this.level.recommendations === undefined)
    {
      this.level.recommendations = [];
    }
  }

  onShowDiagramChange()
  {
    if(this.level.showDiagram)
    {
      this.level.diagramContent = this.level.diagramContent || new DiagramContent();
      console.log(this.level);
    }
  }

}
