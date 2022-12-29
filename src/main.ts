import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import ArcoVue from '@arco-design/web-vue';
import Svg from './components/Svg'

import { useAppStoreWithOut } from './stores/modules/app'

import '@arco-design/web-vue/dist/arco.css';
import './assets/scss/index.scss'

const appStore = useAppStoreWithOut()


createApp(App).use(ArcoVue).use(router).use(Svg).mount('#app')

appStore.setTotalCount(9)
console.log(appStore.totalCount, appStore.getTotalCount, 'sds');
