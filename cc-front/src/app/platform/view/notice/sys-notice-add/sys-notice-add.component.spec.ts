import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysNoticeAddComponent } from './sys-notice-add.component';

describe('SysNoticeAddComponent', () => {
  let component: SysNoticeAddComponent;
  let fixture: ComponentFixture<SysNoticeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysNoticeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysNoticeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
