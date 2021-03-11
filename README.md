# vue版本请访问
https://github.com/myopenresources/cc-project-vue

# 一个Angular+Spring Boot前后端分离基础权限框架
<img src="https://img-blog.csdnimg.cn/20200201171910752.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3JvdGF0aW5nX3dpbmRtaWxs,size_16,color_FFFFFF,t_70">
<br>

## 相关说明：

```
1.前端：angular+ng-zorro-antd+less+各种组件

2.后端：spring boot+mybatis3.1.1 + maven模块化

3.数据库：mysql8.0以上（需要低版本的可修改配置）

4.管理工具：maven3.9

5.分布式多数据源，支持同时操作多个不同数据源

6.注解事务管理，支持分布式事务管理

7.前后端分离，实现跨域请求，权限拦截，权限细化到按钮、请求与菜单

8.实现请求\响应双向数据加密

9.可在系统中自由的配置菜单、按钮、访问的权限，保证了操作的安全性，同时也避免了一些专业人员的强行代码操作

10.支持皮肤更换，目前系统自带三套皮肤（一套上下布局，一套左右布局，一套上左右布局可查看下面的“系统部分页面展示”部分），可根据自己的喜好配置less，定制成不同风格的布局与皮肤，配置简单，灵活。

11.主要功能：用户、部门、角色、菜单、按钮、访问地址、数据权限、数据字典、系统公告、系统监控、我的待办、我的公告、登录日志、系统日志，密码修改，头像上传，系统信息，等等

12.按钮添加了表达式功能，表达式作用：通过简单的表达式控制按钮运行期的显示，例如：资源库中有一个收藏功能，当它未被收藏时应该显示的是“收藏”，当它被收藏过显示的是“取消收藏”，这时可配置“收藏”与“取消收藏”两个按钮，通过表达式控制它们的显示，其中“收藏”表达式配置为“data.status==='1'”，表示当数据的状态为1时显示；其中“取消收藏”表达式配置为“data.status==='2'”，表示当数据状态为2时显示；这样两个按钮就会根据数据在运行期时显示了。

13.添加了数据权限功能，每个用户查询到的数据由权限数据权限处理器决定，另如：当前用户为某一功能配置部门数据权限，那么在某个功能上，他能查询的只有他拥有的部门的数据。

14.不支持古老的浏览器，仅支持现在浏览器

15.ehcache内置缓存

16.前后端实用的数据字典
```
## 前端组件
```
以下是第三方组件
1.echarts与ngx-echarts图表
2.animate.css动画css
3.lodash工具包
4.ng-zorro-antdUI组件库
5.ngx-cookie cookie操作库
6.ngx-img-croppe图片裁剪
7.nprogress进度条
8.overlayscrollbars滚动条
9.qrious二维码
10.viewerjs图片查看器

以下是自定义组件、管道、工具类
1.access-url-modal访问地址模态框选择器
2.business-btn动态按钮组件（不同场景下的动态按钮，权限使用）
3.container-css容器css渲染指令
4.cron cron表达式组件（分为input选择和模态框选择两种）
5.custom-empty 自定义的空数据组件
6.custom-pipe 自定义管道（包含数据字典、表达式管道）
7.custom-template自定义模板指令（文本与模板指令）
8.custom-validator自定义验证器（包含中文、邮箱、电话、固话、身份证、URL、密码等等验证器）
9.error-src 错误url默认指令（例如：图片加载失败后替换的默认图片）
10.exception表达式组件
11.flop翻牌器指令
12.image-viewer图片查看器指令
13.img-cropper-modal图片裁剪模态框组件
14.layout平台布局组件
15.login登录封装组件
16.notice公告组件
17.page-tool页面工具条指令
18.platform-auth平台鉴权
19.platform-interceptor平台拦截器
20.platform-root平台根组件
21.platform-storage平台缓存服务
22.qrcode二维码组件
23.scrollbar滚动条指令
24.single-modal单一模态框（无论打开多少次，只显示一个）
25.spinning 转圈圈组件（一般加载时使用）
26.storage本地缓存服务（session、local、session）
27.structure-diagram 结构图（树型的结构图）
28.task 待办组件
29.tree-menu菜单树组件
30.update-pwd更新密码框组件
31.user-profile用户资料组件
32.line-title 行标题组件
33.water-marker水印组件
34.weather天气组件
35.common-util公司工具类（常用处理工具类）
36.security-util安全工具类（加解密工具类）
```

## 后端插件
```
除普通功能外，加入了数据权限mybatis插件，内置了几个常用的插件，可自己扩展。
```


## 系统说明
请参考：https://www.toutiao.com/i6883358147356918280/


## 联系方式
QQ：332557712 <br>
QQ群：33585083 <br>

头条号：1639490190837772 (后续会在上面发布相关内容)：<br>
<img src="http://sf3-ttcdn-tos.pstatp.com/obj/pgc-image/f3eglxkg90qj49.png">
<br>


## 界面展示：
<img src="https://img-blog.csdnimg.cn/20200201171910752.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3JvdGF0aW5nX3dpbmRtaWxs,size_16,color_FFFFFF,t_70">



<img src="https://img-blog.csdnimg.cn/20200203102853455.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3JvdGF0aW5nX3dpbmRtaWxs,size_16,color_FFFFFF,t_70">


<img src="https://img-blog.csdnimg.cn/20200203103006588.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3JvdGF0aW5nX3dpbmRtaWxs,size_16,color_FFFFFF,t_70
">

<img src="https://img-blog.csdnimg.cn/20200203111007786.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3JvdGF0aW5nX3dpbmRtaWxs,size_16,color_FFFFFF,t_70">

<img src="https://img-blog.csdnimg.cn/20200203111403695.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3JvdGF0aW5nX3dpbmRtaWxs,size_16,color_FFFFFF,t_70">

