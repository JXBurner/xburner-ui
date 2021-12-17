/*
 * @Author: jinx
 * @Date: 2021-12-03 09:56:50
 * @LastEditors: jinx
 * @LastEditTime: 2021-12-17 18:16:44
 * @Descripttion: 按钮文档配置
 * @path: /xburner-ui/stories/componentsStorise/button/Button.stories.js
 */
import MyButton from '../../../packages/components/button/Button.vue';
import buttonReadme from '../../../packages/components/button/buttonReadme.md' // 引入markdown文件
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Basic/Button',
  component: MyButton,
  parameters: {
    notes: buttonReadme, // 配置markdown文件
    docs: { // 使用 null 删除文档, 将 DocsPage 模板替换为您自己的模板以自定义其内容。
      page: null,
      source: { // 源代码可视化
        type: 'code',
      },
      description: {
        component: 'Some component _markdown_',
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { 
      control: 'color',
      table: {
        category: 'Colors',
      },
    },
    // Assigns the argType to the Text category
    label: {
      table: {
        category: 'Text',
      },
    },
    // Assigns the argType to the Events category
    onClick: {
      table: {
        category: 'Events',
      },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  //装饰器 组件展示的时候，可能需要外层父元素和一些特定样式 增加 decorators，以button为例，加背景展示
  decorators: [() => ({
    template: '<div style="overflow:hidden;background:#fff;height: 100px"><story /></div>'
  })]
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />'
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Click me',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'medium',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};