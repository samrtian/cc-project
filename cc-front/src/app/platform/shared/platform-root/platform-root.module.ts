import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SpinningService } from '../spinning/spinning.service';
import { SpinningComponent } from '../spinning/spinning.component';

import { PlatformRootComponent } from './platform-root.component';
import { PlatformStorageService } from '../platform-storage/platform-storage.service';
import { SessionStorageService } from '../storage/session-storage.service';
import { SingleModalService } from '../single-modal/single-modal.service';
import { PlatformRootService } from './platform-root.service';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PlatformRootComponent,
    SpinningComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NzSpinModule,
  ],
  exports: [
    PlatformRootComponent
  ],
  providers: [
    SpinningService,
    PlatformStorageService,
    SessionStorageService,
    SingleModalService,
    PlatformRootService
  ]
})
export class PlatformRootModule { }
