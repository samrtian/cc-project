import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeskLayoutComponent } from './desk-layout.component';

import { DeskLayoutModule as PlatformDeskLayoutModule } from '@platform/shared/layout/desk-layout/desk-layout.module';
import { Routes, RouterModule } from '@angular/router';
import { AppGuard } from '../../../app/app.guard';
import { platformRouterConfig } from './platform-router-config';
import { businessRouterConfig } from './business-router-config';

const routes: Routes = [
  {
    path: '',
    component: DeskLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../home/home.module').then(m => m.HomeModule),
        canActivate: [AppGuard],
        data: { title: '首页' }
      },
      //这里是平台路由
      ...platformRouterConfig,
      //这里是业务路由
      ...businessRouterConfig,
      //404放最后
      { path: '**', redirectTo: '/app/errorPage/notFound', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  declarations: [DeskLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PlatformDeskLayoutModule
  ]
})
export class DeskLayoutModule { }
