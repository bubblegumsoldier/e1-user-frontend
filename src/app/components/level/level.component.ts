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

  diagramLevelSelected(levelId)
  {
    console.log(this.level);
    let selectedIndex = -1;
    for(var i = 0;i < this.level.levels.length; ++i)
    {
      let cLevelId = this.level.levels[i].levelId;
      
      if(cLevelId === levelId)
      {
        selectedIndex = i;
        break;
      }
    }
    for(var i = 0;i < this.level.invisibleLevels.length; ++i)
    {
      let cLevelId = this.level.invisibleLevels[i].levelId;
      console.log("checking level id");
      console.log(cLevelId);
      console.log(levelId);
      if(cLevelId === levelId)
      {
        selectedIndex = i + this.level.levels.length;
        break;
      }
    }
    if(selectedIndex >= 0)
    {
      console.log("selected " + selectedIndex);
      this.levelSelected(null, selectedIndex);
      return;
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
      if(event)
      {
        event.stopPropagation();
      }
      return;
    }
    if(this.subLevelSelected)
    {
      return;
    }
    if(levelID >= this.level.levels.length)
    {
      this.selectedSubLevel = this.level.invisibleLevels[levelID - this.level.levels.length];
    }else
    {
      this.selectedSubLevel = this.level.levels[levelID];
    }
    this.selectedSubLevelID = levelID;
    if(event)
    {
      event.stopPropagation();
    }
  }

  ngOnInit()
  {
    console.log("LEVEL:");
    console.log(this.level)
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
    if(!this.nextLevel)
    {
      return;
    }
    this.nextLevel.resetSelections();
  }
}
