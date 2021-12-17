/*
 * @Author: jinx
 * @Date: 2021-12-02 17:04:46
 * @LastEditors: jinx
 * @LastEditTime: 2021-12-03 11:21:11
 * @Descripttion: 
 * @path: /xburner-ui/stories/componentsStorise/page/Page.stories.js
 */
import MyPage from '../../../packages/components/page/Page.vue';
import * as HeaderStories from '../header/Header.stories';

export default {
  title: 'Basic/Page',
  component: MyPage,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyPage },
  template:
    '<my-page :user="user" @onLogin="onLogin" @onLogout="onLogout" @onCreateAccount="onCreateAccount" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/vue/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
