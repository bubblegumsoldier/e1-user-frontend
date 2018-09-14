import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountQuickAccessComponent } from './account-quick-access.component';

describe('AccountQuickAccessComponent', () => {
  let component: AccountQuickAccessComponent;
  let fixture: ComponentFixture<AccountQuickAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountQuickAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountQuickAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
