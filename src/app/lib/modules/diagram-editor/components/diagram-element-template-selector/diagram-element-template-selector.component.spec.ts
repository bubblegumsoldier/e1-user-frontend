import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramElementTemplateSelectorComponent } from './diagram-element-template-selector.component';

describe('DiagramElementTemplateSelectorComponent', () => {
  let component: DiagramElementTemplateSelectorComponent;
  let fixture: ComponentFixture<DiagramElementTemplateSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagramElementTemplateSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagramElementTemplateSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
