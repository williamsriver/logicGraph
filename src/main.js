import Vue from 'vue'
import App from './App.vue'
import gojs from 'gojs'
import vuetify from './plugins/vuetify';
import axios from "axios";

axios.defaults.timeout = 5000;

Vue.config.productionTip = false
Vue.prototype.axios = axios;

new Vue({
  gojs,
  vuetify,
  render: h => h(App)
}).$mount('#app')
