import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidGuidelineComponent } from './covid-guideline.component';

describe('CovidGuidelineComponent', () => {
  let component: CovidGuidelineComponent;
  let fixture: ComponentFixture<CovidGuidelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidGuidelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidGuidelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
