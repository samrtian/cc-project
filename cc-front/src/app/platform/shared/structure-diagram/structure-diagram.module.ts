import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructureDiagramComponent } from './structure-diagram.component';
import { StructureDiagramNodeComponent } from './structure-diagram-node/structure-diagram-node.component';
import { NzIconModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [
    StructureDiagramComponent,
    StructureDiagramNodeComponent
  ],
  imports: [
    CommonModule,
    NzIconModule
  ],
  exports: [
    StructureDiagramComponent,
    StructureDiagramNodeComponent
  ]
})
export class StructureDiagramModule { }
