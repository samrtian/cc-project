import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogComponent } from './log.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginLogListComponent } from './login-log-list/login-log-list.component';
import { SysLogListComponent } from './sys-log-list/sys-log-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzListModule, NzSelectModule, NzTableModule, NzFormModule, NzInputModule, NzButtonModule } from 'ng-zorro-antd';
import { ViewGridModule } from '@platform/shared/view-grid/view-grid.module';
import { BusinessBtnModule } from '@platform/shared/business-btn/business-btn.module';
import { PageToolModule } from '@platform/shared/page-tool/page-tool.module';


const routes: Routes = [
  {
    path: '',
    component: LogComponent,
    children: [
      {
        path: 'sysLogList',
        component: SysLogListComponent,
        data: { title: '系统日志管理' }
      },
      {
        path: 'loginLogList',
        component: LoginLogListComponent,
        data: { title: '登录日志管理' }
      }
    ]
  }
];


@NgModule({
  declarations: [
    LogComponent,
    LoginLogListComponent,
    SysLogListComponent
  ],
  imports: [
    CommonModule,
    NzListModule,
    NzListModule,
    NzFormModule,
    NzSelectModule,
    NzTableModule,
    NzInputModule,
    NzButtonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ViewGridModule,
    BusinessBtnModule,
    PageToolModule,
    RouterModule.forChild(routes)
  ]
})
export class LogModule { }
