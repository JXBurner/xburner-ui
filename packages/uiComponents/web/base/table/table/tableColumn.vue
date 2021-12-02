<!--
 * @Author: jinx
 * @Date: 2021-07-25 17:43:44
 * @LastEditors: jinx
 * @Descripttion: 多级表头
-->
<template>
  <el-table-column
    align="center"
    :label="thead.label"
  >
    <template v-for="(item,index) of thead.children">
      <el-table-column
        v-if="!item.children"
        :key="index+'-'+item.key"
        :label="item.label"
        :width="item.width"
        :sort-by="item.key"
        :sortable="item.sort"
        :show-overflow-tooltip="item.showOverflowTooltip"
        align="center"
      >
        <template #default="scope">
          <span
            v-if="item.formatter"
            @click="columnClick(scope.row,item,$event)"
            v-html="item.formatter(scope.row,scope.row[item.key],index)"
          />
          <span
            v-if="!item.formatter"
            @click="columnClick(scope.row,item,$event)"
          >{{ scope.row[item.key] }}</span>
        </template>
      </el-table-column>
      <tableColumn
        v-if="(item.children && item.children.length>0)"
        :key="index"
        :thead="item"
        :props="props"
        @colOptionFn="columnClick"
      />
    </template>
  </el-table-column>
</template>
<script>
export default {
  name: 'LdTableColumn',
  components: {},
  // eslint-disable-next-line vue/require-prop-types
  props: ['thead', 'props'],
  data () {
    return {}
  },
  computed: {
  },
  watch: {
    thead () {

    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    /**
     * 触发某一行的点击事件
     * @author: jinx
     * @Date: 2021-07-25 18:01:00
     * @param {*} row
     * @param {*} item
     * @param {*} event
     * @return {*}
     */
    columnClick (row, item, event) {
      this.$emit('colOptionFn', { row, item, event })
    }
  }
}
</script>
