import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlopDirective } from './flop.directive';



@NgModule({
  declarations: [
    FlopDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FlopDirective
  ]
})
export class FlopModule { }
