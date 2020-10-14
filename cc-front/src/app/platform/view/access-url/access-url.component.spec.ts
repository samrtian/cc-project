import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessUrlComponent } from './access-url.component';

describe('AccessUrlComponent', () => {
  let component: AccessUrlComponent;
  let fixture: ComponentFixture<AccessUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
