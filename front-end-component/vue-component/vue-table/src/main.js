// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {Table,TableColumn,Pagination } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'  //引入全部css样式
import 'element-ui/lib/theme-chalk/icon.css'    //pagination中要用到图标
import 'element-ui/lib/theme-chalk/table.css'
import 'element-ui/lib/theme-chalk/tooltip.css'   //table中要用到提示框插件
import 'element-ui/lib/theme-chalk/table-column.css'
import 'element-ui/lib/theme-chalk/pagination.css'
import message from './data/mock'
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

Vue.prototype.$ELEMENT = { size: 'small' }
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
