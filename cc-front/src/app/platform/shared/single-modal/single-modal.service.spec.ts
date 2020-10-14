import { TestBed } from '@angular/core/testing';

import { SingleModalService } from './single-modal.service';

describe('SingleModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleModalService = TestBed.get(SingleModalService);
    expect(service).toBeTruthy();
  });
});
