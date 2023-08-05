import Vue from 'vue';
import VueRouter from 'vue-router';

import C_Home from "../views/Com_page/C_Home.vue";
import M_Home from "../views/Mem_page/M_home.vue";
import Login from "../views/Com_page/Login.vue";

Vue.use(VueRouter)

const routes =[
    {
        path:'/',
        redirect:'/login',
    },
    {
        path: "/login",
        name: "Login",
        component: Login, 
    },

    {
        path: "/c_home",
        name: "C_Home",
        component: C_Home,
    children: [
        {
            path: "taskdelivery",
            name: "taskdelivery",
            component: () => import("../views/Com_page/TaskDelivery.vue"),
        },
        {
            path: "remark",
            name: "remark",
            component: () => import("../views/Com_page/Remark.vue"),
        },
        {
            path: "c_information",
            name: "c_information",
            component: () => import("../views/Com_page/C_Information.vue"),
        },
    ],
    },

  {
    path: "/m_home",
    name: "M_Home",
    component: M_Home,
    children: [
      {
        path: "teamsetup",
        name: "teamsetup",
        component: () => import("../views/Mem_page/TeamSetup.vue"),
      },
    ],
  },
  //懒加载代码段
  // {
  //   path: "/xxx",
  //   name: "xxx",
  //   component: () =>
  //     import("../views/XXX.vue")
  // },
  //懒加载代码段
  // {
  //   path: "/xxx",
  //   name: "xxx",
  //   component: () =>
  //     import("../views/XXX.vue")
  // },
  //懒加载代码段
  // {
  //   path: "/xxx",
  //   name: "xxx",
  //   component: () =>
  //     import("../views/XXX.vue")
  // },
  //重定向
  // { path: "/home", redirect: "/" },
]
const router = new VueRouter({
    routes,
})

export default router;
