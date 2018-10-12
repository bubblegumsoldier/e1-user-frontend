import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoeIconComponent } from './loe-icon.component';

describe('LoeIconComponent', () => {
  let component: LoeIconComponent;
  let fixture: ComponentFixture<LoeIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoeIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
