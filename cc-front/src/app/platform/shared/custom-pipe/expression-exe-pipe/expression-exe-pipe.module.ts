import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpressionExePipePipe } from './expression-exe-pipe.pipe';

@NgModule({
  declarations: [
    ExpressionExePipePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExpressionExePipePipe
  ],
  providers: [
    ExpressionExePipePipe
  ]
})
export class ExpressionExePipeModule { }
