import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPermissionsViewComponent } from './data-permissions-view.component';

describe('DataPermissionsViewComponent', () => {
  let component: DataPermissionsViewComponent;
  let fixture: ComponentFixture<DataPermissionsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataPermissionsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPermissionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
