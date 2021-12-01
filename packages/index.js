/*
 * @Author: jinx
 * @Date: 2021-12-01 17:40:05
 * @LastEditTime: 2021-12-01 20:39:19
 * @LastEditors: jinx
 * @Description: 入口文件
 * @FilePath: /xburner-ui/index.js
 */
const DEViewUI = {
  init: async (platform = 'web') => {
    const RESULT = { mobile: (await import('./platform/mobile')).default }
    if (platform === 'web') RESULT.web = (await import('./platform/web')).default
    return RESULT
  }
}

export default DEViewUI
// 插件的功能方法写在install方法里。因为install内的this指向的是plugin对象自身，扩展性更好。

// import mobile from  './platform/mobile'
// import web from  './platform/web'
// 默认全局注册组件列表
// const components = [
//   ...web
// ]

// const install = function(Vue) {
//   // 判断是否安装，安装过就不继续往下执行
//   if (install.installed) return
//   install.installed = true
//   // 遍历注册所有组件
//   components.forEach(component => Vue.component(component.name, component))
// }

// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }

// // 全局安装过的组件
// const installComponents = components.reduce((acc, c) => {
//   acc[c.name] = c
//   return acc
// }, {})

// export default {
//   install,
//   version: '1.0.0',
//   author: 'Beige',
//   // 所有组件，必须具有install，才能使用Vue.use()
//   ...installComponents
// }
