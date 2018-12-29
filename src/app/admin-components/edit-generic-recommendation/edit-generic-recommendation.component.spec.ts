import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGenericRecommendationComponent } from './edit-generic-recommendation.component';

describe('EditGenericRecommendationComponent', () => {
  let component: EditGenericRecommendationComponent;
  let fixture: ComponentFixture<EditGenericRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGenericRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGenericRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
