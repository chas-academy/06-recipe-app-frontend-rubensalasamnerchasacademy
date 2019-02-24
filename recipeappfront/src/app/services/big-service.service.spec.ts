import { TestBed } from '@angular/core/testing';

import { BigServiceService } from './big-service.service';

describe('BigServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BigServiceService = TestBed.get(BigServiceService);
    expect(service).toBeTruthy();
  });
});
