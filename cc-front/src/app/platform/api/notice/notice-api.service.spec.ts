import { TestBed } from '@angular/core/testing';

import { NoticeApiService } from './notice-api.service';

describe('NoticeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoticeApiService = TestBed.get(NoticeApiService);
    expect(service).toBeTruthy();
  });
});
