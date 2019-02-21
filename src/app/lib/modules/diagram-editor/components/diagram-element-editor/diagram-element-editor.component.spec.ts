import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramElementEditorComponent } from './diagram-element-editor.component';

describe('DiagramElementEditorComponent', () => {
  let component: DiagramElementEditorComponent;
  let fixture: ComponentFixture<DiagramElementEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagramElementEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagramElementEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
