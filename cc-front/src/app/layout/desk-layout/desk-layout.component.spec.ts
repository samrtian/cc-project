import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskLayoutComponent } from './desk-layout.component';

describe('DeskLayoutComponent', () => {
  let component: DeskLayoutComponent;
  let fixture: ComponentFixture<DeskLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeskLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
