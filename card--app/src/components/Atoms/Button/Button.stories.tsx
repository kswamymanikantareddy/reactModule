import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';
export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    onClick:{action:'clicked'}
  },
} as ComponentMeta<typeof Button>

const Template:ComponentStory<typeof Button>=(args)=> <Button {...args}/>

export const ButtonComponent = Template.bind({});
ButtonComponent.args={
  variant:'contained',
  label:'BUY NOW'
}