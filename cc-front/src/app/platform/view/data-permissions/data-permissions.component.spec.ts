import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPermissionsComponent } from './data-permissions.component';

describe('DataPermissionsComponent', () => {
  let component: DataPermissionsComponent;
  let fixture: ComponentFixture<DataPermissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataPermissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
