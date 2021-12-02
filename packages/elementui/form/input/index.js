/*
 * @Author: jinx
 * @Date: 2021-12-01 17:57:38
 * @LastEditTime: 2021-12-02 11:50:28
 * @LastEditors: jinx
 * @Description:
 * @FilePath: /xburner-ui/packages/uiComponents/web/base/index.js
 */
// 基础组件
import LdWInput from './index.vue'
LdWInput.install = vue => {
  vue.component(LdWInput.name, LdWInput)
}
export default LdWInput