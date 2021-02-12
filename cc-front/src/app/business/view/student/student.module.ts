import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NzTableModule} from 'ng-zorro-antd/table';
import { NzFormModule} from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CronModule } from '@platform/shared/cron/cron.module';
import { ViewGridModule } from '@platform/shared/view-grid/view-grid.module';
import { QrcodeModule } from '@platform/shared/qrcode/qrcode.module';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      {
        path: 'studentList',
        component: StudentListComponent,
        data: { title: '学生管理' }
      }
    ]
  }
];

@NgModule({
  declarations: [
    StudentComponent, 
    StudentListComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzFormModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ViewGridModule,
    QrcodeModule,
    CronModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentModule { }
