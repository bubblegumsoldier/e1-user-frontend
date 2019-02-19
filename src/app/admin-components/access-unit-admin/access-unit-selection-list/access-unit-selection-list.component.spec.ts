import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessUnitSelectionListComponent } from './access-unit-selection-list.component';

describe('AccessUnitSelectionListComponent', () => {
  let component: AccessUnitSelectionListComponent;
  let fixture: ComponentFixture<AccessUnitSelectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessUnitSelectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessUnitSelectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
