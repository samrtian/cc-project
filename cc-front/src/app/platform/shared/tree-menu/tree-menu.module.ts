import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzInputModule, NzIconModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollbarModule } from '../scrollbar/scrollbar.module';

import { TreeMenuComponent } from './tree-menu.component';
import { TreeNodeComponent } from './tree-node/tree-node.component';
import { TreeMenuPipePipe } from './tree-menu-pipe.pipe';
import { TreeMenuService } from './tree-menu.service';
import { CustomEmptyModule } from '../custom-empty/custom-empty.module';

@NgModule({
  declarations: [
    TreeMenuComponent,
    TreeNodeComponent,
    TreeMenuPipePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzInputModule,
    NzIconModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollbarModule,
    CustomEmptyModule
  ],
  exports: [
    TreeMenuComponent,
    TreeNodeComponent
  ],
  providers: [
    TreeMenuService
  ]
})
export class TreeMenuModule { }
