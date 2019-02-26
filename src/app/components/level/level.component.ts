import { Component, OnInit , Input, ViewChild} from '@angular/core';
import { GuidelineLevelIteratorService } from '../../services/guideline-level-iterator/guideline-level-iterator.service';
import { Level } from '../../model/Level';

@Component({
  selector: 'e1-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

  private _level = null;
  public selectedSubLevel = null;
  public selectedSubLevelID :number;

  private definitionVisible :number;

  @Input() isDark :boolean = false;

  arrowColor :string = "";

  @Input() parentGuideline = null;

  @ViewChild('nextlevel') nextLevel;

  private _linkedLevel :Level;

  constructor(private guidelineLevelIterator :GuidelineLevelIteratorService) {
    
  }

  isNormalLevel()
  {
    return !this._level.useLink;
  }
  
  resetSelections()
  {
    this.selectedSubLevel = null;
    this.selectedSubLevelID = -1;
  }

  get level() {
    if(this.isNormalLevel())
    {
      return this._level;
    }
    else if(this._linkedLevel)
    {
      return this._linkedLevel
    }else
    {
      this._linkedLevel = this.guidelineLevelIterator.findLevelByLevelId(this._level.linkedLevelId, this.parentGuideline);
      if(!this._linkedLevel)
      {
        this._linkedLevel = new Level();
      }
      return this._linkedLevel;
    }
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
    console.log("parentGuideline:");
    console.log(this.parentGuideline);
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
