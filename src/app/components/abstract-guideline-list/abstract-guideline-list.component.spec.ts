import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractGuidelineListComponent } from './abstract-guideline-list.component';

describe('AbstractGuidelineListComponent', () => {
  let component: AbstractGuidelineListComponent;
  let fixture: ComponentFixture<AbstractGuidelineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbstractGuidelineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractGuidelineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
