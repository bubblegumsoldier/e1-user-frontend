import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiagramEditorComponent } from './components/diagram-editor/diagram-editor.component';
import { DiagramElementEditorComponent } from './components/diagram-element-editor/diagram-element-editor.component';
import { FormsModule } from '@angular/forms';
import { DiagramElementTemplateSelectorComponent } from './components/diagram-element-template-selector/diagram-element-template-selector.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [DiagramEditorComponent, DiagramElementEditorComponent, DiagramElementTemplateSelectorComponent],
  exports: [
    DiagramEditorComponent
  ]
})
export class DiagramEditorModule { }
