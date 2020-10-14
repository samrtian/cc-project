import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessUrlModalComponent } from './access-url-modal.component';

describe('AccessUrlModalComponent', () => {
  let component: AccessUrlModalComponent;
  let fixture: ComponentFixture<AccessUrlModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessUrlModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessUrlModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
