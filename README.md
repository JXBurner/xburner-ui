<!--
 * @Author: jinx
 * @Date: 2021-12-01 17:15:54
 * @LastEditTime: 2021-12-01 20:49:06
 * @LastEditors: jinx
 * @Description: readme
 * @FilePath: /xburner-ui/README.md
-->

<div align="center">
  <img alt="logo" src="@/assets/images/compoent.png" width="120" height="120" style="margin-bottom: 10px;">
  <h2 align="center">DEViewUI</h2>
  <h3 align="center">UI组件库</h3>
  <h4 align="center" style="margin: 20px">基于Element UI Vant封装帮助快速开发表单、表格组件</h4>

  <a align="center" href="https://github.com/JXBurner/xburner-ui" style="margin: 20px">GitHub地址：https://github.com/JXBurner/xburner-ui</a>

  <div align="center" style="margin-bottom: 20px">
    <span style="font-size: 12px;padding: 2px 5px;border-radius: 2px;background: #5d5d5d;margin: 5px;">
      <span>版本:</span>
      <span>0.1.0</span>
    </span>
  </div>
</div>

<br />
<br />

# 使用说明
## 安装

``` javascript
npm install DEViewUI | npm install DEViewUI@版本号
```

## 引入

``` javascript

import DEViewUI from 'DEViewUI'
Vue.use(inputCreate, {
  request: { request, requestGet },
  platform: '平台名称', // 需要引入的平台 web/mobile
  DEViewUI: DEViewUI.init('平台名称')
})

// 案例
Vue.use(inputCreate, {
  request: { request, requestGet },
  platform: 'web',
  DEViewUI: DEViewUI.init('web')
})

```

## 使用
DEViewUI接受一个参数platform代表平台类型，通过 Vue.use 方法传入request请求，平台类型，通过init调用引入平台类型的组件地址。（双端共有:platform=web时默认引入web和mobile组件）

<br />
<br />

# 项目依赖
* PC端 —— Element UI
* 移动端 —— vant
<br />
<br />

# 组件架构
## 包架构说明
![IMAGE](@/assets/images/image.png)

<!-- * 入口文件 ——  /  index.js文件 -->
* config —— 常量目录
* nativeComponents —— 原生组件目录
* uiComponents —— 平台组件目录
  * minxins —— 公用的数据接口处理模块 
  * mobile —— 移动端组件
      * base —— 基础组件
      * business —— 业务组建
  * web ——  PC端组件
    * base —— 基础组件
    * business —— 业务组件
* platform —— 平台入口
  * mobile.js —— 移动端平台入口 
  * web.js —— PC端平台入口
* utils —— 公共工具类方法文件目录
* index.js —— 对外入口文件，该文件抛出 DEViewUI ，便于引入使用
