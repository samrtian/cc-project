import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterMarkerDemoComponent } from './water-marker-demo.component';

describe('WaterMarkerDemoComponent', () => {
  let component: WaterMarkerDemoComponent;
  let fixture: ComponentFixture<WaterMarkerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterMarkerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterMarkerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
