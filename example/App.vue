<!--
 * @Author: jinx
 * @Date: 2021-12-01 11:30:57
 * @LastEditors: jinx
 * @LastEditTime: 2021-12-01 18:29:25
 * @Descripttion: 
 * @path: 
-->
<template>
  <div id="app">
    <testInput msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import testInput from './test/test-input.vue'

export default {
  name: 'App',
  components: {
    testInput
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
