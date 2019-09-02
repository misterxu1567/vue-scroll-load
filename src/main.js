import Vue from 'vue';
import App from './App.vue';
// import router from './router';
// 自定义模块
import Toast from './plugs/toast';
import Loading from './plugs/loading';

Vue.use(Toast);
Vue.use(Loading);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
