import Vue from 'vue'
import store from './store'
import VueRouter from 'vue-router'
import MainInstallation from './views/main/Installation'
import MainHello from './views/main/Hello'
import MainPrivate from './views/main/Private'
import UserRegister from './views/user/Register'
import UserLogin from './views/user/Login'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes:	[
      {
        path: '/',
        name: 'MainInstallation',
        component: MainInstallation,
        
      },

      {
        path: '/main/hello/',
        name: 'MainHello',
        component: MainHello,
      },

      {
        path: '/main/private',
        name: 'MainPrivate',
        component: MainPrivate,
        meta: {
          requiresAuth: true
        }
      },

      {
        path: '/user/register',
        name: 'UserRegister',
        component: UserRegister,
      },

      {
        path: '/user/login',
        name: 'UserLogin',
        component: UserLogin,
      },
		],
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/user/login') 
  } else {
    next() 
  }
})

export default router;
