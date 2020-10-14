import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule, NzFormModule } from 'ng-zorro-antd';


import { LineTitleComponent } from './line-title/line-title.component';


@NgModule({
  declarations: [
    LineTitleComponent
  ],
  imports: [
    CommonModule,
    NzGridModule,
    NzFormModule
  ],
  exports: [
    LineTitleComponent
  ]
})
export class ViewGridModule { }
