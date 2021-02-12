import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessBaseBtnComponent } from './business-base-btn.component';

describe('BusinessBaseBtnComponent', () => {
  let component: BusinessBaseBtnComponent;
  let fixture: ComponentFixture<BusinessBaseBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessBaseBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessBaseBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
