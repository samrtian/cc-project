import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessRowBtnComponent } from './business-row-btn.component';

describe('BusinessRowBtnComponent', () => {
  let component: BusinessRowBtnComponent;
  let fixture: ComponentFixture<BusinessRowBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessRowBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessRowBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
