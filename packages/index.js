/*
 * @Author: jinx
 * @Date: 2021-12-01 17:40:05
 * @LastEditTime: 2021-12-02 10:19:41
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
