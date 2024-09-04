import { TestBed } from '@angular/core/testing';

import { PomarService } from './pomar.service';

describe('PomarService', () => {
  let service: PomarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PomarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
