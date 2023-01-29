import React from 'react';

import  {Body} from './Body';

export default {
  title: 'Example/Body',
  component: Body,
};

const Template = (args)=><Body {...args}/>
export const Text = Template.bind({});
