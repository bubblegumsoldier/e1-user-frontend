import { Component, OnInit , Input, ViewChild} from '@angular/core';

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

  arrowColor :string = "";

  @ViewChild('nextlevel') nextLevel;

  constructor() {
    
  }
  
  resetSelections()
  {
    this.selectedSubLevel = null;
    this.selectedSubLevelID = -1;
  }

  get level() {
    // transform value for display
    return this._level;
  }
  
  @Input()
  set level(level) {
    this._level = level;
  }

  levelSelected(event, levelID)
  {
    console.log(this);
    console.log(this.definitionVisible);
    
    if(this.definitionVisible >= 0)
    {
      console.log("closing definition");
      this.closeDefinition();
      event.stopPropagation();
      return;
    }
    if(this.subLevelSelected)
    {
      return;
    }
    this.selectedSubLevel = this.level.levels[levelID];
    this.selectedSubLevelID = levelID;
    event.stopPropagation();
  }

  ngOnInit()
  {
    console.log(this.level);
  }

  definitionClicked(event, id)
  {
    this.definitionVisible = id;
    console.log(this.definitionVisible);
    event.stopPropagation();
  }

  closeDefinition(event = null)
  {
    if(event)
    {
      event.stopPropagation();
    }
    this.definitionVisible = -1;
  }

  get subLevelSelected()
  {
    return this.selectedSubLevel !== null;
  }

  arrowColorChanged(changedToColor)
  {
    this.arrowColor = changedToColor;
  }

  selectedUl()
  {
    console.log("Selected UL");
    this.nextLevel.resetSelections();
  }
}
