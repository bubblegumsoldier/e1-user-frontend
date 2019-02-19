import { Component, OnInit, forwardRef } from '@angular/core';
import { AccessUnitManagerService } from '../../../services/access-unit-manager/access-unit-manager.service';
import { AccessUnit } from '../../../model/AccessUnit';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'e1-access-unit-selection-list',
  templateUrl: './access-unit-selection-list.component.html',
  styleUrls: ['./access-unit-selection-list.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => AccessUnitSelectionListComponent),
    }
  ]
})
export class AccessUnitSelectionListComponent implements OnInit, ControlValueAccessor {

  model :string[] = null;

  accessUnits :AccessUnit[];
  formattedAccessUnits : any[];

  customSelection :any[];

  onChangeEvent :any = null;
  onTouchedEvent :any = null;

  constructor(private accessUnitManagerService :AccessUnitManagerService) { }

  writeValue(obj: any): void {
    this.model = obj;
    console.log("model");
    console.log(this.model);
    this.modelUpdatedExternally();
  }
  registerOnChange(fn: any): void {
    this.onChangeEvent = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedEvent = fn;
  }

  ngOnInit() {
    this.formattedAccessUnits = [];
    this.accessUnitManagerService.getAllAccessUnits().toPromise().then(accessUnits => {
      this.accessUnits = accessUnits;
      this.allAccessUnitsLoaded();
    }).catch(error => {
      console.error(error);
    });
    console.log("model");
    console.log(this.model);
  }

  allAccessUnitsLoaded()
  {
    this.formattedAccessUnits = [];
    for(var i = 0;i < this.accessUnits.length; ++i)
    {
      if(!this.accessUnits[i].name)
        continue;
      this.formattedAccessUnits.push({
        value: this.accessUnits[i]._id,
        display: this.accessUnits[i].name
      });
    }
    console.log(this.formattedAccessUnits);
    this.initializeFromModel();
  }

  modelUpdatedExternally()
  {
    if(!this.accessUnits)
    {
      return;
    }
    this.initializeFromModel();
  }

  initializeFromModel()
  {
    if(!this.model)
    {
      return;
    }
    console.log("initializing model");
    console.log(this.model);
    this.customSelection = [];
    for(var i = 0;i < this.model.length; ++i)
    {
      let correspondingFormattedAccessUnit = this.formattedAccessUnits.find(unit => {
        return unit.value == this.model[i]
      });
      if(correspondingFormattedAccessUnit)
        this.customSelection.push(correspondingFormattedAccessUnit);
    }
    console.log(this.customSelection);
  }

  updateModelByCustomSelection()
  {
    this.model = this.customSelection.map(val => {return val.value});
  }

  onAdd()
  {
    this.updateModelByCustomSelection();
    this.onChangeEvent(this.model);
    console.log(this.model);
  }

  onRemove()
  {
    this.updateModelByCustomSelection();
    this.onChangeEvent(this.model);
    console.log(this.model);
  }

}
