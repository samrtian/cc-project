import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessUrlAddComponent } from './access-url-add.component';

describe('AccessUrlAddComponent', () => {
  let component: AccessUrlAddComponent;
  let fixture: ComponentFixture<AccessUrlAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessUrlAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessUrlAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
