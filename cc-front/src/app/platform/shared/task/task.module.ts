import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule, NzTableModule, NzCardModule, NzTagModule, NzAlertModule } from 'ng-zorro-antd';
import { ViewGridModule } from '../view-grid/view-grid.module';
import { TaskComponent } from './task.component';
import { CustomEmptyModule } from '../custom-empty/custom-empty.module';

@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzTableModule,
    NzCardModule,
    NzTagModule,
    NzAlertModule,
    ViewGridModule,
    CustomEmptyModule
  ],
  exports: [
    TaskComponent
  ]
})
export class TaskModule { }
