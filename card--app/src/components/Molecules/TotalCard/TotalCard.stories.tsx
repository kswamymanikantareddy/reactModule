import { ComponentStory, ComponentMeta } from '@storybook/react';

import TotalCard from './TotalCard';
export default {
  title: 'Molecules/TotalCard',
  component:TotalCard,
  argTypes: {
    onClick:{action:'clicked'}
  },
} as ComponentMeta<typeof TotalCard>

const Template:ComponentStory<typeof TotalCard>=()=> <TotalCard/>

export const TotalCardComponent = Template.bind({});
