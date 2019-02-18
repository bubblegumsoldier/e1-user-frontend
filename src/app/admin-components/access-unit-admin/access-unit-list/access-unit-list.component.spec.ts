import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessUnitListComponent } from './access-unit-list.component';

describe('AccessUnitListComponent', () => {
  let component: AccessUnitListComponent;
  let fixture: ComponentFixture<AccessUnitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessUnitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessUnitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
