import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleAddComponent } from './role-add/role-add.component';
import { RoleViewComponent } from './role-view/role-view.component';
import { RoleUsersComponent } from './role-users/role-users.component';
import { RolePermissionDistributeComponent } from './role-permission-distribute/role-permission-distribute.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule, NzInputModule, NzTableModule, NzSelectModule, NzButtonModule, NzIconModule, NzListModule, NzTabsModule, NzMenuModule, NzTreeModule, NzCheckboxModule } from 'ng-zorro-antd';
import { ViewGridModule } from '@platform/shared/view-grid/view-grid.module';
import { BusinessBtnModule } from '@platform/shared/business-btn/business-btn.module';
import { PageToolModule } from '@platform/shared/page-tool/page-tool.module';
import { DataDicPipeModule } from '@platform/shared/custom-pipe/data-dic-pipe/data-dic-pipe.module';
import { ScrollbarModule } from '@platform/shared/scrollbar/scrollbar.module';
import { CustomEmptyModule } from '@platform/shared/custom-empty/custom-empty.module';

const routes: Routes = [
  {
    path: '',
    component: RoleComponent,
    children: [
      {
        path: 'roleList',
        component: RoleListComponent,
        data: { title: '角色管理' }
      },
      {
        path: 'roleAdd',
        component: RoleAddComponent,
        data: { title: '角色添加' }
      },
      {
        path: 'roleEdit',
        component: RoleAddComponent,
        data: { title: '角色编辑' }
      },
      {
        path: 'roleView',
        component: RoleViewComponent,
        data: { title: '角色查看' }
      }
    ]
  }
];

@NgModule({
  declarations: [
    RoleComponent,
    RoleListComponent,
    RoleAddComponent,
    RoleViewComponent,
    RoleUsersComponent,
    RolePermissionDistributeComponent
  ],
  imports: [
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzTableModule,
    NzSelectModule,
    NzButtonModule,
    NzIconModule,
    NzListModule,
    NzTabsModule,
    NzMenuModule,
    NzTreeModule,
    NzCheckboxModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ViewGridModule,
    BusinessBtnModule,
    PageToolModule,
    DataDicPipeModule,
    ScrollbarModule,
    CustomEmptyModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    RoleUsersComponent,
    RolePermissionDistributeComponent
  ]
})
export class RoleModule { }
