import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerCssDirective } from './container-css.directive';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ContainerCssDirective],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ContainerCssDirective
  ]
})
export class ContainerCssModule { }
