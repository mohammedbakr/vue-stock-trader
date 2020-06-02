import Vue from 'vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource';

import { routes } from "./routes";
import store from "./store/store";
import App from './App.vue'

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vue-stock-trader-226d2.firebaseio.com/';

Vue.filter('currency', value => {
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
