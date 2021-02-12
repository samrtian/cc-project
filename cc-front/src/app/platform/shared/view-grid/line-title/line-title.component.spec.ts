import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineTitleComponent } from './line-title.component';

describe('LineTitleComponent', () => {
  let component: LineTitleComponent;
  let fixture: ComponentFixture<LineTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
