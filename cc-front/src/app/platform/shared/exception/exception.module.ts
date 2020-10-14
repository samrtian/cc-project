import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExceptionComponent } from '../exception/exception.component';

@NgModule({
  declarations: [
    ExceptionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ExceptionComponent
  ]
})
export class ExceptionModule { }
