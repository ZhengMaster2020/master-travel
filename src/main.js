import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import commonComponents from './components/index.js'

Vue.config.productionTip = false

// 全局挂在组件
Vue.use(commonComponents)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
