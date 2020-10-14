import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CronDayComponent } from './cron-day.component';

describe('CronDayComponent', () => {
  let component: CronDayComponent;
  let fixture: ComponentFixture<CronDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CronDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CronDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
