import { ComponentStory, ComponentMeta } from '@storybook/react';

import AvatarMolecule from './AvatarMolecule';
export default {
  title: 'Molecules/AvatarMolecule',
  component: AvatarMolecule,
  argTypes: {
    onClick:{action:'clicked'}
  },
} as ComponentMeta<typeof AvatarMolecule>

const Template:ComponentStory<typeof AvatarMolecule>=(args)=> <AvatarMolecule {...args}/>

export const AvatarMoleculeComponent = Template.bind({});
AvatarMoleculeComponent.args={
 children1:'Payment method',
 children2:'Visa credit ...8845',
 url:'./Assests/Vector.png'
}