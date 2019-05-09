// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import plugin from '@/utils/utilPlugin.js'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import $ from '../node_modules/jquery/dist/jquery.min.js'
// import '../node_modules/bootstrap'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

Vue.config.productionTip = false
//使用插件
Vue.use(plugin);
//使用element
// Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
