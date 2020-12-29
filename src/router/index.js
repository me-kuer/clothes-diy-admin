import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Layout/Index'
import Layout from "@/components/Layout/Layout"
import UserList from "@/components/User/UserList"
import Login from '@/components/User/Login'
import AddGoods from "@/components/Goods/AddGoods"
import GoodsList from "@/components/Goods/GoodsList"
import PictureList from "@/components/Picture/PictureList"
import AddPicture from "@/components/Picture/AddPicture"
import OrderList from "@/components/Order/OrderList"

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        component: Layout,
        children: [
            // 默认子路由
            {
                path: "/",
                name: "Index",
                component: Index
            },{
                path: "user/list",
                name: "UserList",
                component: UserList
            },{
                path: "goods/add",
                name: "AddGoods",
                component: AddGoods
            },{
                path: "goods/list",
                name: "GoodsList",
                component: GoodsList
            },{
                path: "picture/add",
                name: "AddPicture",
                component: AddPicture
            },{
                path: "picture/list",
                name: "PictureList",
                component: PictureList
            },{
                path: "order/list",
                name: "OrderList",
                component: OrderList
            }
        ]
    },{
      path: "/login",
      name: "Login",
      component: Login
    },
  ]
})