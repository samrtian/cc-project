import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptUsersComponent } from './dept-users.component';

describe('DeptUsersComponent', () => {
  let component: DeptUsersComponent;
  let fixture: ComponentFixture<DeptUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
