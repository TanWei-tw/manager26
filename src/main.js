import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 导入elmet
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 导入css
import "./assets/base.css"
// 导入axios插件
import VueAxios from './lib/vue.axios';
Vue.use(VueAxios);
// 导入rotuer插件
import router from "./lib/rotuer"

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
