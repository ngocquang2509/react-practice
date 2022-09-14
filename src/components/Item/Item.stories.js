import React from 'react'
import Item from './index'

export default {
  title: 'Item',
  component: Item
}

const Template = args => <Item {...args} />
export const Default = Template.bind({})
Default.args = {
  name: 'Item 1',
  price: 100,
  category: 'Category 1',
  image:
    'https://assets.adidas.com/images/w_600,f_auto,q_auto/ce8a6f3aa6294de988d7abce00c4e459_9366/Breaknet_Shoes_White_FX8707_01_standard.jpg'
}
