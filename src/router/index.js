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
            path: "achievementjudgeone",
            name: "achievementjudgeone",
            component: () => import("../views/Admin_page/AchievementJudgeOne.vue"),
          },
          {
            path: "a_information",
            name: "a_information",
            component: () => import("../views/Admin_page/A_Information.vue"),
          },
          {
            path: "taskjudge",
            name: "taskjudge",
            component: () => import("../views/Admin_page/TaskJudge.vue"),
          },
          {
            path: "taskjudgeone",
            name: "taskjudgeone",
            component: () => import("../views/Admin_page/TaskJudgeOne.vue")
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
          path: "deliveredtask",
          name: "deliveredtask",
          component: () => import("../views/Com_page/DeliveredTask.vue"),
        },
        {
          path: "addtask",
          name: "addtask",
          component: () => import("../views/Com_page/AddTask.vue"),
        },        
        {
            path: "c_task",
            name: "c_task",
            component: () => import("../views/Com_page/C_Task.vue"),            
        },
        {
          path: "c_information",
          name: "c_information",
          component: () => import("../views/Com_page/C_Information.vue"),            
      },
        {
          path: "myteam",
          name: "myteam",
          component: () => import("../views/Com_page/MyTeam.vue"),
        },
        {
          path: "allmember",
          name: "allmember",
          component: () => import("../views/Com_page/AllMember.vue")
        },
        {
          path: "deliversuccess",
          name: "deliversuccess",
          component: () => import("../views/Com_page/DeliverSuccess.vue")
        },
      ],
    },

  {
    path: "/m_home",
    name: "M_Home",
    component: M_Home,
    children: [
      {
        path: "team",
        name: "team",
        component: () => import("../views/Mem_page/Team.vue"),
      },
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
      {
        path: "teaminformation",
        name: "teaminformation",
        component: () => import("../views/Mem_page/TeamInformation.vue")
      },
      {
        path: "tasksquare",
        name: "tasksquare",
        component: () => import("../views/Mem_page/TaskSquare.vue")
      },
      {
        path: "taskdescription",
        name: "taskdescription",
        component: () => import("../views/Mem_page/TaskDescription.vue")
      },
      {
        path: "bid",
        name: "bid",
        component: () => import("../views/Mem_page/Bid.vue")
      },
      {
        path: "bidsuccess",
        name: "bidsuccess",
        component: () => import("../views/Mem_page/BidSuccess.vue")
      },
      {
        path: "tasktaken",
        name: "tasktaken",
        component: () => import("../views/Mem_page/TaskTaken.vue")
      },
      {
        path: "achievementsmaken",
        name: "achievementsmaken",
        component: () => import("../views/Mem_page/AchievementsMaken.vue")
      },
      {
        path: "postachievementsuccess",
        name: "postachievementsuccess",
        component: () => import("../views/Mem_page/PostAchievementSuccess.vue")
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
