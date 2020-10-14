# 一个Angular+Spring Boot前后端分离基础权限框架
<img src="https://img-blog.csdnimg.cn/20200201171910752.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3JvdGF0aW5nX3dpbmRtaWxs,size_16,color_FFFFFF,t_70">
<br>

## 相关说明：

```1.前端：angular9+ng-zorro-antd9+less+各种组件

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

