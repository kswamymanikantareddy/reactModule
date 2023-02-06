import InputField from "./Input";

const CheckBoxComponent = {
  title : 'InputField',
    component : 'InputField',
    argTypes: { onClick: { action: 'clicked' } },
}

const Template =args=><InputField {...args}/>
export const Default = Template.bind({});
Default.args={
    maxLength : 10,
    placeholder : 'Enter your text',
   
}

export default CheckBoxComponent;

/*
import Input from "../components/Input";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default{
    title:'Form/Input',
    component:Input
} as ComponentMeta<typeof Input>


export const SmallInput = () => <Input size="small"/>
export const MediumInput = () => <Input size="medium"/>
export const LargeInput = () => <Input size="large"/>

SmallInput.storyName = "small"

const Template:ComponentStory<typeof Input> = args =><Input {...args}/>

export const smallA = Template.bind({})
smallA.args = {
    size : "small"
}

export const largeA = Template.bind({})
largeA.args = {
    size : "large"
} */