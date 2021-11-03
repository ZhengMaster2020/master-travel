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

## 项目初始化

1. 在任一个文件里，打开`git bash`,或者 cmd 来打开命令行窗口，输入命令`vue create vite`
2. 接下来，进行选择，上下箭头切换选项，空格选中选项。看到一下的最终结果：

```bash
Vue CLI v3.9.3
┌────────────────────────────┐
│  Update available: 3.11.0  │
└────────────────────────────┘
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router, Vuex, CSS Pre-processors, Linter
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Stylus
? Pick a linter / formatter config: Standard
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)Lint on save
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In package.json
? Save this as a preset for future projects? No

```

我这里选择了`Babel, Router, Vuex, CSS Pre-processors(Stylus), Linter`,根据自己的需求进行选择安装相应的插件。

最终使用 vue-cli 3.x 初始化一个项目成功的话，会出现一下的内容：

```bash
Vue CLI v3.9.3
✨  Creating project in F:\Front-end\vue-project\vue-travel.
🗃  Initializing git repository...
⚙  Installing CLI plugins. This might take a while...



added 77 packages from 80 contributors, updated 2 packages and moved 9 packages in 29.384s
⚓  Running completion hooks...

�📄  Generating README.md...

�🎉  Successfully created project vue-travel.
�👉  Get started with the following commands:

 $ cd vue-travel
 $ npm run serve
```

- 接下来在命令行窗口中执行`cd vue-travel`切换至新建的 vue-travel 的根目录下，在执行`npm run serve`打开一个开发时简单的服务器，以便我们在进行项目开发时快速看到我们开发的结果

```bash
 DONE  Compiled successfully in 42812ms                                                                                                                                                          16:22:10

  App running at:
  - Local:   http://localhost:8080/
  - Network: http://192.168.155.4:8080/

  Note that the development build is not optimized.
  To create a production build, run npm run build.
```

alt+鼠标左键选中`Local: http://localhost:8080/`快速打开浏览器，并访问该项目的首页。

我们的项目结果：

![img](https://github.com/ZhengMaster2020/vue-travel/blob/master/public/images/00.png)

3. 查看最终生成的项目文件夹目录如下

```lua
vue-travel -- 项目目录
├── node_modules -- npm安装的模块目录
├── public -- 静态图片资源文件
└── src -- 源码目录
    ├── assets -- 自身项目引用的静态资源目录
    ├── components -- 组件目录
    ├── views -- 项目页面目录
    ├── App.vue -- 项目根组件
    ├── main.js -- 项目入口文件
	  ├── router.js -- 项目路由配置文件
    └── store.js -- Vuex配置文件
```

## :a:项目开发

### 为项目添加 login 以及 register 页面，并配相关路由。

1. 打开 router.js 文件，修改路由配置。我们去掉`About`这个选项，新增加登录`login`以及注册`register`选项，为项目新增加登录以及注册页面。具体的配置如下：

```javascript

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
++  {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
++  {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ './views/Register.vue')
    }
  ]
})
```

2. 打开 views 文件下，删掉`About.vue`文件，新增加`Login.vue`以及`Register.vue`文件

```javascript
/**Login**/
<template>
  <div class="login">
    <h1>This is an login page</h1>
  </div>
</template>
```

```javascript
/**Register**/
<template>
  <div class="register">
    <h1>This is an register page</h1>
  </div>
</template>
```

打开浏览器：

输入`http://localhost:8080/login`以及`http://localhost:8080/register`即可访问对应的页面

### 开发项目的公用的头部 Header 组件以及尾部 Footer 组件

1. 在`components`文件夹下新建`Header.vue`以及`Footer.vue`文件.具体的代码如下：

```javascript
/**Header组件**/
<template>
  <div class="header">
    <h3>this is header component</h3>
  </div>
</template>
```

```javascript
/**Footer 组件**/
<template>
  <div class="footer">
    <h3>this is footer component</h3>
  </div>
</template>
```

2. 在项目中引用这个组件。

- 第一种方式：通过`import`局部注册组件方式，在使用 Header/Footer 组件的那个组件注册头部尾部组件

例如：我在文件夹`views/Home.vue`，使用 Header 和 Footer 这两个组件，具体如下：

```javascript
/**Home.vue**/
<template>
  <div class="home">
     /**使用我们编写的Header组件**/
    <Header/>
    <div>
      content
    </div>
	 /**使用我们编写的Footer组件**/
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
//通过import方式引入我们编写的Header/Footer组件
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    // 注册我们的引入的组件
    Header,
    Footer
  }
}
</script>

```

- 另一种方式就是`全局注册组件`方式，不用在每个要使用到 Header 以及 Footer 时的组件，都要去 import 进来再去注册组件这么麻烦。具体实现方式如下：

  - 首先在`components`文件夹下新建一份`index.js`用来导出公用组件

  ```javascript
  /**/components/index.js**/

  import Header from './Header.vue'
  import Footer from './Footer.vue'


  function commonComponents (Vue) {

    // 检查是否已经全局安装了这些组件
    if (commonComponents.install) return

    Vue.component('Header', Header)
    Vue.component('Footer', Footer)
  }

  export default commonComponents
  ```

  - 在`src`文件夹下面的`main.js`文件中去注册这些导出的公用组件。

  ```javascript
  import Vue from 'vue'
  import App from './App.vue'
  import router from './router'
  import store from './store'

  + import commonComponents from './components/index.js'

  Vue.config.productionTip = false

    // 全局挂在组件
  + Vue.use(commonComponents)

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')

  ```

  - 在其他组件中去直接使用导出的这些公用组件。这里我在`App.vue`中去使用 Header 以及 Footer 组件

  ```javascript
  /**App.vue**/

  <template>
    <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/login">login</router-link> |
        <router-link to="/register">register</router-link> |
      </div>
      <router-view />
      <div>
        + <Header></Header>+ <Footer></Footer>
      </div>
    </div>
  </template>
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
