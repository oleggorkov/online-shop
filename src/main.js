import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import './assets/styles/main.scss'
import 'material-design-icons-iconfont'
import router from "@/router/router";

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
