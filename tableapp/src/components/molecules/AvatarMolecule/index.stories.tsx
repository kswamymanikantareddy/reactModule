import { ComponentStory, ComponentMeta } from '@storybook/react';
import AvatarMolecule from './index';

export default {
  title: 'Molecule/AvatarMolecule',
  component: AvatarMolecule,
  argTypes: {
    onClick:{action:'clicked'}
  },
} as ComponentMeta<typeof AvatarMolecule>;

const Template:ComponentStory<typeof AvatarMolecule>=(args)=><AvatarMolecule {...args}/>

export const AvatarCard = Template.bind({});
AvatarCard.args={
    url:'./assests/1.png',
    variant1:'body1' ,
    variant2:'subtitle1',
    children2:'BTC',
    children1:'Bitcoin'

}