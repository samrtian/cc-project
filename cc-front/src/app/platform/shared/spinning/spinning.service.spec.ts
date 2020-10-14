import { TestBed } from '@angular/core/testing';

import { SpinningService } from './spinning.service';

describe('SpinningService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpinningService = TestBed.get(SpinningService);
    expect(service).toBeTruthy();
  });
});
