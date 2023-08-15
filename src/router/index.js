import { createRouter, createWebHistory } from "vue-router";

import C_Home from "../views/Com_page/C_Home.vue";
import M_Home from "../views/Mem_page/M_home.vue";
import A_Home from "../views/Admin_page/A_Home.vue";
import Login from "../views/Com_page/Login.vue";
import Register from "../views/Com_page/Register.vue";


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
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/a_home",
        name: "A_Home",
        component: A_Home,
        children: [
          {
              path: "achievementjudge",
              name: "achievementjudge",
              component: () => import("../views/Admin_page/AchievementJudge.vue"),
          },
          {
            path: "taskjudge",
            name: "taskjudge",
            component: () => import("../views/Admin_page/TaskJudge.vue"),
        },
        ],
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
            children: [
              {
                path: "remarkone",
                name: "remarkone",
                component: () => import("../views/Com_page/RemarkOne.vue"),
              }
            ]
        },        
        {
            path: "c_information",
            name: "c_information",
            component: () => import("../views/Com_page/C_Information.vue"),
            children: [
              {
                path: "myteam",
                name: "myteam",
                component: () => import("../views/Com_page/MyTeam.vue"),
                children: [
                  {
                    path: "member_of_myteam",
                    name: "member_of_myteam",
                    component: () => import("../views/Com_page/MemberOfMyTeam.vue"),
                  }
                ]
              }
            ]
        },
        
    ],
    },

  {
    path: "/m_home",
    name: "M_Home",
    component: M_Home,
    children: [
      {
        path: "achievements",
        name: "achievements",
        component: () => import("../views/Mem_page/Achievements.vue"),
      },
      {
        path: "m_information",
        name: "m_information",
        component: () => import("../views/Mem_page/M_Information.vue"),
      },
      {
        path: "teamsetup",
        name: "teamsetup",
        component: () => import("../views/Mem_page/TeamSetup.vue"),
      },
      {
        path: "task",
        name: "task",
        component: () => import("../views/Mem_page/Task.vue"),
      },
      {
        path: "addachievement",
        name: "addachievement",
        component: () => import("../views/Mem_page/AddAchievement.vue")
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
const router = createRouter({
    history: createWebHistory("crowdOS"),
    routes,
    linkActiveClass: "active",
})

export default router;
