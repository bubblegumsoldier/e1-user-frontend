import { Injectable } from '@angular/core';
import { Level } from '../../model/Level';
import { Guideline } from '../../model/Guideline';

@Injectable({
  providedIn: 'root'
})
export class GuidelineLevelIteratorService {

  constructor() { }

  findLevelByLevelId(levelId :string, guideline :Guideline) :Level
  {
    return this.findLevelInLevel(levelId, guideline);
  }

  private findLevelInLevel(levelId :string, level :any) :Level
  {
    console.log(level.levelId + " is not what was searched for (" + levelId + ")");
    if(level.levelId === levelId)
    {
      return level;
    }
    if(!level.levels || level.levels.length <= 0)
    {
      console.log(level);
      console.log("no more children");
      return null;
    }
    for(var i = 0;i < level.levels.length; ++i)
    {
      let result = this.findLevelInLevel(levelId, level.levels[i]);
      if(result) return result;
    }
    return null;
  }
}
