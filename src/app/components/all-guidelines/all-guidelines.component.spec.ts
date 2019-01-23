import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGuidelinesComponent } from './all-guidelines.component';

describe('AllGuidelinesComponent', () => {
  let component: AllGuidelinesComponent;
  let fixture: ComponentFixture<AllGuidelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGuidelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
