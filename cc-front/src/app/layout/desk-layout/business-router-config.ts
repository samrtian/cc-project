import { AppGuard } from 'src/app/app.guard';


/**
 * 业务路由
 */
export const businessRouterConfig = [
    {
        path: 'student',
        loadChildren: () => import('../../business/view/student/student.module').then(m => m.StudentModule),
        canActivate: [AppGuard],
        data: { title: '学生管理' }
    }
];
