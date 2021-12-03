import MyButton from '../../packages/components/button/Button.vue';
import { action } from '@storybook/addon-actions';
import buttonReadme from '../../packages/components/button/buttonReadme.md' // 引入markdown文件
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Basic/Button',
  component: MyButton,
  // 配置markdown文件
  parameters: {
    notes: buttonReadme,
  },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  // 组件展示的时候，可能需要外层父元素和一些特定样式 增加 decorators，以button为例，加背景展示
  decorators: [() => ({
    template: '<div style="overflow:hidden;background:pink;height: 200px"><story /></div>'
  })],
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />',
  methods: { onClick: action('onClick') },
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
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

