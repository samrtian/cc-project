import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorSrcDirective } from './error-src.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ErrorSrcDirective
  ],
  exports: [
    ErrorSrcDirective
  ]
})
export class ErrorSrcModule { }
