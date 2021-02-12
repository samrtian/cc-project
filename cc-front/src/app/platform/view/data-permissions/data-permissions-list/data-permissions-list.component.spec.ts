import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPermissionsListComponent } from './data-permissions-list.component';

describe('DataPermissionsListComponent', () => {
  let component: DataPermissionsListComponent;
  let fixture: ComponentFixture<DataPermissionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataPermissionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPermissionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
