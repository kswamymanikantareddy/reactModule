import { ComponentStory, ComponentMeta } from '@storybook/react';

import OrderSummery from './OrderSummery';
export default {
  title: 'Molecules/OrderSummery',
  component: OrderSummery,
  argTypes: {
    onClick:{action:'clicked'}
  },
} as ComponentMeta<typeof OrderSummery>

const Template:ComponentStory<typeof OrderSummery>=(args)=> <OrderSummery {...args}/>

export const OrderSummeryComponent = Template.bind({});
OrderSummeryComponent.args={
    variant1:'overline',
    leftNum:'0.0234510 BTC',
    variant2:'overline',
    rightNum:'$34,000.00',

}
