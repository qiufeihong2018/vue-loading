import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _import = file => () => import('@/pages/' + file + '.vue')

export const constantRouterMap = [
  { path: '*', redirect: '/loading' },
  { path: '/loading', component: _import('loading') }
]

export default new Router({
  linkActiveClass: 'active-link',
  mode: 'history',
  routes: constantRouterMap
})
