import { TestBed } from '@angular/core/testing';

import { StateLgaService } from './state-lga.service';

describe('StateLgaService', () => {
  let service: StateLgaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateLgaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
