import { TestBed } from '@angular/core/testing';

import { DeptApiService } from './dept-api.service';

describe('DeptApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeptApiService = TestBed.get(DeptApiService);
    expect(service).toBeTruthy();
  });
});
