import { TestBed, inject } from '@angular/core/testing';

import { AccessUnitManagerService } from './access-unit-manager.service';

describe('AccessUnitManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessUnitManagerService]
    });
  });

  it('should be created', inject([AccessUnitManagerService], (service: AccessUnitManagerService) => {
    expect(service).toBeTruthy();
  }));
});
