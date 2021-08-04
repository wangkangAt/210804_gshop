/**
 * 路由器对象模块
 */
//引入Vue,Vue-router
import Vue from "vue";
import VueRouter from "vue-router";
//引入四个组件
import Msite from "../pages/Msite/Msite.vue"
import Order from "../pages/Order/Order.vue"
import Profile from "../pages/Profile/Profile.vue"
import Search from "../pages/Search/Search.vue"
//引入Login组件
import Login from "../pages/Login/Login.vue"

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    //所有路由
    routes:[
        {
            path: '/msite',
            component: Msite,
            meta: {
              showFooter: true
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
              showFooter: true
            }
        },
        {
            path: '/order',
            component: Order,
            meta: {
              showFooter: true
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
              showFooter: true
            }
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: "/",
            redirect: "/msite"
        }
    ]
})
