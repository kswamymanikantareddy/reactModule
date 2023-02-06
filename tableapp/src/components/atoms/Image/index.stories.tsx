import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from './index';
export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {
    onClick:{action:'clicked'}
  },
} as ComponentMeta<typeof Avatar>;

const Template:ComponentStory<typeof Avatar>=(args)=><Avatar {...args}/>

export const AvatarImage = Template.bind({});
AvatarImage.args={
    url:'./assests/1.png',
    alt:'not found'

}