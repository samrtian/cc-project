import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolePermissionDistributeComponent } from './role-permission-distribute.component';

describe('RolePermissionDistributeComponent', () => {
  let component: RolePermissionDistributeComponent;
  let fixture: ComponentFixture<RolePermissionDistributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolePermissionDistributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolePermissionDistributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
