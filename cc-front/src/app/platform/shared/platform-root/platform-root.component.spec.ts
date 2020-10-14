import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformRootComponent } from './platform-root.component';

describe('PlatformRootComponent', () => {
  let component: PlatformRootComponent;
  let fixture: ComponentFixture<PlatformRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
