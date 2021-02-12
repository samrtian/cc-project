import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringTemplateOutletDirective } from './string-template-outlet/string-template-outlet.directive';
import { TemplateOutletDirective } from './template-outlet/template-outlet.directive';

@NgModule({
  declarations: [
    StringTemplateOutletDirective,
    TemplateOutletDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StringTemplateOutletDirective,
    TemplateOutletDirective
  ]
})
export class CustomTemplateModule { }
