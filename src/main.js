import Vue from 'vue'
import App from './App'
import Router from './router'

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  Router,
  components: { App },
  template: '<App/>'
})
