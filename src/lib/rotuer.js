import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import index from "../components/index.vue"
import login from "../components/login.vue"
let routes=[
    {
        path:'/login',
        component:login
    },{
        path:'/',
        component:index
    }
]
let router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })
  export default router;