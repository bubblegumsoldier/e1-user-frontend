import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGroupRecommendationComponent } from './edit-group-recommendation.component';

describe('EditGroupRecommendationComponent', () => {
  let component: EditGroupRecommendationComponent;
  let fixture: ComponentFixture<EditGroupRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGroupRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGroupRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
