import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageToolModule } from '@platform/shared/page-tool/page-tool.module';

import { ExceptionModule } from '@platform/shared/exception/exception.module';


import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorPageComponent } from './error-page.component';
import { NzIconModule, NzButtonModule } from 'ng-zorro-antd';


const routes: Routes = [
  {
    path: '',
    component: ErrorPageComponent,
    children: [
      {
        path: 'notFound',
        component: NotFoundComponent,
        data: { title: '404' },
      }
    ]
  }
];


@NgModule({
  declarations: [
    NotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    ExceptionModule,
    FormsModule,
    NzButtonModule,
    NzIconModule,
    ReactiveFormsModule,
    RouterModule,
    PageToolModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    NotFoundComponent,
    ErrorPageComponent
  ]
})
export class ErrorPageModule { }
