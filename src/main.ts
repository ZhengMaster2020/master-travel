import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import ArcoVue from '@arco-design/web-vue';

import '@arco-design/web-vue/dist/arco.css';
import './assets/scss/index.scss'

createApp(App).use(ArcoVue).use(router).mount('#app')
