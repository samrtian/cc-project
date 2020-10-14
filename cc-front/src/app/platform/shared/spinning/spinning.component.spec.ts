import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinningComponent } from './spinning.component';

describe('SpinningComponent', () => {
  let component: SpinningComponent;
  let fixture: ComponentFixture<SpinningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
