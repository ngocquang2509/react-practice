import React from 'react';
import Popup from './index';

export default {
  title: 'Popup',
  component: Popup,
};

const Template = (args) => <Popup {...args} />;
export const Default = Template.bind({});
Default.args = {
  title: 'Popup',
  label: 'Input',
};
