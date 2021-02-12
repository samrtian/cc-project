import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CronMonthComponent } from './cron-month.component';

describe('CronMonthComponent', () => {
  let component: CronMonthComponent;
  let fixture: ComponentFixture<CronMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CronMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CronMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
