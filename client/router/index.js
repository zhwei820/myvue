import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import List from '../views/List'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/',
      component: List
    }
  ]
})
