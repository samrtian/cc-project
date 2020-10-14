import { TestBed } from '@angular/core/testing';

import { TreeMenuService } from './tree-menu.service';

describe('TreeMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreeMenuService = TestBed.get(TreeMenuService);
    expect(service).toBeTruthy();
  });
});
