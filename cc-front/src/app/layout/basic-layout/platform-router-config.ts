import { AppGuard } from '../../app.guard';
/**
 * 平台路由
 */
export const platformRouterConfig = [{
    path: 'errorPage',
    loadChildren: () => import('../../platform/view/error-page/error-page.module').then(m => m.ErrorPageModule),
    canActivate: [AppGuard],
    data: { title: '错误信息' }
}, {
    path: 'user',
    loadChildren: () => import('../../platform/view/user/user.module').then(m => m.UserModule),
    canActivate: [AppGuard],
    data: { title: '用户管理' }
}, {
    path: 'log',
    loadChildren: () => import('../../platform/view/log/log.module').then(m => m.LogModule),
    canActivate: [AppGuard],
    data: { title: '日志管理' }
}, {
    path: 'accessUrl',
    loadChildren: () => import('../../platform/view/access-url/access-url.module').then(m => m.AccessUrlModule),
    canActivate: [AppGuard],
    data: { title: '访问地址管理' }
}, {
    path: 'button',
    loadChildren: () => import('../../platform/view/button/button.module').then(m => m.ButtonModule),
    canActivate: [AppGuard],
    data: { title: '按钮管理' }
}, {
    path: 'dataDic',
    loadChildren: () => import('../../platform/view/data-dic/data-dic.module').then(m => m.DataDicModule),
    canActivate: [AppGuard],
    data: { title: '数据字典管理' }
}, {
    path: 'dept',
    loadChildren: () => import('../../platform/view/dept/dept.module').then(m => m.DeptModule),
    canActivate: [AppGuard],
    data: { title: '部门管理' }
}, {
    path: 'menu',
    loadChildren: () => import('../../platform/view/menu/menu.module').then(m => m.MenuModule),
    canActivate: [AppGuard],
    data: { title: '菜单管理' }
}, {
    path: 'role',
    loadChildren: () => import('../../platform/view/role/role.module').then(m => m.RoleModule),
    canActivate: [AppGuard],
    data: { title: '角色管理' }
}, {
    path: 'notice',
    loadChildren: () => import('../../platform/view/notice/notice.module').then(m => m.NoticeModule),
    canActivate: [AppGuard],
    data: { title: '系统公告管理' }
}, {
    path: 'workbench',
    loadChildren: () => import('../../platform/view/workbench/workbench.module').then(m => m.WorkbenchModule),
    canActivate: [AppGuard],
    data: { title: '个人工作台' }
}, {
    path: 'sysInfo',
    loadChildren: () => import('../../platform/view/sys-info/sys-info.module').then(m => m.SysInfoModule),
    canActivate: [AppGuard],
    data: { title: '系统信息' }
}, {
    path: 'dataPermissions',
    loadChildren: () => import('../../platform/view/data-permissions/data-permissions.module').then(m => m.DataPermissionsModule),
    canActivate: [AppGuard],
    data: { title: '数据权限管理' }
}];
