import Vue from 'vue'
import Router from 'vue-router'
import Login from '../Views/Login'
import Home from '../Views/Home'
import Main from '../views/Main'
import MemberList from '../Views/Member/MemberList'
import MemberLevel from '../Views/Member/MemberLevel'
import NotFound from '../Views/NotFound.vue'
import Test1 from '../Views/Test1.vue'
import Test2 from '../Views/Test2.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      //登陆页
      path: '/login',
      name: 'Login',
      component: Login,
      hidden:true
    },

    //主页
    {
      path: '/home',
      name: '导航一',
      component: Home,
      children: [{
          path: '/test1',
          name: '选项一',
          component: Test1
        },
        {
          path: '/test2',
          name: '选项二',
          component: Test2
        },
      ]
    },
    // {
    //   //首页
    //   path:'/main/:name',
    //   name:'Main',
    //   component:Main,
    //   children:[
    //     {
    //       //会员列表
    //       path:'/member/list',
    //       name:'MemberList',
    //       component:MemberList

    //     },
    //     {
    //       //会员等级
    //       path:'/member/level/:id',
    //       name:'MemberLevel',
    //       component:MemberLevel,
    //       props:true

    //     }
    //   ]
    // },
    {
      //默认登陆页
      path: '/',
      name: 'Login',
      component: Login,
      hidden:true
    },
    // {
    //   path:'/goMain/:name',
    //   redirect:'/Main/:name'
    // },
    {
      path: '*',
      component: NotFound,
      hidden:true
    }

  ]
})
