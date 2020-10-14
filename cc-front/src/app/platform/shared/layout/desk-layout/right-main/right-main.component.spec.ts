import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightMainComponent } from './right-main.component';

describe('RightMainComponent', () => {
  let component: RightMainComponent;
  let fixture: ComponentFixture<RightMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
