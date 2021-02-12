import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessRowDropdownBtnComponent } from './business-row-dropdown-btn.component';

describe('BusinessRowDropdownBtnComponent', () => {
  let component: BusinessRowDropdownBtnComponent;
  let fixture: ComponentFixture<BusinessRowDropdownBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessRowDropdownBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessRowDropdownBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
