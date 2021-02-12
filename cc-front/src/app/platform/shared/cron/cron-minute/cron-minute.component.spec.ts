import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CronMinuteComponent } from './cron-minute.component';

describe('CronMinuteComponent', () => {
  let component: CronMinuteComponent;
  let fixture: ComponentFixture<CronMinuteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CronMinuteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CronMinuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
