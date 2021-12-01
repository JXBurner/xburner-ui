/*
 * @Author: jinx
 * @Date: 2021-12-01 15:39:14
 * @LastEditTime: 2021-12-01 15:51:33
 * @LastEditors: jinx
 * @Description:
 * @path: 
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // todo 临时解决 TypeError: Cannot read property 'range' of null
    // https://github.com/babel/babel-eslint/issues/815#issuecomment-580670577
    // 最终解决 -> https://github.com/eslint/eslint/issues/13066#issuecomment-601944389
    'template-curly-spacing': 'off',
    'indent': 'off'

  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  }
}
