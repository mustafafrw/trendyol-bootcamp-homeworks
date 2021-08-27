import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import router from './router'
import "@trendyol-js/grace/css/root.css";
import "@trendyol-js/grace/css/system.css";

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
