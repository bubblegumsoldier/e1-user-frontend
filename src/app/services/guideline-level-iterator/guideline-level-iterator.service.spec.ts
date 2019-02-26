import { TestBed, inject } from '@angular/core/testing';

import { GuidelineLevelIteratorService } from './guideline-level-iterator.service';

describe('GuidelineLevelIteratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuidelineLevelIteratorService]
    });
  });

  it('should be created', inject([GuidelineLevelIteratorService], (service: GuidelineLevelIteratorService) => {
    expect(service).toBeTruthy();
  }));
});
