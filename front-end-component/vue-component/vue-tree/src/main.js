// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Tree,Button} from 'element-ui'
import 'element-ui/lib/theme-chalk/tree.css'
import 'element-ui/lib/theme-chalk/button.css'
import 'element-ui/lib/theme-chalk/checkbox.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './data/mock'
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Tree)
Vue.use(Button)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
