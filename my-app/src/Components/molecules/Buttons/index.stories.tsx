import { ButtonMolecule } from ".";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Stories/Molecule/ButtonMolecule',
    component: ButtonMolecule,
    argTypes: {
      onClick:{action:'clicked'}
    },
  } as ComponentMeta<typeof ButtonMolecule>;

  const Template:ComponentStory<typeof ButtonMolecule>=(args)=><ButtonMolecule/>

 export const Molecule = Template.bind({})
  