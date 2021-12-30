/*
 * @Author: zhengmaster
 * @Date: 2021-12-28 00:20:55
 * @LastEditTime: 2021-12-30 22:49:03
 * @Description: 首页
 * @FilePath: /ts/master-travel/src/routers/index.ts
 */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', hidden: true, redirect: '/index' },
  {
    path: '/index',
    name: 'Home',
    component: () => import('@/pages/Home/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
