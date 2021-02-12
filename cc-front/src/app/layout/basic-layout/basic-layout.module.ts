import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { BasicLayoutModule as platformBasicLayoutModule } from '@platform/shared/layout/basic-layout/basic-layout.module';
import { AppGuard } from '../../app.guard';
import { BasicLayoutComponent } from './basic-layout.component';
import { platformRouterConfig } from './platform-router-config';
import { businessRouterConfig } from './business-router-config';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: BasicLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../home/home.module').then(m => m.HomeModule),
        canActivate: [AppGuard],
        data: { title: '首页' }
      },
      //这里是平台路由
      ...platformRouterConfig,
      //这里是demo路由
      ...businessRouterConfig,
      //404放最后
      { path: '**', redirectTo: '/app/errorPage/notFound', pathMatch: 'full' }
    ]
  }
];


@NgModule({
  declarations: [
    BasicLayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NzLayoutModule,
    platformBasicLayoutModule
  ]
})
export class BasicLayoutModule { }
