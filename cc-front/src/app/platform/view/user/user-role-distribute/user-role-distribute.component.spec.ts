import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoleDistributeComponent } from './user-role-distribute.component';

describe('UserRoleDistributeComponent', () => {
  let component: UserRoleDistributeComponent;
  let fixture: ComponentFixture<UserRoleDistributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRoleDistributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRoleDistributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
