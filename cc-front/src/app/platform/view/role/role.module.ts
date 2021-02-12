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
import { NzFormModule} from 'ng-zorro-antd/form';
import { NzInputModule} from 'ng-zorro-antd/input';
import { NzTableModule} from 'ng-zorro-antd/table';
import { NzSelectModule} from 'ng-zorro-antd/select';
import { NzButtonModule} from 'ng-zorro-antd/button';
import { NzIconModule} from 'ng-zorro-antd/icon';
import { NzListModule} from 'ng-zorro-antd/list';
import { NzTabsModule} from 'ng-zorro-antd/tabs';
import { NzMenuModule} from 'ng-zorro-antd/menu';
import { NzTreeModule} from 'ng-zorro-antd/tree';
import { NzCheckboxModule} from 'ng-zorro-antd/checkbox';
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
