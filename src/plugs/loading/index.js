/**
 * 全局loading组件
 */
import LoadingComponent from './index.vue';

const Index = {};

Index.install = function (Vue) {
  const LoadingConstructor = Vue.extend(LoadingComponent);
  const instance = new LoadingConstructor();
  instance.$mount(document.createElement('div'));
  document.body.appendChild(instance.$el);
  Vue.prototype.$loadingX = {
    show(msg) {
      instance.text = msg;
      instance.status = true;
    },
    hide() {
      instance.text = '';
      instance.status = false;
    }
  };
};
export default Index;