// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import Vuex from 'vuex'
import {postRequest} from './utils/api'
import {putRequest} from './utils/api'
import {getRequest} from './utils/api'
import {deleteRequest} from './utils/api'

Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(vueRouter);

//挂载
Vue.prototype.axios=axios
Vue.prototype.postRequest=postRequest
Vue.prototype.getRequest=getRequest
Vue.prototype.putRequest=putRequest
Vue.prototype.deleteRequest=deleteRequest


Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
  let isLogin=sessionStorage.getItem("isLogin");
  //注销
  if(to.path=='/logout')
  {
    //清空
    sessionStorage.clear();
    //跳转到登录页面
    next({path:'/login'});
  }else if (to.path=='/login')
  {
    if (isLogin != null){
      next({path:'/main/1'});
    }
  } else if
    (isLogin == null){
      next({path:'/login'});
    }
    next();
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
