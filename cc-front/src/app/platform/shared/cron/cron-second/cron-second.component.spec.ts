import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CronSecondComponent } from './cron-second.component';

describe('CronSecondComponent', () => {
  let component: CronSecondComponent;
  let fixture: ComponentFixture<CronSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CronSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CronSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
