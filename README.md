# vue-travel


## 项目初始化
1. 在任一个文件里，打开`git bash`,或者cmd来打开命令行窗口，输入命令`vue create vue-travel`
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

最终使用vue-cli 3.x 初始化一个项目成功的话，会出现一下的内容：
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
+ 接下来在命令行窗口中执行`cd vue-travel`切换至新建的vue-travel的根目录下，在执行`npm run serve`打开一个开发时简单的服务器，以便我们在进行项目开发时快速看到我们开发的结果

```bash
 DONE  Compiled successfully in 42812ms                                                                                                                                                          16:22:10

  App running at:
  - Local:   http://localhost:8080/
  - Network: http://192.168.155.4:8080/

  Note that the development build is not optimized.
  To create a production build, run npm run build. 
```
alt+鼠标左键选中`Local:   http://localhost:8080/`快速打开浏览器，并访问该项目的首页。

我们的项目结果：

![img](C:\Users\lizheng\Desktop\00.png)

3. 查看最终生成的项目文件夹目录如下

``` lua
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



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
