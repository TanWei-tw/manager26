import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 导入elmet
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 导入css
import "./assets/base.css"

new Vue({
  render: h => h(App),
}).$mount('#app')
