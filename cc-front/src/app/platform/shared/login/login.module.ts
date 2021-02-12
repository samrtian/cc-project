import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SysApiService } from '../..//api/sys/sys-api.service';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    NzNotificationModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    SysApiService
  ]
})
export class LoginModule { }
