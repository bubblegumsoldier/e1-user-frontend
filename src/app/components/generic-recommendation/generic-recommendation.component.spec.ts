import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericRecommendationComponent } from './generic-recommendation.component';

describe('GenericRecommendationComponent', () => {
  let component: GenericRecommendationComponent;
  let fixture: ComponentFixture<GenericRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
