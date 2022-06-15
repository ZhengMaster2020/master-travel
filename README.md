# :airplane:master-travel 旅游网站

### :writing_hand:项目介绍

该项目是基于`Vue3 + typescript + vite`技术栈实现的一个仿[Airbnb](https://www.airbnb.com/)（US 版本官方）的纯前端旅游网站应用， 主要目的是为了巩固自己看完 vue3 的官方文档所理解的知识。

:deer:**项目技术栈**

| 框架               | 官网链接                          |
| ------------------ | --------------------------------- |
| Vue3（v3.2.16）    | https://v3.cn.vuejs.org/          |
| VueRouter （v4.x） | https://next.router.vuejs.org/zh/ |
| Vite               | https://cn.vitejs.dev/            |
| Typescript         | https://www.tslang.cn/index.html  |
| Scss               | https://www.sass.hk/              |
| AcroDesign         | https://arco.design/              |

:tv:**项目演示** [演示地址](https://github.com/ZhengMaster2020/vue-travel)

![img](https://github.com/ZhengMaster2020/master-travel/blob/master/public/home.gif?raw=true)

:fu:**项目功能：**

```markdown
1:用户模块
用户注册(包含 ajax 方式校验邮箱格式与是否重复)
用户激活(邮件激活)
用户登录
用户退出
2:旅游景点模块
景点列表(带分页)
景点详情
3:订单模块
确认订单(填写出发日期,人数,出发地等信息)
生成订单(将订单信息保存到数据库)
订单详情展示
订单支付(易宝支付)
扩展功能:
1:用户 7 天免登录功能(自动登录功能)
2:我的订单列表展示(带分页)
```

## :b:项目下载以及运行

```bash
> 打开git bash 执行一下命令

git clone https://github.com/ZhengMaster2020/vue-travel

npm install

npm run serve
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
