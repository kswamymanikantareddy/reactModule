import { ComponentStory, ComponentMeta } from '@storybook/react';
import TableCell from './index';

export default {
  title: 'Atoms/Typography',
  component: TableCell,
  argTypes: {
    onClick:{action:'clicked'}
  },
} as ComponentMeta<typeof TableCell>;

const Template:ComponentStory<typeof TableCell>=(args)=><TableCell {...args}/>

export const Typography = Template.bind({});
Typography.args={
   variant:'body1',
   children:'Bitcoin'

}