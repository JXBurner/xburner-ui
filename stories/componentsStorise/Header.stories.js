/*
 * @Author: jinx
 * @Date: 2021-12-02 17:04:46
 * @LastEditors: jinx
 * @LastEditTime: 2021-12-02 21:47:39
 * @Descripttion: 
 * @path: 
 */
import MyHeader from '../../packages/components/header/Header.vue';

export default {
  title: 'Basic/Header',
  component: MyHeader,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyHeader },
  template:
    '<my-header :user="user" @onLogin="onLogin" @onLogout="onLogout" @onCreateAccount="onCreateAccount" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
