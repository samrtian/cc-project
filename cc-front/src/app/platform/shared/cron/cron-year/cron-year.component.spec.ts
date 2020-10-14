import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CronYearComponent } from './cron-year.component';

describe('CronYearComponent', () => {
  let component: CronYearComponent;
  let fixture: ComponentFixture<CronYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CronYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CronYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
