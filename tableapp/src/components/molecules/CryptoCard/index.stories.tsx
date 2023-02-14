import { ComponentStory, ComponentMeta } from '@storybook/react';

import CryptoMolecule from './cryptoCard';
export default {
  title: 'Molecule/CryptoMolecule',
  component: CryptoMolecule,
  argTypes: {
    onClick:{action:'clicked'}
  },
} as ComponentMeta<typeof CryptoMolecule>;

const Template:ComponentStory<typeof CryptoMolecule>=(args)=><CryptoMolecule/>

export const CryptoCard = Template.bind({});