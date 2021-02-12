import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule} from 'ng-zorro-antd/card';
import { NzToolTipModule} from 'ng-zorro-antd/tooltip';
import { NzIconModule} from 'ng-zorro-antd/icon';
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
