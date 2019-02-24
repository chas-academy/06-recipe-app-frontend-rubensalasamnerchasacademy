import { TestBed } from '@angular/core/testing';

import { RecipelistService } from './recipelist.service';

describe('RecipelistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipelistService = TestBed.get(RecipelistService);
    expect(service).toBeTruthy();
  });
});
