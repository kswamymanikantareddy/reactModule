import React from 'react';

import  {Body3} from './Body2';

export default {
  title: 'Example/Body2',
  component: Body3,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args)=><Body3 {...args}/>
export const Text = Template.bind({});
Text.args = {
    element :'13-minute read ',
}
