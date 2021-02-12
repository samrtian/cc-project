import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeskLayoutComponent } from './desk-layout.component';
import { LeftToolbarComponent } from './left-toolbar/left-toolbar.component';
import { RightMainComponent } from './right-main/right-main.component';
import { NzPopoverModule} from 'ng-zorro-antd/popover';
import { NzIconModule} from 'ng-zorro-antd/icon';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import { RouterModule } from '@angular/router';
import { ScrollbarModule } from '@platform/shared/scrollbar/scrollbar.module';
import { TreeMenuModule } from '@platform/shared/tree-menu/tree-menu.module';
import { ImgCropperModalModule } from '@platform/shared/img-cropper-modal/img-cropper-modal.module';
import { UpdatePwdModule } from '@platform/shared/update-pwd/update-pwd.module';
import { WaterMarkerModule } from '@platform/shared/water-marker/water-marker.module';
import { ErrorSrcModule } from '@platform/shared/error-src/error-src.module';
import { UserApiService } from '@platform/api/user/user-api.service';
import { MenuApiService } from '@platform/api/menu/menu-api.service';
import { SysApiService } from '@platform/api/sys/sys-api.service';
import { CustomTemplateModule } from '@platform/shared/custom-template/custom-template.module';



@NgModule({
  declarations: [
    DeskLayoutComponent,
    LeftToolbarComponent,
    RightMainComponent
  ],
  imports: [
    CommonModule,
    NzIconModule,
    RouterModule,
    NzToolTipModule,
    NzDropDownModule,
    NzPopoverModule,
    ScrollbarModule,
    ImgCropperModalModule,
    CustomTemplateModule,
    UpdatePwdModule,
    TreeMenuModule,
    WaterMarkerModule,
    ErrorSrcModule,
    RouterModule
  ],
  exports: [
    DeskLayoutComponent,
    LeftToolbarComponent,
    RightMainComponent
  ],
  providers: [UserApiService, SysApiService]
})
export class DeskLayoutModule { }
