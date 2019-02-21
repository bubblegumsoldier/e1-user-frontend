import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiagramEditorComponent } from './components/diagram-editor/diagram-editor.component';
import { DiagramElementEditorComponent } from './components/diagram-element-editor/diagram-element-editor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DiagramEditorComponent, DiagramElementEditorComponent],
  exports: [
    DiagramEditorComponent
  ]
})
export class DiagramEditorModule { }
