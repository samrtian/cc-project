import { TestBed } from '@angular/core/testing';

import { DataDicApiService } from './data-dic-api.service';

describe('DataDicApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataDicApiService = TestBed.get(DataDicApiService);
    expect(service).toBeTruthy();
  });
});
