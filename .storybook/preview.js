/*
 * @Author: jinx
 * @Date: 2021-12-02 17:04:46
 * @LastEditors: jinx
 * @LastEditTime: 2021-12-02 21:38:40
 * @Descripttion: 其他配置信息
 * @path: /xburner-ui/.storybook/preview.js
 */
import viewports from "./viewports";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: viewports, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'someDefault',
  },
}