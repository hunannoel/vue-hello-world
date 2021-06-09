import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
let a8 = 90;
new Vue({
  render: (hello) => hello(App),
}).$mount('#app');
