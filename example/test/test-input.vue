<!--
 * @Author: jinx
 * @Date: 2021-12-01 11:30:57
 * @LastEditors: jinx
 * @LastEditTime: 2021-12-02 11:42:53
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

export default {
  name: 'TestInput',
  components: {
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
