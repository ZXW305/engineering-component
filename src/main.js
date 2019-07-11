import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import { request } from "./utils/request";
Vue.prototype.$request = request
Vue.prototype.$axios = axios
Vue.config.productionTip = false
import { Toast  } from 'vant'
import { router } from './router'
import { store } from "./store";

Vue.use(Toast)
new Vue({
  render: h => h(App),
	router,
	store,
}).$mount('#app')
