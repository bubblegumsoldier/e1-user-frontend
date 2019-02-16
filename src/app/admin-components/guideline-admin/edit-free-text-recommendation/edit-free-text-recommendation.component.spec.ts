import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFreeTextRecommendationComponent } from './edit-free-text-recommendation.component';

describe('EditFreeTextRecommendationComponent', () => {
  let component: EditFreeTextRecommendationComponent;
  let fixture: ComponentFixture<EditFreeTextRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFreeTextRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFreeTextRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
