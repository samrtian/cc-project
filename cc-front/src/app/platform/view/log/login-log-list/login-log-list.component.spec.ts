import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLogListComponent } from './login-log-list.component';

describe('LoginLogListComponent', () => {
  let component: LoginLogListComponent;
  let fixture: ComponentFixture<LoginLogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginLogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
