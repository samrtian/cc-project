import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ImageCropperModule } from 'ngx-img-cropper';
import { ErrorSrcModule } from '../error-src/error-src.module';

import { ImgCropperModalComponent } from './img-cropper-modal.component';
import { ImgCropperSelectDirective } from './img-cropper-select.directive';

@NgModule({
  declarations: [
    ImgCropperModalComponent,
    ImgCropperSelectDirective
  ],
  imports: [
    CommonModule,
    NzModalModule,
    NzIconModule,
    NzButtonModule,
    ImageCropperModule,
    ErrorSrcModule
  ],
  exports: [
    ImgCropperSelectDirective,
    ImgCropperModalComponent
  ],
  entryComponents: [
    ImgCropperModalComponent
  ]
})
export class ImgCropperModalModule { }
