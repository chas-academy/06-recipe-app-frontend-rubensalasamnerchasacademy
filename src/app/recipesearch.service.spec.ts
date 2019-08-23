import { TestBed } from '@angular/core/testing';

import { RecipesearchService } from './recipesearch.service';

describe('RecipesearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipesearchService = TestBed.get(RecipesearchService);
    expect(service).toBeTruthy();
  });
});
