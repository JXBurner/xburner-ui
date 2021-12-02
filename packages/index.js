/*
 * @Author: jinx
 * @Date: 2021-12-01 17:40:05
 * @LastEditTime: 2021-12-02 16:38:27
 * @LastEditors: jinx
 * @Description: 入口文件
 * @FilePath: /xburner-ui/index.js
 */
// 插件的功能方法写在install方法里。因为install内的this指向的是plugin对象自身，扩展性更好。
import elementuiComps from './elementui'
// 默认全局注册组件列表
const components = [
  ...elementuiComps,
]

const install = function(Vue) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return
  install.installed = true
  // 遍历注册所有组件
  components.forEach(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 全局安装过的组件
const installComponents = components.reduce((acc, c) => {
  acc[c.name] = c
  return acc
}, {})

export default {
  install,
  version: '0.1.1',
  author: 'jinx',
  // 所有组件，必须具有install，才能使用Vue.use()
  ...installComponents
}
