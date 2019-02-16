import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedicationRecommendationComponent } from './edit-medication-recommendation.component';

describe('EditMedicationRecommendationComponent', () => {
  let component: EditMedicationRecommendationComponent;
  let fixture: ComponentFixture<EditMedicationRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMedicationRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMedicationRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
