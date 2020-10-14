import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeptComponent } from './dept.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import { DeptAddComponent } from './dept-add/dept-add.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DeptUsersComponent } from './dept-users/dept-users.component';
import { DeptStructureComponent } from './dept-structure/dept-structure.component';
import { DeptViewComponent } from './dept-view/dept-view.component';
import { NzFormModule, NzButtonModule, NzTableModule, NzIconModule, NzTreeSelectModule, NzSelectModule, NzInputModule, NzTreeModule, NzListModule } from 'ng-zorro-antd';
import { ViewGridModule } from '@platform/shared/view-grid/view-grid.module';
import { BusinessBtnModule } from '@platform/shared/business-btn/business-btn.module';
import { PageToolModule } from '@platform/shared/page-tool/page-tool.module';
import { DataDicPipeModule } from '@platform/shared/custom-pipe/data-dic-pipe/data-dic-pipe.module';
import { CustomEmptyModule } from '@platform/shared/custom-empty/custom-empty.module';
import { ScrollbarModule } from '@platform/shared/scrollbar/scrollbar.module';
import { StructureDiagramModule } from '@platform/shared/structure-diagram/structure-diagram.module';
import { ContainerCssModule } from '@platform/shared/container-css/container-css.module';

const routes: Routes = [
  {
    path: '',
    component: DeptComponent,
    children: [
      {
        path: 'deptList',
        component: DeptListComponent,
        data: { title: '部门管理' }
      },
      {
        path: 'deptAdd',
        component: DeptAddComponent,
        data: { title: '部门添加' }
      },
      {
        path: 'deptEdit',
        component: DeptAddComponent,
        data: { title: '部门编辑' }
      },
      {
        path: 'deptStructure',
        component: DeptStructureComponent,
        data: { title: '部门结构图' }
      }
    ]
  }
];

@NgModule({
  declarations: [
    DeptComponent,
    DeptListComponent,
    DeptAddComponent,
    DeptUsersComponent,
    DeptStructureComponent,
    DeptViewComponent
  ],
  imports: [
    CommonModule,
    NzFormModule,
    NzButtonModule,
    NzIconModule,
    NzTreeSelectModule,
    NzSelectModule,
    NzInputModule,
    NzTreeModule,
    NzListModule,
    NzTableModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ViewGridModule,
    BusinessBtnModule,
    PageToolModule,
    DataDicPipeModule,
    CustomEmptyModule,
    ScrollbarModule,
    StructureDiagramModule,
    ContainerCssModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    DeptUsersComponent,
    DeptViewComponent
  ]
})
export class DeptModule { }
