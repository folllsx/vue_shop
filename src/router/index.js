import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import HomeView from '../views/HomeView.vue'
=======
import myLogin from '@/components/myLogin.vue'
import myHome from '@/components/myHome.vue'
>>>>>>> login

Vue.use(VueRouter)

const routes = [
<<<<<<< HEAD
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
=======
  { path: '/', redirect: '/login' },
  { path: '/login', component: myLogin },
  { path: '/home', component: myHome }
>>>>>>> login
]

const router = new VueRouter({
  routes
})
<<<<<<< HEAD
=======
// 挂在路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
>>>>>>> login

export default router
