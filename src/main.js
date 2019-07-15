// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import HDNav from  './components/top'
import FTNav from  './components/footPage'
Vue.config.productionTip = false
Vue.component('hdNav',HDNav);
Vue.component('ftNav',FTNav);
import Axios from 'axios'
import $ from 'jquery'
Vue.prototype.$http=Axios
Vue.prototype.$=$
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
