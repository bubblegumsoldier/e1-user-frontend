import { TestBed, inject } from '@angular/core/testing';

import { E1SearchhandlerService } from './e1-searchhandler.service';

describe('E1SearchhandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [E1SearchhandlerService]
    });
  });

  it('should be created', inject([E1SearchhandlerService], (service: E1SearchhandlerService) => {
    expect(service).toBeTruthy();
  }));
});
