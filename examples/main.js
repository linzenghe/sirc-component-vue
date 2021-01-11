/*
 * @Descripttion:
 * @Author: linzenghe
 * @Date: 2021-01-08 16:24:54
 * @LastEditors: linzenghe
 * @LastEditTime: 2021-01-11 17:39:18
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import DemoBlock from './components/DemoBlock'
Vue.component('DemoBlock', DemoBlock)

import sircUi from '../packages'
import './assets/common.scss' // 公共样式

import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

router.afterEach(() => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
})

Vue.use(sircUi)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
