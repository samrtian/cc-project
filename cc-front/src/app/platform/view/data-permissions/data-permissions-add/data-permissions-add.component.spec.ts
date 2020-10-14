import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPermissionsAddComponent } from './data-permissions-add.component';

describe('DataPermissionsAddComponent', () => {
  let component: DataPermissionsAddComponent;
  let fixture: ComponentFixture<DataPermissionsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataPermissionsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPermissionsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
