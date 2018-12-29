import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSyntaxRecommendationComponent } from './edit-syntax-recommendation.component';

describe('EditSyntaxRecommendationComponent', () => {
  let component: EditSyntaxRecommendationComponent;
  let fixture: ComponentFixture<EditSyntaxRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSyntaxRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSyntaxRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
