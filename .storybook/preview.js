/*
 * @Author: jinx
 * @Date: 2021-12-02 17:04:46
 * @LastEditors: jinx
 * @LastEditTime: 2021-12-17 18:16:30
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
  backgrounds: { // 故事背景色
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
    ],
  },
}
export const globalTypes = {
  locale: {
    name: 'locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      // Array of plain string values or MenuItem shape (see below)
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'fr', right: '🇫🇷', title: 'Français' },
        { value: 'es', right: '🇪🇸', title: 'Español' },
        { value: 'zh', right: '🇨🇳', title: '中文' },
        { value: 'kr', right: '🇰🇷', title: '한국어' },
      ]
    },
  },
};