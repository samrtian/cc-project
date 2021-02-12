import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysNoticeViewComponent } from './sys-notice-view.component';

describe('SysNoticeViewComponent', () => {
  let component: SysNoticeViewComponent;
  let fixture: ComponentFixture<SysNoticeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysNoticeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysNoticeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
