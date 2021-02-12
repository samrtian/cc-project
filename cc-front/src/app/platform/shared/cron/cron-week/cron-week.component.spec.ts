import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CronWeekComponent } from './cron-week.component';

describe('CronWeekComponent', () => {
  let component: CronWeekComponent;
  let fixture: ComponentFixture<CronWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CronWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CronWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
