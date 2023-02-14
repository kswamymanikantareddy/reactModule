import { ComponentStory, ComponentMeta } from '@storybook/react';

import BuyingCard from './BuyingCard';
export default {
  title: 'Molecules/BuyingCard',
  component: BuyingCard,
  argTypes: {
    onClick:{action:'clicked'}
  },
} as ComponentMeta<typeof BuyingCard>

const Template:ComponentStory<typeof BuyingCard>=()=> <BuyingCard/>

export const BuyingCardComponent = Template.bind({});
