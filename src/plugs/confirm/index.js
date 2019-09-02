import ConfirmComponent from './index.vue';

const Index = {};

Index.install = function (Vue) {
  const ConfirmConstructor = Vue.extend(ConfirmComponent);
  const instance = new ConfirmConstructor();
  instance.$mount(document.createElement('div'));
  document.body.appendChild(instance.$el);
  Vue.prototype.$confirm = (msg, animation) =>{
    instance.msg = msg || {};
    animation ? instance.animation = animation : '';
    instance.state = true;
  };
};
export default Index;