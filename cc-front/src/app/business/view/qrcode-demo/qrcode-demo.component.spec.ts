import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodeDemoComponent } from './qrcode-demo.component';

describe('QrcodeDemoComponent', () => {
  let component: QrcodeDemoComponent;
  let fixture: ComponentFixture<QrcodeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrcodeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
