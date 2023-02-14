import { ComponentStory, ComponentMeta } from '@storybook/react'

import OrderCard from './OrderCard';
export default {
  title: 'Organisms/OrderCard',
  component:OrderCard,
  argTypes: {
    onClick:{action:'clicked'}
  },
} as ComponentMeta<typeof OrderCard>

const Template:ComponentStory<typeof OrderCard>=()=> <OrderCard/>

export const OrderCardComponent = Template.bind({});
