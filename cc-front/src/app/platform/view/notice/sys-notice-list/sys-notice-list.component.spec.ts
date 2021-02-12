import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysNoticeListComponent } from './sys-notice-list.component';

describe('SysNoticeListComponent', () => {
  let component: SysNoticeListComponent;
  let fixture: ComponentFixture<SysNoticeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysNoticeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysNoticeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
