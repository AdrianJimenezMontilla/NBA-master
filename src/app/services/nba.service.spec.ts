import { TestBed } from '@angular/core/testing';

import { NbaService } from './nba.service';

describe('NbaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NbaService = TestBed.get(NbaService);
    expect(service).toBeTruthy();
  });
});
