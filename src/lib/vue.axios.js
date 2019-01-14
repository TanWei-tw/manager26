// 导入axios
import axios from 'axios';
// import Vue from 'vue'
import {Message} from 'element-ui';

// 设置基地址
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/';
// axios拦截器
// 修改请求
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  //  console.log(config);
   if(config.url.indexOf('/login')!=-1){
      // 
   }else{
    config.headers.Authorization=window.sessionStorage.getItem('token')
   }
   
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
// 响应设置
axios.interceptors.response.use(function (response) {
  // Do something with response data
  // console.log(response);
  if(response.data.meta.status==200){
    //  Vue.prototype.$message.success(response.data.meta.msg)
    Message.success(response.data.meta.msg)
  }else if(response.data.meta.status==400){
    // Vue.prototype.$message.error(response.data.meta.msg)
   Message.error(response.data.meta.msg)
  }
  
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

// 暴露出去 (Vue的插件)
export default {
  install(Vue) {
    // 4. 添加实例方法
    Vue.prototype.$axios = axios;
  }
}