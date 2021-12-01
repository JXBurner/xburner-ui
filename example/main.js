/*
 * @Author: jinx
 * @Date: 2021-12-01 11:30:57
 * @LastEditors: jinx
 * @LastEditTime: 2021-12-01 19:57:51
 * @Descripttion: 
 * @path: 
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
