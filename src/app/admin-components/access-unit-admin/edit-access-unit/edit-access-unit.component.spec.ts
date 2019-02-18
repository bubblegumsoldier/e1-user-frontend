import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccessUnitComponent } from './edit-access-unit.component';

describe('EditAccessUnitComponent', () => {
  let component: EditAccessUnitComponent;
  let fixture: ComponentFixture<EditAccessUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAccessUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccessUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
