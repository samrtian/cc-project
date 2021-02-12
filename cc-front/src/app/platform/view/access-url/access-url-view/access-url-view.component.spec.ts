import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessUrlViewComponent } from './access-url-view.component';

describe('AccessUrlViewComponent', () => {
  let component: AccessUrlViewComponent;
  let fixture: ComponentFixture<AccessUrlViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessUrlViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessUrlViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
