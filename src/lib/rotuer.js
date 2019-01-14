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
  });
  router.beforeEach((to, from, next) => {
    // ...
    if(to.path==="/login"){
        next();
    }else{
        let token=window.sessionStorage.getItem('token');
        if(token){
           next();
        }else{
            //    this.$message({
            //   message: '要先登陆哦',
            //   type: 'warning'
            // });
            // Vue.prototype.$message.error('要先登陆哦')
             next('/login')
        }
    }
  })
  export default router;