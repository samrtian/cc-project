import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPwdEditComponent } from './user-pwd-edit.component';

describe('UserPwdEditComponent', () => {
  let component: UserPwdEditComponent;
  let fixture: ComponentFixture<UserPwdEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPwdEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPwdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
