import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataDicPipePipe } from './data-dic-pipe.pipe';

@NgModule({
  declarations: [
    DataDicPipePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DataDicPipePipe
  ],
  providers: [
    DataDicPipePipe
  ]
})
export class DataDicPipeModule { }
