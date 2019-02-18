import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessUnitEditOverviewComponent } from './access-unit-edit-overview.component';

describe('AccessUnitEditOverviewComponent', () => {
  let component: AccessUnitEditOverviewComponent;
  let fixture: ComponentFixture<AccessUnitEditOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessUnitEditOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessUnitEditOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
