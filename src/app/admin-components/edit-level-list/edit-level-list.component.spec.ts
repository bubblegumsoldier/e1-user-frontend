import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLevelListComponent } from './edit-level-list.component';

describe('EditLevelListComponent', () => {
  let component: EditLevelListComponent;
  let fixture: ComponentFixture<EditLevelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLevelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLevelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
