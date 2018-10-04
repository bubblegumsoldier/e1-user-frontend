import { TestBed, inject } from '@angular/core/testing';

import { SearchHandlerService } from './search-handler.service';

describe('SearchHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchHandlerService]
    });
  });

  it('should be created', inject([SearchHandlerService], (service: SearchHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
