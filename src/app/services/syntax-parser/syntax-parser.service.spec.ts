import { TestBed, inject } from '@angular/core/testing';

import { SyntaxParserService } from './syntax-parser.service';

describe('SyntaxParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SyntaxParserService]
    });
  });

  it('should be created', inject([SyntaxParserService], (service: SyntaxParserService) => {
    expect(service).toBeTruthy();
  }));
});
