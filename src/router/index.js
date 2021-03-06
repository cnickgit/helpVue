import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../views/Login.vue'
import Blogs from '../views/Blogs.vue'
import BlogEdit from '../views/BlogEdit.vue'
import BlogDetail from '../views/BlogDetail.vue'
import HomePage from "@/home/homePage";
import My from "@/page/my.vue";
import UserLogin from "@/components/Login.vue";
import MarkingRecord from "../views/MarkingRecord";
import CustomerService from "../views/CustomerService";
import Mark from "../views/Mark";

Vue.use(VueRouter)


const routes = [
  {
    path: '/HomePage',
    name: 'HomePage',
    component: HomePage,
    meta: {
      showTab:true,
      title: '照妖镜'
    }
  },
  {
    path: '/Mark',
    name: 'Mark',
    component: Mark,
    meta: {
      showTab:true,
      title: '照妖镜'
    }
  },
  {
    path: '/CustomerService',
    name: 'CustomerService',
    component: CustomerService,
    meta: {
      showTab:true,
      title: '照妖镜'
    }
  },
  {
    path: '/MarkingRecord',
    name: 'MarkingRecord',
    component: MarkingRecord,
    meta: {
      showTab:true,
      title: '照妖镜'
    }
  },
  {
    path: '/UserLogin',
    name: 'UserLogin',
    component: UserLogin,
    meta: {
          showTab:false,
          title: '照妖镜'
    }
  },
  // {
  //   path: '/AddTokenPage',
  //   name: 'AddTokenPage',
  //   component: AddTokenPage
  // },
  // {
  //   path: '/',
  //   name: 'HomePage',
  //   component: HomePage
  // },
  {
    path: '/My',
    name: 'My',
    component: My,
    meta: {
          showTab:true,
          title: '照妖镜'
    }
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: Login
  // },
  {
    path: '/blog/add',
    name: 'BlogAdd',
    component: BlogEdit,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/blog/:blogId',
    name: 'BlogDetail',
    component: BlogDetail
  },
  {
    path: '/blog/:blogId/edit',
    name: 'BlogEdit',
    component: BlogEdit,
    meta: {
      requireAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  if(to.meta.title){
    document.title = to.meta.title
  }
  next();
})

export default router
