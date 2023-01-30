import InputField from "./Input";
import { ComponentStory, ComponentMeta } from '@storybook/react';

const CheckBoxComponent = {
    title: 'Example/Input',
    component : InputField,
    argTypes: { onchange: { action: 'clicked' } },
}as ComponentMeta<typeof Input>

const Template:ComponentStory<typeof Input> =args=><InputField {...args}/>
export const Default = Template.bind({});
Default.args={
    maxLength : 10,
    placeholder : 'Enter your text',
   
}

export default CheckBoxComponent;