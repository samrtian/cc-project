import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@environments/environment';
import { MasterLayoutEnum } from '@platform/common/enum/master-layout.enum';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    data: { title: '登录', notKeep: true }
  },
  {
    path: 'app',
    loadChildren: () => {
      if (environment.masterLayout === MasterLayoutEnum.deskLayout) {
        return import('./layout/desk-layout/desk-layout.module').then(m => m.DeskLayoutModule);
      } else {
        return import('./layout/basic-layout/basic-layout.module').then(m => m.BasicLayoutModule);
      }
    },
    data: { title: '首页' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: environment.useHash })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
