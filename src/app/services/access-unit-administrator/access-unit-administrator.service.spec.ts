import { TestBed, inject } from '@angular/core/testing';

import { AccessUnitAdministratorService } from './access-unit-administrator.service';

describe('AccessUnitAdministratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessUnitAdministratorService]
    });
  });

  it('should be created', inject([AccessUnitAdministratorService], (service: AccessUnitAdministratorService) => {
    expect(service).toBeTruthy();
  }));
});
