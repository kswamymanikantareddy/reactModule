import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './index';
export default {
  title: 'Stories/Atoms/Button',
  component: Button,
  argTypes: {
    onClick:{action:'clicked'}
  },
} as ComponentMeta<typeof Button>;

const Template:ComponentStory<typeof Button>=(args)=><Button {...args}/>

export const Bitcoin = Template.bind({});
Bitcoin.args={
  label:'Bitcoin',
  variant:'orange'
}
export const Xrp= Template.bind({});
Xrp.args={
  label:'XRP',
 variant:'grey'

}
export const Polkadot = Template.bind({});
Polkadot.args={
  label:'Polkadot',
  variant:'pink'

}
export const Ethereum = Template.bind({});
Ethereum.args={
  label:'Ethereum',
  variant:'lightgrey'

}
export const Tether = Template.bind({});
Tether.args={
  label:'Tether',
  variant:'blue'

 
}
export const Ethereum2= Template.bind({});
Ethereum2.args={
  label:'Ethereum 2',
variant:'drakgrey'
}
export const DodgeCoin= Template.bind({});
DodgeCoin.args={
  label:'Dodge Coin',
  variant:'beige'
}

