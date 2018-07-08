// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './app'
import chameleonComponent from '../src/index';

Vue.use(chameleonComponent);

// 开启debug模式
Vue.config.debug = true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<app/>',
  components: {
    app
  }
});
