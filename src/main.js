import Vue from 'vue';
import App from './App.vue';
var aa = 10;
Vue.config.productionTip = false;
new Vue({
  render: (hello) => hello(App),
}).$mount('#app');
