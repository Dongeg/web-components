// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueForm from 'vue-form';
import options from './assets/js/validators'
Vue.config.productionTip = false
/* eslint-disable no-new */

Vue.use(VueForm, options);
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
