import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupRecommendationComponent } from './group-recommendation.component';

describe('GroupRecommendationComponent', () => {
  let component: GroupRecommendationComponent;
  let fixture: ComponentFixture<GroupRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
