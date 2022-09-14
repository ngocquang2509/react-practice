import React from 'react'
import Button from './index'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    handleClick: { action: 'clicked' },
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' }
  }
}

const Template = args => <Button {...args} />
export const Default = Template.bind({})
Default.args = {
  label: 'Default',
  backgroundColor: '#fff',
  textColor: '#000'
}

export const Edit = Template.bind({})
Edit.args = {
  label: 'Edit',
  backgroundColor: '#ffcf00',
  textColor: '#000'
}

export const Delete = Template.bind({})
Delete.args = {
  label: 'Delete',
  backgroundColor: '#ff0000',
  textColor: '#000'
}
