import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CronDemoComponent } from './cron-demo.component';

describe('CronDemoComponent', () => {
  let component: CronDemoComponent;
  let fixture: ComponentFixture<CronDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CronDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CronDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
