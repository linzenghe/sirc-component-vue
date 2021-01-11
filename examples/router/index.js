
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/preface' },
    {
      path: '/test',
      name: 'test',
      component: () => import(/* webpackChunkName: "about" */ '../docs/test.md'),
    },
  ],
})

