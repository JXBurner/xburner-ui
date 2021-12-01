<!--
 * @Author: jinx
 * @Date: 2021-12-01 18:04:02
 * @LastEditTime: 2021-12-01 18:24:45
 * @LastEditors: jinx
 * @Description:
 * @FilePath: /xburner-ui/packages/uiComponents/web/base/LdInput/index.vue
-->
<template>
  <el-input
    v-model="model"
    clearable
    :type="['text', 'number'].includes(attrs.type) ? 'text' : attrs.type"
    :disabled="disabled"
    :placeholder="placeholder"
    :rows="attrs.rows"
    :maxlength="valueMaxLength"
    resize="none"
    @input="handlerInput"
    @change="handlerChange"
    @blur="handlerBlur"
    @focus="handlerFocus"
    @clean="handelrClean"
  />
</template>

<script>
  import { filterNull, filterFloatNumber } from '../../../../utils/filters'
  export default {
    name: 'LdWInput',
    props: {
      // eslint-disable-next-line vue/require-default-prop
      value: [Number, String],
      disabled: { // 禁用
        type: Boolean,
        default: false
      },
      placeholder: { // 输入框占位文本
        type: String,
        default: ''
      },
      valueMaxLength: {
        type: Number,
        default: null
      },
      attrs: {
        type: Object,
        default: () => {
          return {
            type: 'text', // 类型 text，textarea 和其他 原生 input 的 type 值
            rows: 4 // 输入框行数，只对 type="textarea" 有效
          }
        }
      }
    },
    computed: {
      model: {
        get () {
          return this.value
        },
        set (v) {
          this.$emit('input', v)
        }
      }
    },
    methods: {
      handlerInput (v) {
        if (!this.attrs.allowEmoji) {
          this.model = filterNull(v)
        }

        if (this.attrs.type === 'number') {
          this.model = filterFloatNumber(v)
        }
      },
      /**
       * change事件
       * @author qgy
       * @date 2021-08-25 14:50
       */
      handlerChange () {
        this.$emit('change', ...arguments)
      },
      /**
       * clear事件 在点击由 clearable 属性生成的清空按钮时触发
       * @author qgy
       * @date 2021-08-25 14:56
       * @param {*}
       * @returns
       */
      handelrClean () {
        this.$emit('clean', ...arguments)
      },
      /**
       * focus事件 在 Input 获得焦点时触发
       * @author qgy
       * @date 2021-08-25 14:54
       * @param {*}
       * @returns
       */
      handlerFocus () {
        this.$emit('focus', ...arguments)
      },
      /**
       * blur事件 在 Input 失去焦点时触发
       * @author qgy
       * @date 2021-08-25 14:55
       * @param {*}
       * @returns
       */
      handlerBlur () {
        this.$emit('blur', ...arguments)
      }
    }
  }

</script>
