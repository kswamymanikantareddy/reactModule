import { ComponentStory, ComponentMeta } from '@storybook/react';

import PaymentDetails from './PaymentDetails';
export default {
  title: 'Molecules/PaymentDetails',
  component:PaymentDetails,
  argTypes: {
    onClick:{action:'clicked'}
  },
} as ComponentMeta<typeof PaymentDetails>

const Template:ComponentStory<typeof PaymentDetails>=()=> <PaymentDetails/>

export const PaymentDetailsComponent = Template.bind({});
