import { TestBed } from '@angular/core/testing';

import { ColheitaService } from './colheita.service';

describe('ColheitaService', () => {
  let service: ColheitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColheitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
