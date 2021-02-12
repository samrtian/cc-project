import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule} from 'ng-zorro-antd/form';
import {NzGridModule} from 'ng-zorro-antd/grid';


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
