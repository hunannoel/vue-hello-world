import Vue from 'vue';
import App from './App.vue';
Vue.config.productionTip = false;
var sjkdj;
new Vue({
  render: (hello) => hello(App),
}).$mount('#app');
