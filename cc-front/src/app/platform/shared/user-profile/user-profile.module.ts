import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzToolTipModule, NzCardModule, NzIconModule } from 'ng-zorro-antd';
import { ErrorSrcModule } from '../error-src/error-src.module';
import { ImgCropperModalModule } from '../img-cropper-modal/img-cropper-modal.module';
import { UpdatePwdModule } from '../update-pwd/update-pwd.module';

import { UserProfileComponent } from './user-profile.component';

@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    NzToolTipModule,
    NzCardModule,
    NzIconModule,
    ErrorSrcModule,
    ImgCropperModalModule,
    UpdatePwdModule
  ],
  exports: [
    UserProfileComponent
  ]
})
export class UserProfileModule { }
