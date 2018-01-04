import Vue from 'vue'
import Router from 'vue-router'
import routerOne from 'components/router-one'
import routerTwo from 'components/router-two'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/routerOne'
    },
    {
      path: '/routerOne',
      component: routerOne
    },
    {
      path: '/routerTwo',
      component: routerTwo
    }
  ]
})
