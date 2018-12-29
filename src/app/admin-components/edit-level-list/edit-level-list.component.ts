import { Component, OnInit, Input } from '@angular/core';
import { Level } from '../../model/Level';

@Component({
  selector: 'e1-edit-level-list',
  templateUrl: './edit-level-list.component.html',
  styleUrls: ['./edit-level-list.component.css']
})
export class EditLevelListComponent implements OnInit {

  @Input() levels :Level[] = [];

  private expanded :number[] = [];

  constructor() { }

  ngOnInit() {
  }

  addNewEmptyLevel()
  {
    let level = new Level();
    if(this.levels === undefined)
    {
      this.levels = [];
    }
    this.levels.push(level);
    this.expanded.push(this.levels.length-1);
  }

  removeLevelWithIndex(i :number)
  {
    console.log(this.levels);
    this.levels.splice(i, 1);
    for (var x = 0; x < this.expanded.length; x++)
    {
      if(this.expanded[x] > i)
      {
        this.expanded[x] = this.expanded[x]+1;
      }
    }

    console.log(this.levels);
  }

  toggleLevelWithIndex(i :number)
  {
    if(this.expanded.includes(i))
    {
      this.expanded.splice( this.expanded.indexOf(i), 1 );
    }else
    {
      this.expanded.push(i);
    }
  }

}
