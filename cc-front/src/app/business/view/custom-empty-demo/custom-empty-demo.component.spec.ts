import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEmptyDemoComponent } from './custom-empty-demo.component';

describe('CustomEmptyDemoComponent', () => {
  let component: CustomEmptyDemoComponent;
  let fixture: ComponentFixture<CustomEmptyDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomEmptyDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomEmptyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
