import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecommendationListComponent } from './edit-recommendation-list.component';

describe('EditRecommendationListComponent', () => {
  let component: EditRecommendationListComponent;
  let fixture: ComponentFixture<EditRecommendationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRecommendationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecommendationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
