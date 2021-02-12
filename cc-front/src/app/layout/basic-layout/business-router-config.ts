import { AppGuard } from 'src/app/app.guard';


/**
 * 业务路由
 */
export const businessRouterConfig = [
    {
        path: 'student',
        loadChildren: () => import('../../business/view/student/student.module').then(m => m.StudentModule),
        canActivate: [AppGuard],
        data: { title: '数据权限' }
    },
    {
        path: 'qrcodeDemo',
        loadChildren: () => import('../../business/view/qrcode-demo/qrcode-demo.module').then(m => m.QrcodeDemoModule),
        canActivate: [AppGuard],
        data: { title: '二维码' }
    },
    {
        path: 'cronDemo',
        loadChildren: () => import('../../business/view/cron-demo/cron-demo.module').then(m => m.CronDemoModule),
        canActivate: [AppGuard],
        data: { title: 'cron表达式' }
    },
    {
        path: 'customEmptyDemo',
        loadChildren: () => import('../../business/view/custom-empty-demo/custom-empty-demo.module').then(m => m.CustomEmptyDemoModule),
        canActivate: [AppGuard],
        data: { title: '自定义空内容' }
    },
    {
        path: 'errorSrcDemo',
        loadChildren: () => import('../../business/view/error-src-demo/error-src-demo.module').then(m => m.ErrorSrcDemoModule),
        canActivate: [AppGuard],
        data: { title: '错误源' }
    },
    {
        path: 'scrollbarDemo',
        loadChildren: () => import('../../business/view/scrollbar-demo/scrollbar-demo.module').then(m => m.ScrollbarDemoModule),
        canActivate: [AppGuard],
        data: { title: '滚动条' }
    },
    {
        path: 'storageDemo',
        loadChildren: () => import('../../business/view/scrollbar-demo/scrollbar-demo.module').then(m => m.ScrollbarDemoModule),
        canActivate: [AppGuard],
        data: { title: '本地存储' }
    },
    {
        path: 'waterMarkerDemo',
        loadChildren: () => import('../../business/view/water-marker-demo/water-marker-demo.module').then(m => m.WaterMarkerDemoModule),
        canActivate: [AppGuard],
        data: { title: '水印' }
    }
];
