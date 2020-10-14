import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { SysInfoComponent } from './sys-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzCardModule, NzProgressModule, NzDescriptionsModule, NzGridModule, NzIconModule } from 'ng-zorro-antd';
import { ViewGridModule } from '@platform/shared/view-grid/view-grid.module';
import { FlopModule } from '@platform/shared/flop/flop.module';
import { ScrollbarModule } from '@platform/shared/scrollbar/scrollbar.module';
import { ContainerCssModule } from '@platform/shared/container-css/container-css.module';

const routes: Routes = [
  {
    path: '',
    component: SysInfoComponent
  }
];

@NgModule({
  declarations: [
    SysInfoComponent
  ],
  imports: [
    CommonModule,
    NzCardModule,
    NzProgressModule,
    NzDescriptionsModule,
    NzGridModule,
    NzIconModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule,
    ViewGridModule,
    FlopModule,
    ScrollbarModule,
    ContainerCssModule,
    RouterModule.forChild(routes)
  ]
})
export class SysInfoModule { }
