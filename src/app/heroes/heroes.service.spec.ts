import { TestBed } from '@angular/core/testing';

import { HeroesService } from './heroes.service';

describe('HeroService', () => {
  let service: HeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
