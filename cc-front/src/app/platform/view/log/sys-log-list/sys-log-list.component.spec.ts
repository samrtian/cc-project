import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysLogListComponent } from './sys-log-list.component';

describe('SysLogListComponent', () => {
  let component: SysLogListComponent;
  let fixture: ComponentFixture<SysLogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysLogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysLogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
