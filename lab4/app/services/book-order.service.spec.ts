import { TestBed } from '@angular/core/testing';

import { BookOrderService } from './book-order.service';

describe('BookOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookOrderService = TestBed.get(BookOrderService);
    expect(service).toBeTruthy();
  });
});
