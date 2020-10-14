import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEmptyComponent } from './custom-empty.component';

describe('CustomEmptyComponent', () => {
  let component: CustomEmptyComponent;
  let fixture: ComponentFixture<CustomEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
