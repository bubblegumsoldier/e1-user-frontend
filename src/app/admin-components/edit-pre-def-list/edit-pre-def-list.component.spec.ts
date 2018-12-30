import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPreDefListComponent } from './edit-pre-def-list.component';

describe('EditPreDefListComponent', () => {
  let component: EditPreDefListComponent;
  let fixture: ComponentFixture<EditPreDefListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPreDefListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPreDefListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
