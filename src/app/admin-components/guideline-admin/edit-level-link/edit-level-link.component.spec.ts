import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLevelLinkComponent } from './edit-level-link.component';

describe('EditLevelLinkComponent', () => {
  let component: EditLevelLinkComponent;
  let fixture: ComponentFixture<EditLevelLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLevelLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLevelLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
