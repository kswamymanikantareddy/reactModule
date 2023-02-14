import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextVariant from './TextVariants';
export default {
  title: 'Atoms/TextVariant',
  component: TextVariant,
  argTypes: {
    onClick:{action:'clicked'}
  },
} as ComponentMeta<typeof TextVariant>

const Template:ComponentStory<typeof TextVariant>=(args)=> <TextVariant {...args}/>

export const TextVariantComponent = Template.bind({});
TextVariantComponent.args={
  variant:'h6',
 color:'',
 children:'Buying'
}