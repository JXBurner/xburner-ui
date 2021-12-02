/*
 * @Author: jinx
 * @Date: 2021-12-02 18:14:24
 * @LastEditors: jinx
 * @LastEditTime: 2021-12-02 18:15:44
 * @Descripttion: 配置主题
 * @path: /xburner-ui/.storybook/manager.js
 */
import { addons } from '@storybook/addons';
import theme from './theme.js'

addons.setConfig({
  theme: theme,
});