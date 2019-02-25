import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { DiagramElement, DiagramNode } from '../../model/DiagramContent';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'e1-diagram-element-template-selector',
  templateUrl: './diagram-element-template-selector.component.html',
  styleUrls: ['./diagram-element-template-selector.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DiagramElementTemplateSelectorComponent),
    }
  ]
})
export class DiagramElementTemplateSelectorComponent implements OnInit, ControlValueAccessor {

  diagramElement :DiagramNode;

  onChangeEvent :any[] = [];
  onTouchedEvent :any[] = [];

  constructor() { }

  ngOnInit() {
  }

  writeValue(obj: DiagramNode): void {
    this.diagramElement = obj;
  }
  registerOnChange(fn: any): void {
    this.onChangeEvent.push(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouchedEvent.push(fn);
  }

  clicked(id :string)
  {
    switch(id)
    {
      case "normal":
        this.diagramElement.color = "white";
        this.diagramElement.textSize = 18;
        this.diagramElement.textStyle = "normal";
        break;
      case "warning":
        this.diagramElement.color = "red";
        this.diagramElement.textSize = 18;
        this.diagramElement.textStyle = "bold";
        break;
      case "highlight":
        this.diagramElement.color = "blue";
        this.diagramElement.textSize = 18;
        this.diagramElement.textStyle = "bold";
        break;
      case "label":
        this.diagramElement.color = "invisible";
        this.diagramElement.textSize = 14;
        this.diagramElement.textStyle = "normal";
        break;
    }
    this.onChangeEvent.forEach(e => e(this.diagramElement));
  }

}
