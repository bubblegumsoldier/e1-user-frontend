import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntaxRecommendationComponent } from './syntax-recommendation.component';

describe('SyntaxRecommendationComponent', () => {
  let component: SyntaxRecommendationComponent;
  let fixture: ComponentFixture<SyntaxRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyntaxRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyntaxRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
