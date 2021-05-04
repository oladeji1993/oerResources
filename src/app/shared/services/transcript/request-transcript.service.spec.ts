import { TestBed } from '@angular/core/testing';

import { RequestTranscriptService } from './request-transcript.service';

describe('RequestTranscriptService', () => {
  let service: RequestTranscriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestTranscriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
