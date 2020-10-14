import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NzCardModule, NzIconModule, NzGridModule } from 'ng-zorro-antd';
import { NgxEchartsModule } from 'ngx-echarts';

import { CommonModule } from '@angular/common';
import { TaskModule } from '@platform/shared/task/task.module';
import { NoticeModule } from '@platform/shared/notice/notice.module';


import { HomeComponent } from './home.component';
import { CustomEmptyModule } from '@platform/shared/custom-empty/custom-empty.module';
import { ViewGridModule } from '@platform/shared/view-grid/view-grid.module';
import { WeatherModule } from '@platform/shared/weather/weather.module';
import { FlopModule } from '@platform/shared/flop/flop.module';
import * as echarts from 'echarts';
import { ScrollbarModule } from '@platform/shared/scrollbar/scrollbar.module';
import { ContainerCssModule } from '@platform/shared/container-css/container-css.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: '**', redirectTo: '/main/errorPage/404', pathMatch: 'full' }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzIconModule,
    NzGridModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
    ViewGridModule,
    WeatherModule,
    FlopModule,
    TaskModule,
    NoticeModule,
    CustomEmptyModule,
    ScrollbarModule,
    ContainerCssModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
