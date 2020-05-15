// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import iView from 'iview'
import 'iview/dist/styles/iview.css'

import base from './utilities/common'

import store from './store/index'

import http from './api/http'

import permission from './api/permission'

Vue.use(ElementUI)
Vue.use(iView)

Vue.config.productionTip = false

/* eslint-disable no-new */
var vue = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

Vue.prototype.base = base
Vue.prototype.http = http
Vue.prototype.http.init(vue)
Vue.prototype.permission = permission
Vue.prototype.permission.init(vue)
