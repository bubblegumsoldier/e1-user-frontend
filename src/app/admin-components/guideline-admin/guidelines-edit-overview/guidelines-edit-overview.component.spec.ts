import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidelinesEditOverviewComponent } from './guidelines-edit-overview.component';

describe('GuidelinesEditOverviewComponent', () => {
  let component: GuidelinesEditOverviewComponent;
  let fixture: ComponentFixture<GuidelinesEditOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidelinesEditOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidelinesEditOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
