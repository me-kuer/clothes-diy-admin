import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Layout/Index'
import Layout from "@/components/Layout/Layout"
import UserList from "@/components/User/UserList"
import Login from '@/components/User/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        component: Layout,
        children: [
            // 默认子路由
            {
                path: "",
                name: "Index",
                component: Index
            },{
                path: "user/list",
                name: "UserList",
                component: UserList
            }
        ]
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
  ]
})