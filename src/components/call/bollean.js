import Vue from 'vue'
let a = false;
export default {
  install () {
    Vue.prototype.$a = a;
  }
}
