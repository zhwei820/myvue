import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import List from '../views/List'
import Lazyload from '../views/Lazyload'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/lazyload',
      component: Lazyload
    }
  ]
})
