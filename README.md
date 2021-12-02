<div align="center">
  <img alt="logo" src="@/assets/images/compoent.png" width="120" height="120" style="margin-bottom: 10px;">
  <h2 align="center">deview-ui</h2>
  <h3 align="center">UI组件库</h3>
  <h4 align="center" style="margin: 20px">基于Element UI Vant Echarts封装帮助快速开发表单、表格组件</h4>

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
npm install deview-ui | npm install deview-ui@版本号
```

## 引入
main.js
``` javascript

import DEViewUI from 'deview-ui'
Vue.use(DEViewUI)

```

## 使用
<LdWInput 
  v-model.lazy="testVal"
/>

<br />
<br />

# 项目依赖
* PC端 —— Element UI
* 移动端 —— Vant
* 视图 —— Echarts
<br />
<br />

# 组件架构
## 包架构说明
![IMAGE](@/assets/images/image.png)

* index.js —— 对外入口文件，该文件抛出 DEViewUI ，便于引入使用
* utils —— 公共工具类方法文件目录
* config —— 常量目录
* components —— 原生组件目录
* elementui —— 基于Element UI封装的组件目录
  * basic —— 基础组件目录
  * index.js —— 组件导出文件
* vant —— 基于Vant封装的组件目录
* echarts —— 基于Echarts封装的组件目录