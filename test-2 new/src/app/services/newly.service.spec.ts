import { TestBed } from '@angular/core/testing';

import { NewlyService } from './newly.service';

describe('NewlyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewlyService = TestBed.get(NewlyService);
    expect(service).toBeTruthy();
  });
});
