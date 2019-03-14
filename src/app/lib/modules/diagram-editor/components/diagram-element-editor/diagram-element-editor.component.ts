import { Component, OnInit, Input, forwardRef, EventEmitter, Output } from '@angular/core';
import { DiagramElement, DiagramNode, DiagramVertice } from '../../model/DiagramContent';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'e1-diagram-element-editor',
  templateUrl: './diagram-element-editor.component.html',
  styleUrls: ['./diagram-element-editor.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DiagramElementEditorComponent),
    }
  ]
})
export class DiagramElementEditorComponent implements OnInit, ControlValueAccessor {
  
  @Output()
  onDelete :EventEmitter<void> = new EventEmitter<void>();

  onChangeEvent :any[] = [];
  onTouchedEvent :any[] = [];
  
  constructor() { }

  writeValue(obj: DiagramElement): void {
    this.diagramElement = obj;
  }
  registerOnChange(fn: any): void {
    this.onChangeEvent.push(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouchedEvent.push(fn);
  }

  diagramElement :DiagramElement;

  ngOnInit() {
  }

  onChange(event)
  {
    this.onChangeEvent.forEach(e => e(this.diagramElement));
  }

  get isNode()
  {
    return this.diagramElement instanceof DiagramNode;
  }

  get isVertice()
  {
    return this.diagramElement instanceof DiagramVertice;
  }

  onDeleteRequest()
  {
    this.onDelete.emit();
  }

}
