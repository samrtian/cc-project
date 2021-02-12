import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CronBaseComponent } from './cron-base.component';

describe('CronBaseComponent', () => {
  let component: CronBaseComponent;
  let fixture: ComponentFixture<CronBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CronBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CronBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
