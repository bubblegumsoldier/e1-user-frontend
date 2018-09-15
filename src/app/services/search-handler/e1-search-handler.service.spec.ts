import { TestBed, inject } from '@angular/core/testing';

import { SearchHandler } from './e1-searchhandler.service';

describe('SearchHandler', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchHandler]
    });
  });

  it('should be created', inject([SearchHandler], (service: SearchHandler) => {
    expect(service).toBeTruthy();
  }));
});
