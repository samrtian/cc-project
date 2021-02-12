import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import { NzIconModule} from 'ng-zorro-antd/icon';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';

import { WaterMarkerModule } from '../../water-marker/water-marker.module';
import { ScrollbarModule } from '../../scrollbar/scrollbar.module';
import { TreeMenuModule } from '../../tree-menu/tree-menu.module';
import { CustomTemplateModule } from '../../custom-template/custom-template.module';
import { UpdatePwdModule } from '../../update-pwd/update-pwd.module';
import { UserProfileModule } from '../../user-profile/user-profile.module';
import { ErrorSrcModule } from '../../error-src/error-src.module';
import { ImgCropperModalModule } from '../../img-cropper-modal/img-cropper-modal.module';

import { BasicLayoutComponent } from './basic-layout.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { SiderComponent } from './sider/sider.component';
import { MainComponent } from './main/main.component';
import { SysApiService } from '@platform/api/sys/sys-api.service';



@NgModule({
  declarations: [
    BasicLayoutComponent,
    HeaderComponent,
    ContentComponent,
    SiderComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzIconModule,
    NzToolTipModule,
    NzDropDownModule,
    RouterModule,
    ScrollbarModule,
    TreeMenuModule,
    CustomTemplateModule,
    ImgCropperModalModule,
    UpdatePwdModule,
    UserProfileModule,
    WaterMarkerModule,
    ErrorSrcModule
  ],
  exports: [
    BasicLayoutComponent,
    HeaderComponent,
    ContentComponent,
    SiderComponent,
    MainComponent
  ],
  providers: [
    SysApiService
  ]
})
export class BasicLayoutModule { }
