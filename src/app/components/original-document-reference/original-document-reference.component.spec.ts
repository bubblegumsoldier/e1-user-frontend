import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalDocumentReferenceComponent } from './original-document-reference.component';

describe('OriginalDocumentReferenceComponent', () => {
  let component: OriginalDocumentReferenceComponent;
  let fixture: ComponentFixture<OriginalDocumentReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginalDocumentReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginalDocumentReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
