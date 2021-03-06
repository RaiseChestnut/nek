import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'assets/icon/iconfont.css'
import 'assets/icon/iconfont'
import store from './store'
import './plugins/element.js'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
