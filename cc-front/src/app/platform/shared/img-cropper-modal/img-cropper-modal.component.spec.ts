import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCropperModalComponent } from './img-cropper-modal.component';

describe('ImgCropperModalComponent', () => {
  let component: ImgCropperModalComponent;
  let fixture: ComponentFixture<ImgCropperModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgCropperModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgCropperModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
