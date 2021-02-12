import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptViewComponent } from './dept-view.component';

describe('DeptViewComponent', () => {
  let component: DeptViewComponent;
  let fixture: ComponentFixture<DeptViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
