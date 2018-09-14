import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTextRecommendationComponent } from './free-text-recommendation.component';

describe('FreeTextRecommendationComponent', () => {
  let component: FreeTextRecommendationComponent;
  let fixture: ComponentFixture<FreeTextRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeTextRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeTextRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
