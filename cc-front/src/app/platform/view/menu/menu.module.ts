import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuAddComponent } from './menu-add/menu-add.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzInputNumberModule} from 'ng-zorro-antd/input-number';
import { NzFormModule} from 'ng-zorro-antd/form';
import { NzInputModule} from 'ng-zorro-antd/input';
import { NzTableModule} from 'ng-zorro-antd/table';
import { NzButtonModule} from 'ng-zorro-antd/button';
import { NzIconModule} from 'ng-zorro-antd/icon';
import { NzTreeSelectModule} from 'ng-zorro-antd/tree-select';
import { NzTreeModule} from 'ng-zorro-antd/tree';
import { ViewGridModule } from '@platform/shared/view-grid/view-grid.module';
import { BusinessBtnModule } from '@platform/shared/business-btn/business-btn.module';
import { PageToolModule } from '@platform/shared/page-tool/page-tool.module';
import { CustomEmptyModule } from '@platform/shared/custom-empty/custom-empty.module';
import { ScrollbarModule } from '@platform/shared/scrollbar/scrollbar.module';
import { ContainerCssModule } from '@platform/shared/container-css/container-css.module';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: 'menuList',
        component: MenuListComponent,
        data: { title: '菜单管理' }
      },
      {
        path: 'menuAdd',
        component: MenuAddComponent,
        data: { title: '菜单添加' }
      },
      {
        path: 'menuEdit',
        component: MenuAddComponent,
        data: { title: '菜单编辑' }
      }
    ]
  }
];

@NgModule({
  declarations: [
    MenuComponent,
    MenuListComponent,
    MenuAddComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzFormModule,
    NzInputModule,
    NzIconModule,
    NzButtonModule,
    NzTreeModule,
    NzTreeSelectModule,
    NzInputNumberModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ViewGridModule,
    BusinessBtnModule,
    PageToolModule,
    ScrollbarModule,
    CustomEmptyModule,
    ContainerCssModule,
    RouterModule.forChild(routes)
  ]
})
export class MenuModule { }
