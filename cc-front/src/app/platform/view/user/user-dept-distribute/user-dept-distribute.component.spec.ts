import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeptDistributeComponent } from './user-dept-distribute.component';

describe('UserDeptDistributeComponent', () => {
  let component: UserDeptDistributeComponent;
  let fixture: ComponentFixture<UserDeptDistributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDeptDistributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeptDistributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
