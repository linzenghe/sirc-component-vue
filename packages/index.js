/*
 * @Descripttion:
 * @Author: linzenghe
 * @Date: 2021-01-11 10:27:07
 * @LastEditors: linzenghe
 * @LastEditTime: 2021-01-11 14:06:12
 */
import SButton from './Button'
const components = [SButton]

const install = function (Vue) {
  if (install.installed) return
  install.installed = true
  // 遍历注册所有组件
  components.map(component => Vue.use(component))
}

// 检测到Vue才执行，因框架是基于Vue的
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  // 所有组件，必须具有install，才能使用Vue.use()
  ...components,
}

