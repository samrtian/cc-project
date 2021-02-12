import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageToolDirective } from './page-tool.directive';




@NgModule({
  declarations: [
    PageToolDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageToolDirective
  ]
})
export class PageToolModule { }
