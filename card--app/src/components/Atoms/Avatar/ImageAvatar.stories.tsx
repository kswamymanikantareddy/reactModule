import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from './ImageAvatar';
export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {
    onClick:{action:'clicked'}
  },
} as ComponentMeta<typeof Avatar>

const Template:ComponentStory<typeof Avatar>=(args)=> <Avatar {...args}/>

export const AvatarImage = Template.bind({});
AvatarImage.args={
    url:'./Assests/one.png',
}