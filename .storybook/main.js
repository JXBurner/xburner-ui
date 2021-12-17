/*
 * @Author: jinx
 * @Date: 2021-12-03 09:56:50
 * @LastEditors: jinx
 * @LastEditTime: 2021-12-17 17:36:54
 * @Descripttion: 
 * @path: 
 */
const path = require("path");
module.exports = { // 入口文件，配置插件，webpack等
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [ // 需要引入的插件
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-notes",
    "@storybook/addon-actions",
    "@storybook/addon-docs"
  ],
  "framework": "@storybook/vue",
  "webpackFinal": async (config, {
    configType
  }) => {
    config.resolve.alias = Object.assign(config.resolve.alias, {
      "@": path.join(__dirname, "../packages"),
      "@styles": path.join(__dirname, "../packages/styles")
    });
    config.module.rules.push({
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader'],
    });
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "vue-style-loader",
        "css-loader",
        "resolve-url-loader", // 用于重写路径，解决https://webpack.docschina.org/loaders/sass-loader/#url-%E7%9A%84%E9%97%AE%E9%A2%98
        {
          loader: "sass-loader",
          options: {
            sourceMap: true // 要使用resolve-url-loader得开启sourceMap
          }
        }
      ],
      include: path.resolve(__dirname, "../")
    });
    return config;
  },
}