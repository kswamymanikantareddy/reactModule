import { ComponentStory, ComponentMeta } from '@storybook/react';

import CryptoTable from './CryptoTable';
export default {
  title: 'Organism/Table',
  component: CryptoTable,
  argTypes: {
    onClick:{action:'clicked'}
  },
} as ComponentMeta<typeof CryptoTable>;

const Template:ComponentStory<typeof CryptoTable>=(args)=><CryptoTable/>

export const CryptoCardState = Template.bind({});