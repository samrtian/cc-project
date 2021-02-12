import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessToolBtnComponent } from './business-tool-btn.component';

describe('BusinessToolBtnComponent', () => {
  let component: BusinessToolBtnComponent;
  let fixture: ComponentFixture<BusinessToolBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessToolBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessToolBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
