import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkbenchComponent } from './workbench.component';
import { NoticeListComponent } from './notice-list/notice-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { NoticeViewComponent } from './notice-view/notice-view.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewGridModule } from '@platform/shared/view-grid/view-grid.module';
import { BusinessBtnModule } from '@platform/shared/business-btn/business-btn.module';
import { PageToolModule } from '@platform/shared/page-tool/page-tool.module';
import { DataDicPipeModule } from '@platform/shared/custom-pipe/data-dic-pipe/data-dic-pipe.module';

const routes: Routes = [
  {
    path: '',
    component: WorkbenchComponent,
    children: [
      {
        path: 'noticeList',
        component: NoticeListComponent,
        data: { title: '我的公告' }
      },
      {
        path: 'noticeView',
        component: NoticeViewComponent,
        data: { title: '公告查看' }
      },
      {
        path: 'taskList',
        component: TaskListComponent,
        data: { title: '我的待办' }
      }
    ]
  }
];

@NgModule({
  declarations: [
    WorkbenchComponent,
    NoticeListComponent,
    TaskListComponent,
    NoticeViewComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzSelectModule,
    NzIconModule,
    NzTableModule,
    NzFormModule,
    NzInputModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ViewGridModule,
    BusinessBtnModule,
    PageToolModule,
    DataDicPipeModule,
    RouterModule.forChild(routes)
  ]
})
export class WorkbenchModule { }
