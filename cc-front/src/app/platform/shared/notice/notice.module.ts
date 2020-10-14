import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTagModule, NzAlertModule, NzTableModule, NzCardModule, NzButtonModule } from 'ng-zorro-antd';
import { ViewGridModule } from '../view-grid/view-grid.module';
import { NoticeComponent } from './notice.component';
import { CustomEmptyModule } from '../custom-empty/custom-empty.module';

@NgModule({
  declarations: [
    NoticeComponent
  ],
  imports: [
    CommonModule,
    NzTagModule,
    NzAlertModule,
    NzTableModule,
    NzButtonModule,
    NzCardModule,
    CustomEmptyModule,
    ViewGridModule
  ],
  exports: [
    NoticeComponent
  ]
})
export class NoticeModule { }
