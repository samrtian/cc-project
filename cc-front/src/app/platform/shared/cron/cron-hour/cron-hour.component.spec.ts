import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CronHourComponent } from './cron-hour.component';

describe('CronHourComponent', () => {
  let component: CronHourComponent;
  let fixture: ComponentFixture<CronHourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CronHourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CronHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
