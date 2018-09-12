import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationRecommendationComponent } from './medication-recommendation.component';

describe('MedicationRecommendationComponent', () => {
  let component: MedicationRecommendationComponent;
  let fixture: ComponentFixture<MedicationRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
