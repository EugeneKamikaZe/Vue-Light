import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import router from './router/index';

Vue.config.productionTip = false;
Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
