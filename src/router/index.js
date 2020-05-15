import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/appmanager/App_ReportPrice.vue')
    },
    {
      path: '/coder',
      name: 'coder',
      component: () => import('@/views/builder/coder.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/order/Test_data.vue')
    }
  ]
})
