/*
 * @Author: jinx
 * @Date: 2021-12-01 11:30:57
 * @LastEditors: jinx
 * @LastEditTime: 2021-12-02 11:34:41
 * @Descripttion: 
 * @path: 
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import DEViewUI from '../packages/index.js'
Vue.use(DEViewUI)
Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
