import Vue from 'vue';
import Router from 'vue-router';

// 
Vue.use(Router);

const routers = [
  
];

const routerConfig = {
  // mode: 'history',
  // linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: routers
};

const vueRouter = new Router(routerConfig);

//回滚到页面顶部
// vueRouter.afterEach((to, from, next) => {
//   if (to.name !== 'mhChild_index') {
//     window.scrollTo(0, 0);
//   }
// });

export default vueRouter;
