import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@environments/environment';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    data: { title: '登录' }
  },
  {
    path: 'app',
    loadChildren: () => import('./layout/basic-layout/basic-layout.module').then(m => m.BasicLayoutModule),
    data: { title: '首页' }
  },
  {
    path: 'admin',
    loadChildren: () => import('./layout/desk-layout/desk-layout.module').then(m => m.DeskLayoutModule),
    data: { title: '首页' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: environment.useHash })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
