import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessUrlListComponent } from './access-url-list.component';

describe('AccessUrlListComponent', () => {
  let component: AccessUrlListComponent;
  let fixture: ComponentFixture<AccessUrlListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessUrlListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessUrlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
