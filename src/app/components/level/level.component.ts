import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'e1-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

  private _level = null;
  private selectedSubLevel = null;
  private selectedSubLevelID :number;

  private definitionVisible :number;

  @Input() isDark :boolean = false;

  constructor() {}
  
  get level() {
    // transform value for display
    return this._level;
  }
  
  @Input()
  set level(level) {
    this._level = level;
  }

  levelSelected(levelID)
  {
    if(this.definitionVisible >= 0)
    {
      this.closeDefinition();
      return;
    }
    this.selectedSubLevel = this.level["level"][levelID];
    this.selectedSubLevelID = levelID;
  }

  ngOnInit()
  {

  }

  definitionClicked(id)
  {
    this.definitionVisible = id;
  }

  closeDefinition()
  {
    this.definitionVisible = -1;
  }

  get subLevelSelected()
  {
    return this.selectedSubLevel !== null;
  }
}
