import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NoticeComponent } from './notice.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SysNoticeListComponent } from './sys-notice-list/sys-notice-list.component';
import { SysNoticeAddComponent } from './sys-notice-add/sys-notice-add.component';
import { SysNoticeViewComponent } from './sys-notice-view/sys-notice-view.component';
import { NzFormModule, NzInputModule, NzButtonModule, NzSelectModule, NzDatePickerModule, NzIconModule, NzTableModule } from 'ng-zorro-antd';
import { ViewGridModule } from '@platform/shared/view-grid/view-grid.module';
import { BusinessBtnModule } from '@platform/shared/business-btn/business-btn.module';
import { PageToolModule } from '@platform/shared/page-tool/page-tool.module';
import { DataDicPipeModule } from '@platform/shared/custom-pipe/data-dic-pipe/data-dic-pipe.module';

const routes: Routes = [
  {
    path: '',
    component: NoticeComponent,
    children: [
      {
        path: 'sysNoticeList',
        component: SysNoticeListComponent,
        data: { title: '系统公告管理' }
      },
      {
        path: 'sysNoticeAdd',
        component: SysNoticeAddComponent,
        data: { title: '系统公告添加' }
      },
      {
        path: 'sysNoticeEdit',
        component: SysNoticeAddComponent,
        data: { title: '系统公告编辑' }
      },
      {
        path: 'sysNoticeView',
        component: SysNoticeViewComponent,
        data: { title: '系统公告查看' }
      }
    ]
  }
];


@NgModule({
  declarations: [
    NoticeComponent,
    SysNoticeListComponent,
    SysNoticeAddComponent,
    SysNoticeViewComponent
  ],
  imports: [
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzSelectModule,
    NzTableModule,
    NzDatePickerModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ViewGridModule,
    BusinessBtnModule,
    PageToolModule,
    DataDicPipeModule,
    RouterModule.forChild(routes)
  ],
  providers: [DatePipe]
})
export class NoticeModule { }
