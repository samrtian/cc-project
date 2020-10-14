export const environment = {
  production: false,
  useHash: true,
  webPrefix: 'http://127.0.0.1:8888/cc-app-backed/',
  webSuffix: '.jhtml',
  browserTitle: 'CC',
  loginAesKey: 'BMN8HU6QLMBOIRLE',
  homeRouter: '/admin/home',
  loginRouter: '/login',
  sysLogo: {
    img: 'assets/platform/img/logo.png',
    title: 'Hippo管理系统后台',
    width: '350px'
  },
  waterMarkerOptions: {
    showWaterMark: true, //是否显示
    watermarkLabel: 'Hippo管理系统后台', //通过watermarkLabel属性设置水印内容，优先级大于userKeys: ['userName']，两种配置二选一
    userKeys: ['userName'], //通过用户属性设置水印内容（目前只支持用户对象），若需要显示其它的信息可通过watermarkLabel设置文本，两种配置二选一
    splitChar: ' - '//多个用户属性之间分隔符号
  },
  weatherLocationUrl: 'https://api.map.baidu.com/location/ip?ak=8F8IOgpgswnYCV0mibGj9yQb7izObpU0',
  matchRouters: ['admin']
};
