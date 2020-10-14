import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorSrcDemoComponent } from './error-src-demo.component';

describe('ErrorSrcDemoComponent', () => {
  let component: ErrorSrcDemoComponent;
  let fixture: ComponentFixture<ErrorSrcDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorSrcDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorSrcDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
