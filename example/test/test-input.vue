<!--
 * @Author: jinx
 * @Date: 2021-12-01 11:30:57
 * @LastEditors: jinx
 * @LastEditTime: 2021-12-01 20:41:32
 * @Descripttion: 
 * @path: 
-->
<template>
  <div class="app-container test-component">
    <LdWInput 
      v-model.lazy="testVal"
    />
  </div>
</template>

<script>
import LdWInput from '../../packages/uiComponents/web/base/LdInput/index'

export default {
  name: 'TestInput',
  components: {
    LdWInput
  },
  data() {
    return {
      testVal: '',
    }
  },
  computed: {
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss"></style>
